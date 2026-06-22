export type TrackKind = "Original" | "Cover" | "The EASTie Boys";

export type Track = {
  title: string;
  artist: string; // original songwriter / performer
  src: string; // file in /public/songs
  kind: TrackKind;
};

export const tracks: Track[] = [
  // ---- Originals -------------------------------------------------------
  { title: "Wholesome Country Song", artist: "Bailey Conradt", src: "/songs/wholesomeCountrySong.mp3", kind: "Original" },
  { title: "Empty House (demo)", artist: "Bailey Conradt", src: "/songs/emptyHouse.mp3", kind: "Original" },
  { title: "Downpour (demo)", artist: "Bailey Conradt", src: "/songs/downpour.mp3", kind: "Original" },
  { title: "Apollo—Saturn V edition", artist: "Bailey Conradt", src: "/songs/apollo.m4a", kind: "Original" },
  { title: "It's Pizza Time (demo)", artist: "Bailey Conradt", src: "/songs/its_pizza_time.m4a", kind: "Original" },

  // ---- Covers ----------------------------------------------------------
  { title: "Patience", artist: "The Lumineers", src: "/songs/patience.mp3", kind: "Cover" },
  { title: "Make You Feel My Love (ft. Kate Stenson)", artist: "Adele", src: "/songs/make_you_feel_my_love.m4a", kind: "Cover" },
  { title: "betty (ft. Madeline Miner)", artist: "Taylor Swift", src: "/songs/betty.m4a", kind: "Cover" },
  { title: "Drivers License", artist: "Olivia Rodrigo", src: "/songs/drivers_license.m4a", kind: "Cover" },
  { title: "The Long and Winding Road", artist: "The Beatles", src: "/songs/the_long_and_winding_road.m4a", kind: "Cover" },
  { title: "Another Day of Sun", artist: "La La Land", src: "/songs/another_day_of_sun.m4a", kind: "Cover" },
  { title: "If", artist: "David Gates", src: "/songs/If.m4a", kind: "Cover" },
  { title: "Avatar Medley", artist: "ThePandaTooth", src: "/songs/Avatar_Medley.m4a", kind: "Cover" },
  { title: "On Eagle's Wings", artist: "Michael Joncas", src: "/songs/OnEagle'sWings.m4a", kind: "Cover" },
  { title: "Borning Cry", artist: "John Carl Ylvisaker", src: "/songs/Borning_Cry_(Piano).mp3", kind: "Cover" },
  { title: "Canon in D", artist: "Pachelbel", src: "/songs/canonInD.mp3", kind: "Cover" },

  // ---- The EASTie Boys --------------------------------------------------
  { title: "Cisco Finesse", artist: "The EASTie Boys", src: "/songs/ciscoFinesse.wav", kind: "The EASTie Boys" },
  { title: "Walk-In Desk", artist: "The EASTie Boys", src: "/songs/Walk-In_Desk.mp3", kind: "The EASTie Boys" },
  { title: "Imagine", artist: "The EASTie Boys", src: "/songs/Imagine.m4a", kind: "The EASTie Boys" },
  { title: "Coach Me Thru The Phone", artist: "The EASTie Boys", src: "/songs/coach_me_thru_the_phone.m4a", kind: "The EASTie Boys" },
];

/**
 * Streaming embeds. Paste Spotify / YouTube / SoundCloud links here and they'll
 * render as players above the local tracks.
 * type: "spotify" expects a Spotify URL; "youtube" expects a video ID or URL.
 * TODO: add your streaming links.
 */
export type Embed = {
  title: string;
  type: "spotify" | "youtube" | "soundcloud";
  url: string;
};

export const embeds: Embed[] = [
  {
    title: "Bailey Conradt on Spotify",
    type: "spotify",
    url: "https://open.spotify.com/artist/3bvBGRsgL1NMDXYO5ZnRgj",
  },
];

export const trackKinds: TrackKind[] = ["Original", "Cover", "The EASTie Boys"];
