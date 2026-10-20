# Rare & Exclusive — Domain & Email Cutover

## Confirmed domain
rareandexclusive.com

Registrar: Spaceship
Owner: Jan du Plessis / BESPOKE HOMES LTD
Registration remains under the client's ownership.

## Hosting target
CorpFlowAI-managed Vercel deployment.

## Domain rule
Do not transfer domain ownership to CorpFlowAI. Only change DNS records required to connect the domain to the approved production deployment.

## Planned domain sequence
1. Create and QA the protected Vercel deployment.
2. Add rareandexclusive.com and www.rareandexclusive.com to the Vercel project.
3. Record the exact Vercel DNS values shown for the project.
4. Sign in to Spaceship Domain Manager.
5. Update only the required apex and www records.
6. Preserve mail-related MX/TXT records when enabling website DNS.
7. Verify rareandexclusive.com and www redirect/canonical behaviour.
8. Verify TLS.
9. Run live enquiry test.
10. Keep registrar auto-renew enabled unless Jan directs otherwise.

## Email
Required public mailbox:
jan@rareandexclusive.com

The domain order confirmation identifies Spaceship and offers Spacemail. Mail service is separate from web hosting.

Before publishing the email address:
- create the mailbox (or forwarding arrangement);
- verify inbound delivery;
- verify outbound sending;
- configure SPF;
- configure DKIM;
- configure DMARC at an appropriate initial policy;
- confirm website DNS changes do not remove the MX/TXT records.

## Safety
Never send registrar, mailbox or DNS credentials by email or commit them to GitHub.
Use the approved password/secret management method where credentials are required.
