const SNIPS=["import torch","model.fit(X, y)","def detect(img):","  boxes = net(img)","if conf > 0.9:","  draw(boxes)","loss.backward()","opt.step()","print(acc)","git push origin","docker build .","cv2.imshow(f)","return label","while True:"];
const COLS=["#39ff6a","#8cffb0","#4df3ff","#39ff6a"];
function CodeLines({off}){return <>{SNIPS.map((s,i)=>(<text key={i} x="15" y={181+i*8+off} fontSize="6" fontFamily="Consolas,monospace" fill={COLS[i%4]} xmlSpace="preserve">{s}</text>))}</>}
export default function Avatar(){
  return (
    <svg className="char" viewBox="0 0 480 560" aria-label="Anime-style avatar of Mazharul holding a laptop streaming code">
   <defs>
    <filter id="gl" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="fg1" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#ff3d00"/><stop offset=".6" stopColor="#ff9d1a"/><stop offset="1" stopColor="#fff3a0"/></linearGradient>
    <linearGradient id="bm" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#4df3ff" stopOpacity=".6"/><stop offset="1" stopColor="#4df3ff" stopOpacity=".05"/></linearGradient>
    <radialGradient id="fgl"><stop offset="0" stopColor="#39ff6a" stopOpacity=".35"/><stop offset="1" stopColor="#39ff6a" stopOpacity="0"/></radialGradient>
    <radialGradient id="pl"><stop offset="0" stopColor="#4df3ff" stopOpacity=".55"/><stop offset="1" stopColor="#4df3ff" stopOpacity="0"/></radialGradient>
    <clipPath id="hc"><ellipse cx="190" cy="128" rx="58" ry="76"/></clipPath>
   </defs>
   <ellipse cx="190" cy="548" rx="170" ry="22" fill="url(#pl)"/>
   <ellipse cx="190" cy="548" rx="120" ry="12" fill="none" stroke="#4df3ff" strokeOpacity=".6"/>
   <g id="cg">
    <rect x="122" y="462" width="62" height="84" rx="8" fill="#1a1530"/><rect x="196" y="462" width="62" height="84" rx="8" fill="#1a1530"/>
    <ellipse cx="150" cy="548" rx="36" ry="9" fill="#0a0818"/><ellipse cx="228" cy="548" rx="36" ry="9" fill="#0a0818"/>
    <path d="M95 225Q190 195 285 225L282 478Q190 494 98 478Z" fill="#3a2233" stroke="#4df3ff" strokeOpacity=".5"/>
    <polygon points="156,208 190,335 224,208" fill="#7b2cbf"/>
    <polygon points="182,236 198,236 207,332 190,376 173,332" fill="#d1365d"/><rect x="180" y="226" width="20" height="16" rx="4" fill="#b32a4c"/>
    <path d="M156 208L130 330M224 208L250 330" stroke="#241421" strokeWidth="3" fill="none"/>
    <g stroke="#3a2233" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M98 232L56 326L48 262" strokeWidth="32"/><path d="M282 232L322 330L352 276" strokeWidth="32"/></g>
    <circle cx="47" cy="246" r="17" fill="#c68b63"/><circle cx="356" cy="262" r="16" fill="#c68b63"/>
    <g filter="url(#gl)" transform="rotate(-30 348 290)"><rect x="335" y="282" width="28" height="17" rx="4" fill="#06102c" stroke="#4df3ff" strokeWidth="2"/><circle cx="349" cy="290" r="4" fill="#4df3ff"/></g>
    <polygon className="beam" points="349,282 300,222 478,222" fill="url(#bm)"/>
    <circle cx="47" cy="196" r="78" fill="url(#fgl)"/>
<g filter="url(#gl)"><rect x="8" y="164" width="78" height="64" rx="5" fill="#04150b" stroke="#4df3ff" strokeWidth="2"/></g>
<rect x="8" y="164" width="78" height="9" rx="4" fill="#0c2a18"/><circle cx="15" cy="168.5" r="1.6" fill="#ff5f56"/><circle cx="21" cy="168.5" r="1.6" fill="#ffbd2e"/><circle cx="27" cy="168.5" r="1.6" fill="#27c93f"/>
<clipPath id="sc"><rect x="12" y="175" width="70" height="49"/></clipPath>
<g clipPath="url(#sc)"><g className="strm"><CodeLines off={0}/><CodeLines off={112}/></g></g>
<rect x="-2" y="228" width="98" height="8" rx="3" fill="#1c2340" stroke="#4df3ff" strokeOpacity=".8"/>
<text className="em" x="30" y="158" fontSize="10" fontFamily="Consolas,monospace">1</text><text className="em" x="52" y="154" fontSize="9" fontFamily="Consolas,monospace">0</text><text className="em" x="68" y="160" fontSize="11" fontFamily="Consolas,monospace">{"{}"}</text>
    <rect x="172" y="190" width="36" height="34" fill="#c68b63"/>
    <g id="head">
<path d="M126 122C118 52 160 26 192 26C230 26 264 54 254 122L250 108L130 108Z" fill="#15131d"/>
<ellipse cx="132" cy="136" rx="8" ry="13" fill="#d29a70"/><ellipse cx="248" cy="136" rx="8" ry="13" fill="#d29a70"/>
<path d="M133 104C133 62 247 62 247 104L246 140C240 180 215 201 190 203C165 201 140 180 134 140Z" fill="#d9a279"/>
<path d="M240 110L246 140C240 180 215 201 190 203C222 192 238 160 240 110Z" fill="#b97f57" opacity=".35"/>
<ellipse cx="150" cy="154" rx="11" ry="6" fill="#e58a6a" opacity=".22"/><ellipse cx="230" cy="154" rx="11" ry="6" fill="#e58a6a" opacity=".22"/>
<path d="M190 130L186 151Q190 156 196 151" stroke="#a96f4a" strokeWidth="2" fill="none" strokeLinecap="round"/>
<g className="eyes"><ellipse cx="166" cy="127" rx="14" ry="9.5" fill="#fff"/><ellipse cx="214" cy="127" rx="14" ry="9.5" fill="#fff"/>
<g id="pup"><ellipse cx="166" cy="127" rx="7.5" ry="9" fill="#3b2416"/><ellipse cx="214" cy="127" rx="7.5" ry="9" fill="#3b2416"/><circle cx="166" cy="127" r="4" fill="#0b0605"/><circle cx="214" cy="127" r="4" fill="#0b0605"/><circle cx="169" cy="123" r="2.2" fill="#fff"/><circle cx="217" cy="123" r="2.2" fill="#fff"/></g>
<path d="M150 126Q166 113 182 126M198 126Q214 113 230 126" stroke="#15131d" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
<path d="M153 134Q166 139 180 134M200 134Q214 139 227 134" stroke="#9a6648" strokeWidth="1.4" fill="none" opacity=".6"/></g>
<path d="M150 111Q165 104 182 108M198 108Q215 104 230 111" stroke="#15131d" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
<path d="M166 166Q178 159 190 163Q202 159 214 166Q202 170 190 168Q178 170 166 166Z" fill="#2a2024"/>
<path d="M170 181Q190 177 210 181Q216 202 190 210Q164 202 170 181Z" fill="#1d1719"/>
<path d="M180 174Q190 177 200 174" stroke="#8a4338" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
<path d="M129 128C126 58 158 30 192 30C228 30 258 58 251 128L244 100C242 88 236 77 228 72L216 87L204 76L190 91L176 76L164 87L154 72C146 78 142 90 138 102Z" fill="#15131d"/>
<path d="M170 44Q192 36 214 46M156 58Q176 48 190 52M206 54Q224 50 238 62" stroke="#3d3a66" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity=".8"/>
</g>
   </g>
  </svg>
  );
}
