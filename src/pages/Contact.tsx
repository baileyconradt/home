import { useState } from "react";
import { socials } from "../data/site";
import PageHeader from "../components/PageHeader";
import CorgiDigitalCTA from "../components/CorgiDigitalCTA";
import { SocialIcon, EmailIcon } from "../components/Icons";

// Assemble the address from parts so it never appears as one contiguous,
// scrape-friendly string in the page. Bots that don't run JS see nothing.
const EMAIL_USER = "baileyconradt";
const EMAIL_DOMAIN = "gmail.com";
const getEmail = () => `${EMAIL_USER}@${EMAIL_DOMAIN}`;

export default function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const openMail = (subject: string, body: string) => {
    const params = `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = `mailto:${getEmail()}${params}`;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openMail(
      `Website message from ${name || "someone"}`,
      `${message}\n\n— ${name}${from ? ` (${from})` : ""}`
    );
  };

  const field =
    "w-full rounded-lg bg-[var(--color-ink-soft)] border border-[var(--color-line)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)] transition-colors";

  return (
    <div className="container-x">
      <PageHeader
        eyebrow="Say hi"
        title="Get in touch"
        subtitle="Whether it's about a project, a website, music, or political work—I'd love to hear from you."
      />

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="card p-6">
            <p className="eyebrow mb-2">Email</p>
            <p className="text-[var(--color-fg-muted)] text-sm mb-4">
              The quickest way to reach me. This opens your mail app—your
              address stays private until you send.
            </p>
            <button
              type="button"
              onClick={() => openMail("Hello Bailey", "")}
              className="btn btn-primary"
            >
              <EmailIcon className="h-4 w-4" /> Email me
            </button>
          </div>

          <p className="eyebrow mt-8 mb-3">Elsewhere</p>
          <div className="flex flex-wrap gap-3">
            {socials
              .filter((s) => s.icon !== "email")
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:border-[var(--color-accent)] transition-colors"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="card p-6 flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1.5 text-[var(--color-fg-muted)]">Name</label>
            <input className={field} value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm mb-1.5 text-[var(--color-fg-muted)]">Your email</label>
            <input type="email" className={field} value={from} onChange={(e) => setFrom(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm mb-1.5 text-[var(--color-fg-muted)]">Message</label>
            <textarea className={`${field} min-h-32 resize-y`} value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary justify-center">
            Send message
          </button>
          <p className="text-xs text-[var(--color-fg-muted)]">
            This opens your email app with the message pre-filled.
          </p>
        </form>
      </div>

      <div className="mt-12">
        <CorgiDigitalCTA />
      </div>
    </div>
  );
}
