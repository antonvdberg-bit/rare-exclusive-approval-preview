# Rare & Exclusive — Deployment Runbook

## Environments

### Approval preview
GitHub Pages remains the design/content approval environment. It stays noindex and the enquiry form remains inactive there.

### Protected production staging
Use a Vercel Git-linked project for the complete production-capable build, including /api/enquiry and /api/health. Keep the staging deployment protected and unindexed while QA is underway.

### Public production
Public production is rareandexclusive.com. The same codebase automatically enables production enquiry behaviour only on rareandexclusive.com and www.rareandexclusive.com.

## Confirmed production identity
- Operating entity: BESPOKE HOMES LTD trading as Rare & Exclusive
- Company No.: 239976
- Jurisdiction: Mauritius
- Principal contact: Jan du Plessis
- Production domain: rareandexclusive.com
- Hosting: managed by CorpFlowAI as part of implementation

## Enquiry routing
The server-side enquiry endpoint forwards validated enquiries to the approved CorpFlowAI workflow.

Required secret:
- RNE_ENQUIRY_WEBHOOK_URL

Optional secret:
- RNE_ENQUIRY_WEBHOOK_TOKEN

Secrets must be injected through the centrally managed Infisical process and must never be committed to source control.

## Staging release sequence
1. Deploy Git main to a protected Vercel preview.
2. Verify /api/health.
3. Configure approved enquiry routing using Infisical-backed environment injection.
4. Submit controlled test enquiries in staging.
5. Confirm downstream lead creation/routing.
6. Complete desktop/mobile/browser/performance QA.
7. Confirm legal-page review.
8. Capture rollback deployment/commit.
9. Only then prepare DNS cutover.

## Public release sequence
1. Obtain final release approval.
2. Attach rareandexclusive.com and www.rareandexclusive.com to the approved Vercel project.
3. Apply required DNS records at Spaceship.
4. Verify TLS.
5. Confirm production host switches form into live mode.
6. Verify live enquiry end-to-end.
7. Remove review-only UI and noindex controls in the authorised release commit.
8. Verify indexing metadata and social cards.
9. Monitor first production enquiries and runtime errors.

## Analytics
Launch with privacy-conscious operational analytics only. Advertising and remarketing trackers remain disabled. Introduce a stronger cookie-consent layer if advertising/remarketing tracking is added later.

## Email
The intended public address is jan@rareandexclusive.com. Do not publish it until the mailbox is active and tested.

## Release control
A preview or staging update is not permission to publish rareandexclusive.com. DNS cutover and search indexing are separate release decisions.
