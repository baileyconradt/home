import type { Track } from "../data/music";

/**
 * Lightweight track card using the native <audio> element so playback works
 * without extra JS. The browser only fetches audio when the user hits play.
 */
export default function TrackCard({ track }: { track: Track }) {
  return (
    <div className="card p-4 flex flex-col gap-3">
      <div>
        <h4 className="font-semibold leading-tight">{track.title}</h4>
        <p className="text-sm text-[var(--color-fg-muted)]">{track.artist}</p>
      </div>
      <audio controls preload="none" className="w-full">
        <source src={encodeURI(track.src)} />
        Your browser doesn't support audio playback.
      </audio>
    </div>
  );
}
