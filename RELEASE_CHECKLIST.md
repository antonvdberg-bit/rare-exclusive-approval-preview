# Rare & Exclusive — Release Checklist

## Gate A — build
- [x] Responsive landing page
- [x] Desktop and mobile hero media
- [x] Approved headline and core positioning
- [x] Property-first / furniture-next category structure
- [x] Minimal transactional-partner wording
- [x] Private-access form UI
- [x] Server-side enquiry endpoint
- [x] Health endpoint
- [x] Review/production host switching
- [x] Privacy and website terms production drafts
- [x] Source control and approval preview

## Gate B — production integration
- [x] Create Vercel project (`rare-exclusive`) and deploy staging build
- [ ] Inject RNE_ENQUIRY_WEBHOOK_URL through Infisical
- [x] CorpFlowAI receiver route deployed: POST https://core.corpflowai.com/api/intake/rare-exclusive
- [x] CorpFlowAI -> ERPNext Lead adapter merged and production deployed (no Opportunity/Customer at intake)
- [ ] Inject RNE_ENQUIRY_WEBHOOK_TOKEN if downstream endpoint requires it
- [x] Confirm /api/health responds successfully
- [ ] Confirm /api/health reports enquiryConfigured=true after routing secret injection
- [ ] Send controlled test enquiry
- [ ] Confirm downstream CorpFlowAI / ERPNext lead creation
- [ ] Confirm no secrets appear in repository or browser source

## Gate C — client-facing infrastructure
- [x] Domain confirmed: rareandexclusive.com
- [x] Domain registrar identified: Spaceship
- [ ] Activate and test jan@rareandexclusive.com
- [ ] Obtain/confirm DNS administration access for release
- [ ] Add Vercel domain before DNS cutover
- [ ] Verify apex and www records
- [ ] Verify TLS certificate

## Gate D — legal / content
- [x] Operating entity confirmed: BESPOKE HOMES LTD trading as Rare & Exclusive
- [x] Company No. 239976
- [x] Contact/address details incorporated in drafts
- [ ] Final legal review of Privacy and Website Terms
- [ ] Confirm first featured opportunity may be published with final commercial content
- [ ] Confirm final logo/monogram artwork if a production vector becomes available

## Gate E — QA
- [ ] Chrome desktop
- [ ] Edge desktop
- [ ] Safari/iPhone
- [ ] Chrome/Android
- [ ] Form validation
- [ ] Reduced-motion behaviour
- [ ] Keyboard/focus accessibility
- [ ] Hero loading/fallback poster
- [ ] 404 page
- [ ] Privacy/Terms links
- [ ] Performance audit
- [ ] Broken-link check
- [ ] Social metadata check

## Gate F — release
- [ ] Capture approved commit SHA and rollback deployment
- [ ] Remove review ribbon/navigation from production release
- [ ] Remove noindex from public pages and X-Robots-Tag
- [ ] Point rareandexclusive.com DNS
- [ ] Verify HTTPS and www/apex canonical behaviour
- [ ] Submit live test enquiry
- [ ] Monitor runtime errors and first enquiries
- [ ] Record launch date and release SHA

## Current blockers
1. Infisical shared-secret injection and R&E sender configuration. CorpFlowAI intake destination is deployed and verified.
2. Mailbox activation for jan@rareandexclusive.com.
3. Final legal and release approval.

Current staging deployment is live at the Vercel project alias and remains `noindex`. Git auto-connection still needs repository authorization in Vercel, but manual/CLI deployment is operational.

Analytics are intentionally OFF for the first release, so analytics/consent does not block launch. Advertising/remarketing tracking can be added later with the appropriate consent layer.


## 22 October 2026 — Enquiry integration verification
- [x] Rare & Exclusive production environment contains RNE_ENQUIRY_WEBHOOK_URL and RNE_ENQUIRY_WEBHOOK_TOKEN.
- [x] CorpFlowAI production contains RNE_INTAKE_SHARED_SECRET.
- [x] /api/health verified with enquiryConfigured=true.
- [x] Controlled Rare & Exclusive enquiry submitted successfully through /api/enquiry.
- [x] CorpFlowAI Lead captured under tenant rare-exclusive (lead id cmvj7gefk0000l7086tsw5mxi).
- [x] ERPNext bridge completed with state=synced.
- [x] ERPNext Lead created/updated as CRM-LEAD-2026-00011.
- [x] Intake remained at Lead/new stage; no Opportunity/Customer promotion is triggered by initial enquiry.

## Commercial hold � 22 October 2026
- [ ] Payment receipt verified in authoritative ERPNext commercial record (do not assume payment).
- [ ] Explicit Anton release authorization obtained after payment verification.
- [ ] Only then proceed with public domain cutover, removing noindex, or public launch.
- [x] Pre-payment hold recorded: no DNS modification or public launch authorized.
- [ ] Browser/device, accessibility, performance and final content QA pending unless separately evidenced.

Pre-release review URLs are public/unindexed and are not authenticated private previews. Do not describe them as access-controlled.


## 25 October 2026 - Quotation accepted; controlled deployment authorized

Source: Jan du Plessis email of 24 October 2026, subject RE: Rare & Exclusive - Website Project Quotation, replying to CorpFlowAI quotation sent 20 October 2026.

Jan's exact response: "Approved , payment upon receipt of commissions in next week or 2"

Commercial interpretation approved by CorpFlowAI operator on 25 October 2026:
- [x] Client written acceptance recorded for MUR 45,000 fixed website quotation.
- [x] Proposed commission-contingent payment timing (approximately 1-2 weeks after 24 October) accepted as a working payment arrangement, NOT recorded as cash received or a guaranteed due date.
- [x] No upfront deposit; original quotation states payment due on written acceptance of completed website. Preserve both this condition and Jan's subsequent payment proposal; do not invent payment dates.
- [x] Controlled client production environment setup and pre-launch deployment may proceed without waiting for cash receipt.
- [ ] ERPNext quotation acceptance and agreed payment arrangement to be verified/updated in authoritative commercial records.
- [ ] Payment receipt remains unverified; pursue confirmation as commissions are received.
- [ ] Final legal/content sign-off, mailbox, DNS access, TLS, device QA and domain checks remain separate release requirements.
- [ ] Public DNS cutover, removal of noindex or public go-live require explicit operator release authorization after commercial and operational gates are reviewed.

This section supersedes only the absolute pre-payment deployment hold dated 22 October. It does not assert payment, completed QA, public-release authorization, or any new scope beyond the accepted quotation. Existing public/unindexed review pages are not authenticated private previews.
