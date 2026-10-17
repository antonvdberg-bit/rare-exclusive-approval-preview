# Rare & Exclusive - Deployment Runbook

## Approval preview
The current site is a design and content approval environment. Search indexing remains disabled and enquiry submission remains inactive.

## Production release prerequisites
- Final logo and design language approved.
- Final media supplied and approved.
- Rare & Exclusive operating entity and contact details confirmed.
- Privacy and website terms reviewed.
- Enquiry routing destination confirmed.
- Analytics and consent model confirmed.
- Production domain confirmed.
- Desktop, mobile, browser and performance QA completed.

## Enquiry routing
The production build includes a server-side enquiry endpoint that can forward validated enquiries to an approved CorpFlowAI workflow. Production routing credentials must be injected through the centrally managed Infisical process and must not be committed to source control.

## Release control
The approval preview and the public production release are separate states. A preview update is not authorisation to publish publicly.
