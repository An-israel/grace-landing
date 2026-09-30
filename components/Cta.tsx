import { site } from "@/site.config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Cta({ label = "Join the FREE WhatsApp Group", sub = true }: { label?: string; sub?: boolean }) {
  return (
    <div className="cta-wrap">
      <a className="cta" href={site.whatsappGroup} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        <span>{label}</span>
        <span className="cta-arrow" aria-hidden="true">→</span>
      </a>
      {sub && <p className="cta-sub">No experience needed · Leave anytime</p>}
    </div>
  );
}
