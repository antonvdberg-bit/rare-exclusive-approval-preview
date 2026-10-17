const MAX = Object.freeze({
  name: 120,
  email: 254,
  interest: 120,
  message: 4000,
  page: 500
});

function clean(value, max) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function validEmail(value) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const website = clean(body.website, 200);
  if (website) return res.status(200).json({ ok: true });

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const interest = clean(body.interest, MAX.interest);
  const message = clean(body.message, MAX.message);
  const page = clean(body.page, MAX.page);
  const consent = body.consent === true;

  if (!name || !email || !message || !consent || !validEmail(email)) {
    return res.status(400).json({ ok: false, error: "Please complete the required fields." });
  }

  const webhook = process.env.RNE_ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    return res.status(503).json({ ok: false, error: "Enquiry routing is not yet configured." });
  }

  let webhookUrl;
  try { webhookUrl = new URL(webhook); }
  catch { return res.status(503).json({ ok: false, error: "Enquiry routing is not yet configured." }); }

  if (webhookUrl.protocol !== "https:") {
    return res.status(503).json({ ok: false, error: "Enquiry routing is not yet configured." });
  }

  const payload = {
    event: "rare_exclusive.private_access_requested",
    occurred_at: new Date().toISOString(),
    source: "rare-exclusive-website",
    contact: { name, email },
    interest,
    message,
    consent: true,
    page
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const headers = { "content-type": "application/json" };
    if (process.env.RNE_ENQUIRY_WEBHOOK_TOKEN) {
      headers.authorization = `Bearer ${process.env.RNE_ENQUIRY_WEBHOOK_TOKEN}`;
    }

    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    if (!upstream.ok) {
      return res.status(502).json({ ok: false, error: "We could not send your request. Please try again." });
    }
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ ok: false, error: "We could not send your request. Please try again." });
  } finally {
    clearTimeout(timeout);
  }
};