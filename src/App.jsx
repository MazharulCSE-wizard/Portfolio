import { useEffect, useRef, useState } from "react";
import Cosmos from "./Cosmos.jsx";
import Avatar from "./Avatar.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import { PROFILE, SKILLS, PROJECTS, RESEARCH, CERTS, EXPERIENCE, RANKS, stats } from "./data.js";

const SNIP = ["def forward(self, x):","    h = self.encoder(x)","    return softmax(h @ W.T)","for epoch in range(EPOCHS):","    loss.backward(); opt.step()","model.fit(X_train, y_train)","SELECT * FROM signs WHERE conf>0.9;","const res = await detect(frame);","if (!ok) throw new Error('retry');","#include <stdio.h>","int main(void){ return run(); }","embeddings = model.encode(chunks)","scores = cosine(q, vecs)","git commit -m 'level up'","docker build -t rank-s ."];
let CODE = ""; for (let i = 0; i < 60; i++) CODE += SNIP[(i * 7 + 3) % SNIP.length] + "\n"; CODE += CODE;

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
function Section({ id, title, children }) {
  const ref = useReveal();
  return <section id={id} ref={ref} className="rv"><h2>{title}</h2>{children}</section>;
}
const Ladder = () => RANKS.map((r, i) => <span key={r[0]} className={i === stats.ri ? "on" : i < stats.ri ? "done" : ""}>{r[0]}</span>);
function Cards({ items, empty }) {
  if (!items.length) return <div className="grid"><div className="empty">{empty}</div></div>;
  return (
    <div className="grid">
      {items.map((x) => (
        <div className="card" key={x.title}>
          <h3>{x.title}</h3><div className="meta">{x.date}</div><p>{x.desc}</p>
          {(x.tags || []).map((t) => <span className="tag" key={t}>{t}</span>)}
          {x.link && <div style={{ marginTop: 6 }}><a href={x.link} target="_blank" rel="noopener noreferrer">View on GitHub &rarr;</a></div>}
        </div>
      ))}
    </div>
  );
}
function Typed() {
  const [txt, setTxt] = useState("");
  useEffect(() => {
    let ro = 0, ch = 0, del = false, id;
    const tick = () => {
      const w = PROFILE.roles[ro]; ch += del ? -1 : 1; setTxt(w.slice(0, ch));
      let d = del ? 40 : 85;
      if (!del && ch === w.length) { del = true; d = 1400; }
      else if (del && ch === 0) { del = false; ro = (ro + 1) % PROFILE.roles.length; d = 300; }
      id = setTimeout(tick, d);
    };
    tick();
    return () => clearTimeout(id);
  }, []);
  return <div className="role">{txt}</div>;
}

export default function App() {
  const stageRef = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      const r = stageRef.current.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / innerWidth, y = (e.clientY - (r.top + r.height / 2)) / innerHeight;
      const cg = document.getElementById("cg"), pup = document.getElementById("pup");
      cg.style.transform = `translate(${x * 10}px,${y * 6}px) rotate(${x * 3}deg)`; cg.style.transition = "transform .2s";
      pup.style.transform = `translate(${Math.max(-4, Math.min(4, x * 40))}px,${Math.max(-2, Math.min(3, y * 30))}px)`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  const { xp, level, pct, rank, nextR } = stats;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}&su=${encodeURIComponent("Opportunity for Mazharul Islam")}`;
  return (
    <>
      <Cosmos />
      <MusicPlayer />
      <nav><b>M.ISLAM</b><div>{["status","skills","projects","research","certs","exp","contact"].map((s) => <a key={s} href={"#" + s}>{s === "exp" ? "Experience" : s === "certs" ? "Certs" : s}</a>)}</div></nav>
      <main>
        <section className="hero" id="top">
          <div>
            <small>// SYSTEM ONLINE &middot; PLAYER DETECTED</small>
            <h1>{PROFILE.name}</h1>
            <Typed />
            <p>{PROFILE.bio}</p>
            <div className="btns"><a className="btn" href="#projects">View Quests</a><a className="btn f" href="#contact">Contact</a></div>
          </div>
          <div className="stage" ref={stageRef}>
            <div className="code"><div>{CODE}</div></div>
            <Avatar />
            <div className="holo">
              <h4>HUNTER STATUS</h4>
              <div className="row"><div>LV <b style={{ color: "#fff", fontSize: "1.6em" }}>{level}</b></div><div className="big">{rank === "BEYOND S" ? "S+" : rank}</div></div>
              <div className="xp"><i style={{ width: pct + "%" }} /></div>
              <div style={{ color: "#8c93b8" }}>XP {xp} &middot; {pct}% to LV {level + 1}</div>
              <div className="lad"><Ladder /></div>
            </div>
          </div>
        </section>

        <Section id="status" title="System Status">
          <div className="card status">
            <div style={{ textAlign: "center" }}><div className="big">{rank}</div><div style={{ color: "var(--fire)", letterSpacing: 3, fontSize: 12 }}>{rank === "BEYOND S" ? "BEYOND S" : "RANK"}</div></div>
            <div>
              <div style={{ fontSize: 22, marginBottom: 8 }}>Level {level} <span style={{ color: "var(--muted)", fontSize: 14 }}>&middot; {xp} XP</span></div>
              <div className="xp" style={{ height: 8 }}><i style={{ width: pct + "%" }} /></div>
              <div className="lad" style={{ fontSize: 15, margin: "14px 0" }}><Ladder /></div>
              <div style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>
                {nextR ? <>Next rank <b style={{ color: "var(--cyan)" }}>{nextR[0]}</b> unlocks at level {nextR[1]}. Ship projects, publish research and earn certificates to gain XP.</> : "You have transcended the ladder."} Rank is calculated automatically from the entries below.
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid">
            {Object.entries(SKILLS).map(([cat, arr]) => (
              <div className="card" key={cat}><h3>{cat}</h3>
                {arr.map((s) => (
                  <div className="sk" key={s[0]}><span>{s[0]}</span>
                    <span className="dots">{[1,2,3,4,5].map((n) => <i key={n} className={n <= s[1] ? "on" : ""} />)}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects"><Cards items={PROJECTS} empty="No projects yet." /></Section>
        <Section id="research" title="Research"><Cards items={RESEARCH} empty="No research entries yet." /></Section>
        <Section id="certs" title="Certificates"><Cards items={CERTS} empty="No certificates yet." /></Section>
        <Section id="exp" title="Experience"><Cards items={EXPERIENCE} empty="First quest pending. Experience entries will appear here once added." /></Section>

        <Section id="contact" title="Contact">
          <div className="card">
            <p style={{ color: "var(--muted)", marginTop: 0 }}>Open to internships, research positions and full-time roles. Remote, hybrid or on-site.</p>
            <div className="btns">
              <a className="btn" href={gmail} target="_blank" rel="noopener noreferrer">Email</a>
              <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="btn f" href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 13, margin: "16px 0 0" }}>{PROFILE.email} &middot; <a href={"mailto:" + PROFILE.email} style={{ color: "var(--cyan)" }}>use my default mail app instead</a></p>
          </div>
        </Section>
      </main>
      <footer>&copy; {new Date().getFullYear()} Mazharul Islam &middot; Built like a dungeon, shipped like a product.</footer>
    </>
  );
}
