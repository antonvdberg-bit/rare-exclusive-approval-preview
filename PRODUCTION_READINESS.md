# Rare & Exclusive — Production Readiness

## Current state
The client-facing design shell, approval preview and production enquiry adapter are substantially built.

## Completed / prepared
- Premium responsive page shell
- Original-source Palm Bay desktop and mobile hero media
- Public positioning and core copy
- Jan-approved cinematic hero treatment
- Updated headline: “Rare by Nature & Exclusive by Design.”
- Principles and conduct section
- How We Work journey
- Property-first category positioning with furniture as the proposed next category
- Featured-opportunity treatment using supplied high-resolution material
- Private-access enquiry UI
- Server-side enquiry adapter with validation and webhook routing
- Review-mode / production-mode form behaviour
- Honeypot bot field and consent requirement
- Health endpoint
- Design-approval workflow
- Change-control record
- Draft privacy and website terms pages
- No-index review deployment
- Git source control and published review environment
- Security-header configuration for Vercel
- Branded favicon and 404 page

## Waiting on client / commercial inputs
- Final design-language approval
- Confirmation of proposed transactional-partner public wording
- Confirmation of property/furniture category wording
- Final operating entity and legal details
- Final enquiry destination / CRM workflow
- Production domain decision
- Final privacy / terms legal particulars
- Analytics / consent preference
- First featured-opportunity approved commercial content

## Production engineering remaining
- Configure RNE_ENQUIRY_WEBHOOK_URL through Infisical-backed deployment secrets
- Configure optional webhook token through Infisical-backed deployment secrets
- Connect the approved downstream CorpFlowAI / ERPNext intake
- Enable production analytics after consent model is confirmed
- Finalise public SEO/social cards
- Replace review no-index rules only when public launch is authorised
- Cross-browser/mobile QA
- Performance audit
- Production deployment + domain + TLS verification
- Final release checklist and rollback point

## Change resilience
Content, branding, media and category changes are isolated from the page structure. Jan’s remaining review changes should be amendments rather than rebuilds unless the approved architecture changes materially.
