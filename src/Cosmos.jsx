import { useEffect, useRef } from "react";
export default function Cosmos() {
  const ref = useRef(null);
  useEffect(() => {
    const cl = [];
    const add = (t, f) => { window.addEventListener(t, f); cl.push(() => window.removeEventListener(t, f)); };
    let raf;
    /* quiet space pond: galaxies, nebulae, ripples (nothing drawn over text) */
const cv=ref.current,cx=cv.getContext("2d");
let W,H,stars=[],rip=[],shoot=[],last={x:-999,y:-999,t:0},amb=0,nextS=3000,base,gal=[];
const rnd=(a,b)=>a+Math.random()*(b-a),gauss=()=>(Math.random()+Math.random()+Math.random()-1.5)/1.5;
function makeGal(sz,arms,warm,cool,tight){const c=document.createElement("canvas");c.width=c.height=sz;const g=c.getContext("2d"),m=sz/2;
 const gr=g.createRadialGradient(m,m,0,m,m,m*.9);gr.addColorStop(0,"rgba(255,235,190,.95)");gr.addColorStop(.12,warm);gr.addColorStop(.5,cool);gr.addColorStop(1,"rgba(0,0,0,0)");g.fillStyle=gr;g.globalAlpha=.6;g.fillRect(0,0,sz,sz);
 for(let i=0;i<7000;i++){const t=Math.pow(Math.random(),.7),a=i%arms,th=t*tight+a*(6.283/arms)+gauss()*(.5-.3*t),r=t*m*.92,s=rnd(.5,1.7);
  g.globalAlpha=rnd(.25,.9)*(1-t*.5);g.fillStyle=Math.random()<.22?"#fff":t<.3?"#ffe3b0":Math.random()<.5?"#9fd0ff":"#d9a8ff";g.fillRect(m+Math.cos(th)*r,m+Math.sin(th)*r,s,s)}
 return c}
function init(){const d=Math.min(devicePixelRatio||1,1.5);W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);
 stars=Array.from({length:190},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.3+.2,s:Math.random()*6,c:Math.random()<.2?"#ffd9a8":Math.random()<.3?"#a8c8ff":"#e8f2ff"}));
 base=document.createElement("canvas");base.width=W;base.height=H;const b=base.getContext("2d"),M=Math.max(W,H),mn=Math.min(W,H);
 b.fillStyle="#02030a";b.fillRect(0,0,W,H);
 [[.2,.3,.5,"120,60,220",.24],[.78,.72,.55,"30,160,200",.17],[.55,.12,.38,"220,70,160",.15],[.08,.88,.45,"90,50,200",.2],[.5,.55,.6,"40,50,140",.12]].forEach(n=>{const gr=b.createRadialGradient(W*n[0],H*n[1],0,W*n[0],H*n[1],M*n[2]);gr.addColorStop(0,`rgba(${n[3]},${n[4]})`);gr.addColorStop(1,`rgba(${n[3]},0)`);b.fillStyle=gr;b.fillRect(0,0,W,H)});
 const px=W*.9,py=H*.9,pr=mn*.08;
 b.strokeStyle="rgba(190,170,255,.35)";b.lineWidth=3;b.beginPath();b.ellipse(px,py,pr*1.9,pr*.5,-.4,Math.PI,6.283);b.stroke();
 const pg=b.createRadialGradient(px-pr*.4,py-pr*.4,pr*.1,px,py,pr);pg.addColorStop(0,"#8a78ff");pg.addColorStop(.6,"#2a1a6a");pg.addColorStop(1,"#05030f");b.fillStyle=pg;b.beginPath();b.arc(px,py,pr,0,6.283);b.fill();
 b.beginPath();b.ellipse(px,py,pr*1.9,pr*.5,-.4,0,Math.PI);b.stroke();
 gal=[{c:makeGal(420,2,"rgba(255,170,90,.4)","rgba(110,90,255,.18)",5),x:W*.86,y:H*.2,sz:mn*.8,tilt:.5,ang:-.5,rot:0,sp:.00006},
      {c:makeGal(320,3,"rgba(255,140,200,.35)","rgba(60,200,255,.16)",4.2),x:W*.06,y:H*.78,sz:mn*.55,tilt:.42,ang:.6,rot:1,sp:-.00008}]}
add("resize",init);init();
function drop(x,y,s,n){for(let k=0;k<n;k++)rip.push({x,y,r:-k*16,v:.8+s*.6,max:90+s*130+k*20});if(rip.length>80)rip.splice(0,rip.length-80)}
add("pointermove",e=>{const now=performance.now(),d=Math.hypot(e.clientX-last.x,e.clientY-last.y);
 if(d>22&&now-last.t>45){drop(e.clientX,e.clientY,Math.min(d/70,1),2);last={x:e.clientX,y:e.clientY,t:now}}});
add("pointerdown",e=>drop(e.clientX,e.clientY,1,4));
function draw(t){
 cx.drawImage(base,0,0,W,H);
 gal.forEach(g=>{cx.save();cx.translate(g.x,g.y);cx.rotate(g.ang);cx.scale(1,g.tilt);cx.rotate(g.rot+t*g.sp);cx.globalAlpha=.8;cx.drawImage(g.c,-g.sz/2,-g.sz/2,g.sz,g.sz);cx.restore()});
 stars.forEach(s=>{cx.globalAlpha=.35+.55*Math.abs(Math.sin(t/1100+s.s));cx.fillStyle=s.c;cx.beginPath();cx.arc(s.x,s.y,s.r,0,6.3);cx.fill()});cx.globalAlpha=1;
 if(t>nextS){shoot.push({x:rnd(0,W*.8),y:rnd(0,H*.45),vx:rnd(7,11),vy:rnd(2.5,4.5),l:0});nextS=t+rnd(5000,11000)}
 for(let i=shoot.length-1;i>=0;i--){const s=shoot[i];s.x+=s.vx;s.y+=s.vy;s.l++;if(s.l>45){shoot.splice(i,1);continue}
  cx.strokeStyle=`rgba(255,255,255,${1-s.l/45})`;cx.lineWidth=1.6;cx.beginPath();cx.moveTo(s.x,s.y);cx.lineTo(s.x-s.vx*7,s.y-s.vy*7);cx.stroke()}
 if(t>amb){drop(Math.random()*W,Math.random()*H,.4,2);amb=t+2600+Math.random()*2500}
 for(let i=rip.length-1;i>=0;i--){const p=rip[i];p.r+=p.v;if(p.r>=p.max){rip.splice(i,1);continue}if(p.r<0)continue;
  const l=p.r/p.max,a=Math.pow(1-l,1.6)*.32;
  cx.lineWidth=1.8*(1-l)+.5;cx.strokeStyle=`rgba(140,225,255,${a})`;cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.3);cx.stroke();
  cx.lineWidth=1;cx.strokeStyle=`rgba(255,255,255,${a*.35})`;cx.beginPath();cx.arc(p.x,p.y,p.r+3,0,6.3);cx.stroke()}
 if(!matchMedia("(prefers-reduced-motion:reduce)").matches||t<50)raf=requestAnimationFrame(draw)}
raf=requestAnimationFrame(draw);


    return () => { cancelAnimationFrame(raf); cl.forEach((f) => f()); };
  }, []);
  return <canvas id="bg" ref={ref} />;
}
