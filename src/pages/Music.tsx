import { tracks, embeds, trackKinds } from "../data/music";
import TrackCard from "../components/TrackCard";
import MusicEmbed from "../components/MusicEmbed";
import PageHeader from "../components/PageHeader";

export default function Music() {
  return (
    <div className="container-x">
      <PageHeader
        eyebrow="Sound"
        title="Music"
        subtitle="Piano covers and original demos I've recorded, plus group tracks with the EASTie Boys. Hit play on any track."
      />

      {/* Streaming embeds (optional) */}
      {embeds.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-5">Streaming</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {embeds.map((e) => (
              <MusicEmbed key={e.url} embed={e} />
            ))}
          </div>
        </section>
      )}

      {/* Local tracks grouped by kind */}
      {trackKinds.map((kind) => {
        const group = tracks.filter((t) => t.kind === kind);
        if (group.length === 0) return null;
        return (
          <section key={kind} className="mb-12">
            <h2 className="text-2xl font-bold mb-5">{kind === "Cover" ? "Covers" : kind === "Original" ? "Originals" : kind}</h2>
            {kind === "The EASTie Boys" && (
              <img
                src="/images/EASTieBoys.png"
                alt="The EASTie Boys"
                className="mb-6 w-56 max-w-full"
              />
            )}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.map((t) => (
                <TrackCard key={t.title} track={t} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
