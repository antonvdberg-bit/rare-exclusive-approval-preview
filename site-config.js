const productionHosts = new Set(["rareandexclusive.com", "www.rareandexclusive.com"]);
const isProductionHost = productionHosts.has(window.location.hostname.toLowerCase());

window.RNE_CONFIG = Object.freeze({
  reviewMode: !isProductionHost,
  enquiryEndpoint: "/api/enquiry",
  release: isProductionHost ? "production-v1" : "approval-preview-v1",
  analyticsEnabled: false
});
