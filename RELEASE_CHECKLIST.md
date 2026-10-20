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
1. Downstream enquiry destination and Infisical secret injection.
2. Mailbox activation for jan@rareandexclusive.com.
3. Final legal and release approval.

Current staging deployment is live at the Vercel project alias and remains `noindex`. Git auto-connection still needs repository authorization in Vercel, but manual/CLI deployment is operational.

Analytics are intentionally OFF for the first release, so analytics/consent does not block launch. Advertising/remarketing tracking can be added later with the appropriate consent layer.
