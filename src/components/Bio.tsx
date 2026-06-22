/**
 * Bailey's bio, carried over from the original site. Kept as a component so the
 * wording renders consistently on Home and About.
 * Plain-text mirror lives in site.about (for meta/SEO).
 */
export default function Bio({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      I'm a web developer, project manager, and musician from Green Bay,
      Wisconsin. When I'm not building websites, you can usually find me jamming
      out to Taylor Swift, keeping up to date on the latest political news{" "}
      <a
        href="https://iwillvote.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--color-accent-soft)] hover:underline"
      >
        (make sure you're registered to vote!)
      </a>
      , or making silly memes!
    </p>
  );
}
