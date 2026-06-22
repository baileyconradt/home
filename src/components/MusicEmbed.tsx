import type { Embed } from "../data/music";

function youtubeId(url: string): string {
  // Accepts a full URL or a bare ID.
  const m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  return m ? m[1] : url;
}

function spotifyEmbed(url: string): string {
  // Turn open.spotify.com/<type>/<id> into the /embed/ form.
  return url.replace("open.spotify.com/", "open.spotify.com/embed/");
}

export default function MusicEmbed({ embed }: { embed: Embed }) {
  return (
    <div className="card overflow-hidden">
      {embed.title && (
        <div className="px-4 pt-4 pb-2 text-sm font-semibold">{embed.title}</div>
      )}
      {embed.type === "spotify" && (
        <iframe
          title={embed.title}
          src={spotifyEmbed(embed.url)}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}
      {embed.type === "youtube" && (
        <div className="aspect-video">
          <iframe
            title={embed.title}
            src={`https://www.youtube.com/embed/${youtubeId(embed.url)}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      )}
      {embed.type === "soundcloud" && (
        <iframe
          title={embed.title}
          width="100%"
          height="166"
          frameBorder="0"
          allow="autoplay"
          loading="lazy"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(embed.url)}&color=%237c5cff`}
        />
      )}
    </div>
  );
}
