var H=Object.defineProperty;var L=(f,e,a)=>e in f?H(f,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):f[e]=a;var N=(f,e,a)=>(L(f,typeof e!="symbol"?e+"":e,a),a);const R=["article","main",'[role="main"]',".content",".post-content",".entry-content",".article-content",".story-content"],A="truthscan-highlight-panel";function T(){var e;(e=document.getElementById(A))==null||e.remove(),document.querySelectorAll("mark.truthscan-inline-highlight").forEach(a=>{const i=a.parentNode;if(i){for(;a.firstChild;)i.insertBefore(a.firstChild,a);i.removeChild(a)}}),document.body.normalize()}function F(f,e){var E,w;if(T(),f.length===0)return;const a=f.filter(t=>e==="fake"?t.fakeScore>=45:e==="ai"?t.aiScore>=45:t.fakeScore>=45||t.aiScore>=45),i=[];let g="";const S=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(t){const r=t.parentElement;if(r){const o=r.tagName.toLowerCase();if(o==="script"||o==="style"||o==="noscript")return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT}});let b=S.nextNode();for(;b;){const t=b,r=t.nodeValue||"";for(let o=0;o<r.length;o++){const n=r[o];/\s/.test(n)?(g.length===0||g[g.length-1]!==" ")&&(g+=" ",i.push({node:t,offset:o})):(g+=n,i.push({node:t,offset:o}))}b=S.nextNode()}const y=new Map;for(const t of a){const r=t.text.replace(/\s+/g," ").trim();if(!r)continue;let o=g.indexOf(r),n=r.length;if(o===-1){const d=r.slice(0,Math.min(40,r.length));d.length>=15&&(o=g.indexOf(d),n=d.length)}if(o!==-1){const d=o+n-1;let c="rgba(249, 115, 22, 0.3)",s="rgba(249, 115, 22, 0.8)",u=`TruthScan Flagged
Fake Risk: ${t.fakeScore}% | AI Likelihood: ${t.aiScore}%`;if(e==="fake"){const l=t.fakeScore>=60;c=l?"rgba(239, 68, 68, 0.35)":"rgba(239, 68, 68, 0.2)",s=l?"rgba(239, 68, 68, 0.85)":"rgba(239, 68, 68, 0.5)",u=`🔴 TruthScan: Fake News Risk (${t.fakeScore}%)`}else if(e==="ai"){const l=t.aiScore>=60;c=l?"rgba(139, 92, 246, 0.35)":"rgba(139, 92, 246, 0.2)",s=l?"rgba(139, 92, 246, 0.85)":"rgba(139, 92, 246, 0.5)",u=`🟣 TruthScan: AI-Generated (${t.aiScore}%)`}else{const l=Math.max(t.fakeScore,t.aiScore),p=t.fakeScore>t.aiScore,x=l>=60;p?(c=x?"rgba(239, 68, 68, 0.35)":"rgba(239, 68, 68, 0.2)",s=x?"rgba(239, 68, 68, 0.85)":"rgba(239, 68, 68, 0.5)"):(c=x?"rgba(139, 92, 246, 0.35)":"rgba(139, 92, 246, 0.2)",s=x?"rgba(139, 92, 246, 0.85)":"rgba(139, 92, 246, 0.5)")}let h=null,m=-1;for(let l=o;l<=d;l++){const p=i[l];if(p&&p.node!==h){if(h&&m!==-1){const x=i[l-1],C=y.get(h)||[];C.push({startOffset:m,endOffset:x.offset+1,color:c,borderColor:s,title:u}),y.set(h,C)}h=p.node,m=p.offset}}if(h&&m!==-1){const l=i[d];if(l){const p=y.get(h)||[];p.push({startOffset:m,endOffset:l.offset+1,color:c,borderColor:s,title:u}),y.set(h,p)}}}}for(const[t,r]of y.entries()){r.sort((n,d)=>d.startOffset-n.startOffset);let o=t;for(const n of r){const d=((E=o.nodeValue)==null?void 0:E.length)||0;if(!(n.startOffset<0||n.endOffset>d||n.startOffset>=n.endOffset))try{let c=o;n.endOffset<d&&c.splitText(n.endOffset),n.startOffset>0&&(c=c.splitText(n.startOffset));const s=document.createElement("mark");s.className="truthscan-inline-highlight",s.style.backgroundColor=n.color,s.style.color="inherit",s.style.borderRadius="2px",s.style.borderBottom=`2px solid ${n.borderColor}`,s.style.padding="2px 0",s.title=n.title,c.replaceWith(s),s.appendChild(c)}catch(c){console.warn("[TruthScan Content] Failed inline wrap:",c)}}}const I=e==="fake"?"🔴 Fake Risk":e==="ai"?"🟣 AI-Generated":"🟠 Both",v=e==="fake"?"#ef4444":e==="ai"?"#8b5cf6":"#f97316",O=f.map(t=>{const r=e==="fake"?t.fakeScore:e==="ai"?t.aiScore:Math.max(t.fakeScore,t.aiScore),o=r>=60,n=r>=40&&r<60,d=o?"rgba(239,68,68,0.15)":n?"rgba(249,115,22,0.12)":"rgba(34,197,94,0.10)",c=o?"#ef4444":n?"#f97316":"#22c55e",s=o?`${r}%`:n?`${r}%`:`${r}%`,u=o?"🔴":n?"🟠":"🟢",h=t.text.length>120?t.text.slice(0,117)+"…":t.text;return`<div style="
      padding:8px 10px;
      background:${d};
      border-left:3px solid ${c};
      border-radius:4px;
      font-size:11px;
      line-height:1.5;
      color:#e2e8f0;
    ">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <span style="font-size:10px;color:#94a3b8;">
          ${e==="both"?`Fake: ${t.fakeScore}% | AI: ${t.aiScore}%`:`Score: ${s}`}
        </span>
        <span style="font-size:12px;">${u}</span>
      </div>
      <div style="color:#cbd5e1;">"${h}"</div>
    </div>`}).join(""),$=a.length===0,k=document.createElement("div");k.id=A,k.innerHTML=`
    <div style="
      position:fixed;
      bottom:20px;
      right:20px;
      width:340px;
      max-height:480px;
      background:#0f172a;
      border:1px solid ${v}55;
      border-radius:12px;
      box-shadow:0 8px 32px rgba(0,0,0,0.6);
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
      z-index:2147483647;
      display:flex;
      flex-direction:column;
      overflow:hidden;
    ">
      <!-- Header -->
      <div style="
        display:flex;align-items:center;justify-content:space-between;
        padding:12px 14px;
        background:#1e293b;
        border-bottom:1px solid ${v}44;
        flex-shrink:0;
      ">
        <div>
          <div style="font-size:12px;font-weight:700;color:#f1f5f9;">${I} Inline Highlights</div>
          <div style="font-size:10px;color:#34d399;margin-top:2px;font-weight:500;">
            ✓ Inline text highlighted on page
          </div>
        </div>
        <button id="truthscan-close-btn" style="
          background:none;border:none;color:#64748b;cursor:pointer;
          font-size:18px;line-height:1;padding:2px 6px;
        ">×</button>
      </div>
      <!-- Note -->
      <div style="padding:8px 14px;background:#1e293b22;border-bottom:1px solid #ffffff11;flex-shrink:0;">
        <p style="font-size:9px;color:#475569;margin:0;line-height:1.4;">
          Hover over highlighted text on the webpage to see detailed score tooltips.
        </p>
      </div>
      <!-- Sentences -->
      <div style="overflow-y:auto;padding:10px;display:flex;flex-direction:column;gap:6px;flex:1;">
        ${$?`<div style="text-align:center;padding:24px;color:#475569;font-size:12px;">
              No sentences crossed the threshold for this mode.
             </div>`:O}
      </div>
    </div>
  `,document.body.appendChild(k),(w=document.getElementById("truthscan-close-btn"))==null||w.addEventListener("click",T)}class z{constructor(){N(this,"analysisRunning",!1);this.bootstrap()}bootstrap(){chrome.runtime.onMessage.addListener((e,a,i)=>{if(console.log("[TruthScan Content] Message received:",e.type),e.type==="ANALYZE_PAGE")return this.runPageAnalysis().then(i),!0;if(e.type==="GET_CURRENT_URL")return i({url:window.location.href}),!0;if(e.type==="HIGHLIGHT_SENTENCES"){const{scores:g,mode:S}=e;try{F(g,S??"fake"),i({success:!0})}catch(b){i({success:!1,error:String(b)})}return!0}if(e.type==="CLEAR_HIGHLIGHTS")return T(),i({success:!0}),!0}),this.initAutoScan()}initAutoScan(){chrome.storage.local.get(["autoScan"],e=>{e.autoScan&&(console.log("[TruthScan Content] Auto-scan enabled, scheduling..."),setTimeout(()=>this.runPageAnalysis(),2e3))})}async runPageAnalysis(){if(this.analysisRunning)return{error:"Analysis already in progress"};this.analysisRunning=!0,console.log("[TruthScan Content] Starting page analysis...");try{const e=this.gatherPageData();return this.analysisRunning=!1,{success:!0,content:e}}catch(e){return this.analysisRunning=!1,console.error("[TruthScan Content] Analysis error:",e),{error:e instanceof Error?e.message:"Unknown error"}}}gatherPageData(){return{title:document.title||"",text:this.collectTextNodes(),url:window.location.href,timestamp:new Date}}collectTextNodes(){for(const a of R){const i=document.querySelector(a);if(i)return(i.innerText||i.textContent||"").replace(/\s+/g," ").trim().substring(0,1e4)}return(document.body.innerText||document.body.textContent||"").replace(/\s+/g," ").trim().substring(0,1e4)}scan(){return this.runPageAnalysis()}}const _=new z;console.log("[TruthScan Content] Content script initialized");window.truthScanInspector=_;
