import { site } from "@/site.config";

export function CreditBadge() {
  return (
    <a className="credit-badge" href={site.credit.url} target="_blank" rel="noopener noreferrer">
      <span className="credit-dot" aria-hidden="true" />
      <span className="credit-label">Built by</span>
      <strong>{site.credit.label}</strong>
      <span className="credit-arrow" aria-hidden="true">↗</span>
    </a>
  );
}
