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
