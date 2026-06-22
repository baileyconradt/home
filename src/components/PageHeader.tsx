export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="pt-14 pb-8">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-fg-muted)]">{subtitle}</p>
      )}
    </header>
  );
}
