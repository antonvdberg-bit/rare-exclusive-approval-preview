module.exports = function handler(_req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({
    ok: true,
    service: "rare-exclusive-web",
    enquiryConfigured: Boolean(process.env.RNE_ENQUIRY_WEBHOOK_URL)
  });
};