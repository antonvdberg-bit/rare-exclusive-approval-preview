# Rare & Exclusive — Production Readiness

## Current state
The first public-release build is substantially complete. Remaining work is production integration, legal sign-off, final QA and release control rather than major page construction.

## Completed / prepared
- Premium responsive page shell
- Original-source Palm Bay desktop and mobile hero media
- Jan-approved cinematic hero treatment
- Headline: “Rare by Nature & Exclusive by Design.”
- Principles and conduct section
- How We Work journey
- Property-first positioning with exclusive furniture as the next category
- Featured-opportunity treatment using supplied high-resolution material
- Minimal public transactional-partner wording
- Private-access enquiry UI
- Server-side enquiry adapter with validation, consent, honeypot and webhook routing
- Host-aware review/production form behaviour
- Health endpoint
- Design approval and change-control workflow
- BESPOKE HOMES LTD legal entity details integrated into legal-page drafts
- Production domain confirmed: rareandexclusive.com
- CorpFlowAI hosting included in implementation
- Git source control and published review environment
- Security-header configuration for Vercel
- Branded favicon and 404 page

## Confirmed operating details
- Legal entity: BESPOKE HOMES LTD
- Company number: 239976
- Trading name: Rare & Exclusive
- Jurisdiction: Mauritius
- Principal contact: Jan du Plessis
- Contact number: 55081350
- Billing/contact address supplied: Ave Jasmin, Pointe aux Canonniers, Mauritius
- Production domain: rareandexclusive.com
- Intended client-facing email: jan@rareandexclusive.com
- Hosting: CorpFlowAI managed hosting included in the implementation
- Lead model: R&E / AI qualification first, approved transactional partner where required for closing

## Remaining external / approval items
- Activate jan@rareandexclusive.com
- Final legal review of Privacy and Website Terms
- Final first featured-opportunity commercial content and release confirmation
- Final design-language approval if Jan wishes to make further visual changes
- DNS access at release time

## Production engineering remaining
- Create protected Vercel staging deployment from Git
- Configure RNE_ENQUIRY_WEBHOOK_URL through Infisical-backed deployment secrets
- Configure optional webhook token through Infisical-backed deployment secrets
- Connect approved downstream CorpFlowAI / ERPNext intake
- Keep advertising/remarketing analytics disabled at launch
- Complete desktop/mobile/browser QA and performance audit
- Verify health and enquiry endpoint in staging
- Prepare DNS records for rareandexclusive.com
- Final release checklist and rollback point
- Remove noindex controls only at authorised public launch

## Release rule
Preview/staging deployment is not public-launch authorisation. rareandexclusive.com must not be pointed to the production deployment until final release approval.

## Verified operating state - 26 October 2026 (supersedes stale engineering to-do list above)

- The CorpFlowAI-owned `rare-exclusive` Vercel project has a READY production-targeted deployment, but the client domain has NOT been cut over. The hosted review deployments are public/unindexed, not authenticated private surfaces.
- Production environment variable names `RNE_ENQUIRY_WEBHOOK_URL`, `RNE_ENQUIRY_WEBHOOK_TOKEN`, and CorpFlowAI `RNE_INTAKE_SHARED_SECRET` were previously verified in their respective Vercel projects; the token value must remain secret and Infisical-governed.
- Authenticated `/api/health` returned `enquiryConfigured:true` on 22 and 26 October.
- Controlled synthetic `/api/enquiry` returned HTTP 200; GitHub release verification records CorpFlowAI Lead `cmvj7gefk0000l7086tsw5mxi`, ERPNext `CRM-LEAD-2026-00011`, bridge `synced`, with lead-only intake behavior. Do not mistake a synthetic success for complete launch QA.
- JavaScript syntax and local reference checks passed; desktop Chrome headless screenshot generation succeeded, but full cross-browser visual, accessibility, security and performance acceptance are NOT evidenced.
- Jan approved the issued MUR 45,000 website quotation by email 24 October. CorpFlowAI operator accepted Jan's proposal for payment when commissions arrive (anticipated one or two weeks, not a fixed due date). No payment receipt is confirmed. ERPNext quotation `SAL-QTN-2026-00010` acceptance/status reconciliation remains pending; no second quotation or invoice should be generated.
- The controlled environment and final QA may progress before cash receipt. Public site activation, DNS cutover, removal of noindex restrictions, and release declaration require separate explicit operator authorization and legal/content/technical gates.
- Domain remains client-owned at Spaceship; exact DNS and email MX/TXT configuration must be captured and approved before any modification. Mailbox activation, sending/receiving and SPF/DKIM/DMARC tests are still pending.
- Next evidence required: authenticated ERPNext read-back and appropriately authorised commercial update via #1390; mobile/desktop visual and accessibility/performance QA; client DNS permissions and mailbox readiness; final content/legal approval; approved rollback and public cutover plan.

Consult `RELEASE_CHECKLIST.md` for dated evidence and the authoritative release gates. This update is documentation only and does not declare production public launch.
