import { useEffect, useRef, useState } from "react";

const TRACK = "/music/bg.mp3.mp3";   // match your real file name
const TITLE = "Background Music";
const START_VOLUME = 0.7;

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [vol, setVol] = useState(START_VOLUME);
  const [missing, setMissing] = useState(false);

  useEffect(() => { if (audioRef.current) audioRef.current.volume = vol; }, [vol]);

  useEffect(() => {
    const a = audioRef.current;
    const events = ["pointerdown", "keydown", "touchstart"];
    const cleanup = () => events.forEach((ev) => window.removeEventListener(ev, start));
    function start(e) {
      if (e.target.closest && e.target.closest(".mp")) { cleanup(); return; } // let the button handle its own clicks
      a.play().then(cleanup).catch(() => {});
    }
    a.play().catch(() => events.forEach((ev) => window.addEventListener(ev, start)));
    return cleanup;
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (a.paused) a.play().catch(() => {});
    else a.pause();
  };

  return (
    <div className={"mp" + (playing ? " on" : "")}>
      <audio
        ref={audioRef}
        src={TRACK}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setMissing(true)}
      />
      <button className="mp-btn" onClick={toggle} aria-label={playing ? "Pause music" : "Play music"} title={missing ? "Add public/music/bg.mp3" : TITLE}>
        {playing ? (
          <span className="eq"><i /><i /><i /><i /></span>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        )}
      </button>
      <span className="mp-t">{missing ? "add bg.mp3" : playing ? "now playing" : "play music"}</span>
      <input className="mp-v" type="range" min="0" max="1" step="0.01" value={vol} onChange={(e) => setVol(+e.target.value)} aria-label="Volume" />
    </div>
  );
}