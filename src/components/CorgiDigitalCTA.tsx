import { corgiDigital } from "../data/site";
import { ArrowIcon } from "./Icons";

/** "Let's talk websites" callout pointing to Bailey's Corgi Digital studio. */
export default function CorgiDigitalCTA() {
  return (
    <div className="card p-8 md:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-l-4 border-l-[var(--color-accent)]">
      <div className="flex items-center gap-5">
        <img
          src="/images/corgi-logo.png"
          alt="Corgi Digital logo"
          className="h-20 w-20 shrink-0 object-contain"
        />
        <div>
          <p className="eyebrow mb-2">Work with me</p>
          <h2 className="text-2xl md:text-3xl font-bold">Looking for a website?</h2>
          <p className="mt-3 max-w-xl text-[var(--color-fg-muted)]">
            I design and build websites for local businesses through{" "}
            <strong className="text-[var(--color-fg)]">{corgiDigital.name}</strong>,
            my web studio in Green Bay. Want to talk websites? Get in touch over
            there—I'd love to help.
          </p>
        </div>
      </div>
      <a
        href={corgiDigital.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary shrink-0 self-start md:self-auto"
      >
        Visit Corgi Digital <ArrowIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
