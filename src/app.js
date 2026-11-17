const BR=["Army","Navy","Marines","AF","SF"],CM=["act","grd","res"];
const N={Army:"Army",Navy:"Navy",Marines:"Marine Corps",AF:"Air Force",SF:"Space Force"};
const CN={act:"Active duty",grd:"National Guard",res:"Reserve"};
const POP="https://opamil-production1.app.cloud.gov/research-analysis/jamrs-recruiting-awareness/population-representation/2023-population-representation-in-the-military-services/";
const TB="https://docs.opa.mil/opa.mil-production1/population-representation-23/Appendix%20B.%20Active%20Component%20Enlisted%20Accessions,%20Enlisted%20Force,%20Officer%20Accessions,%20and%20Officer%20Corps%20Tables/";
const WK="https://en.wikipedia.org/wiki/";
const SRC={pop:["DoD Population Representation report, FY23",POP],b:["Appendix B",POP+"population-representation-in-the-military-services-fy23-appendix-b-active-component-accessions-and-force/"],c:["Appendix C",POP+"population-representation-in-the-military-services-fy23-appendix-c-selected-reserve-gains-and-force/"],b28:["Table B-28",TB+"Table%20B-28.%20Active%20Component%20Commissioned%20Officer%20Corps,%20FY23-%20By%20Occupational%20Area,%20Service,%20and%20Sex.pdf"],b34:["Table B-34",TB+"Table%20B-34.%20Active%20Component%20Warrant%20Officer%20Gains%20and%20Corps,%20FY23-%20By%20Service%20and%20Sex%20with%20Civilian%20Comparison%20Groups.pdf"],b36:["Table B-36",TB+"Table%20B-36.%20Active%20Component%20Enlisted%20Members,%20FY23-%20By%20Paygrade,%20Service,%20and%20Sex.pdf"],b38:["Table B-38",TB+"Table%20B-38.%20Active%20Component%20Commissioned%20Officer%20Corps,%20FY23-%20By%20Paygrade,%20Service,%20and%20Sex.pdf"],afs:["Air & Space Forces Magazine almanac","https://www.airandspaceforces.com/article/2025-usaf-ussf-almanac-daf-personnel/"],army:["List of United States Army careers",WK+"List_of_United_States_Army_careers"],navy:["List of United States Navy ratings",WK+"List_of_United_States_Navy_ratings"],navoff:["List of United States Naval officer designators",WK+"List_of_United_States_Naval_officer_designators"],usmc:["List of United States Marine Corps MOS",WK+"List_of_United_States_Marine_Corps_MOS"],afw:["Air Force Specialty Code",WK+"Air_Force_Specialty_Code"],dod:["DoD 1312.1-I, Occupational Conversion Index","https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodm/131201i.pdf"]};
const sl=(k,t)=>`<a href="${SRC[k][1]}" target="_blank" rel="noopener">${esc(t||SRC[k][0])}</a>`;
const CARDS=[
{h:"Headcount and paygrades",it:[
{k:"pop",t:"Population Representation in the Military Services, FY2023",d:"Produced by the DoD Office of People Analytics from Defense Manpower Data Center records. Figures are as of Sept. 30, 2023."},
{k:"b",t:"Appendix B, active component tables",d:"Occupational areas (Tables B-20 and B-28), warrant officers (B-34), enlisted paygrades (B-36), and officer paygrades (B-38).",l:["b28","b34","b36","b38"]},
{k:"c",t:"Appendix C, Selected Reserve tables",d:"Occupational areas for Guard and Reserve enlisted (Table C-14) and officers (C-23)."}]},
{h:"Air Force headcount by specialty",it:[{k:"afs",t:"2025 USAF and USSF Almanac, Air & Space Forces Magazine",d:"Enlisted and officer personnel by Air Force specialty code, active duty, as of Sept. 30, 2024."}]},
{h:"Job code lists",it:[{k:"army",d:"Army MOS and officer branches."},{k:"navy",d:"Navy enlisted ratings."},{k:"navoff",d:"Navy officer designators."},{k:"usmc",d:"Marine Corps MOS."},{k:"afw",d:"Air Force enlisted and officer specialty codes."}],p:"These pages are volunteer-compiled and can lag the services' own manuals."},
{h:"How groups are defined",it:[{k:"dod",d:"The DoD crosswalk that sorts service jobs into occupational areas. This page assigns each code to a group by best fit and does not apply the crosswalk."}],p:"Official job definitions live in each service's manual: Army DA PAM 611-21, the Marine Corps MOS Manual, the Navy Enlisted Occupational Classification System, and the Air Force enlisted and officer classification directories."}];
const EK=["inf","elx","comm","med","tech","admin","elec","craft","supply","non"];
const OK=["gen","tac","intel","eng","sci","health","admin","supply","non"];
const E={Army:[93639,15437,50389,28608,11955,51368,46892,8406,39940,9919],Navy:[25889,48879,22400,23124,3724,24786,76728,11180,24650,11305],Marines:[32655,8740,13912,0,3947,24382,23962,4663,15683,23388],AF:[7395,14155,42524,17951,9620,35236,62493,10356,37310,16864],SF:[4293,7,26,1,3,16,5,1,2,101]};
const O={Army:[273,21635,6760,10105,7965,14545,5514,7399,3138],Navy:[192,19815,3499,4895,2433,9787,2592,2196,7845],Marines:[85,7726,1500,1626,610,0,1274,2795,2810],AF:[241,22079,7304,4140,4193,11031,3534,4176,3908],SF:[24,1995,497,524,469,2,41,831,27]};
const EG={Army:[58683,8263,20605,14239,8138,38979,33950,16654,42604,35819],AF:[3128,3442,16103,4401,3566,14689,20047,4850,12382,6128]};
const ER={Army:[8838,3753,9777,13830,6216,37466,16061,10102,27995,3377],Navy:[4415,4305,4011,4760,293,8263,6942,4229,3713,404],Marines:[6884,965,2633,0,510,4619,4062,1192,4212,3324],AF:[2229,1850,5745,5166,1739,11628,10809,2834,6858,2520]};
const OG={Army:[263,9656,2006,6752,1656,4870,3476,4744,4799],AF:[211,5650,2076,1169,702,2690,1735,650,1148]};
const OR={Army:[117,2421,3583,4581,4809,8427,3436,4958,3371],Navy:[44,2157,1561,1682,1132,2121,2448,445,1631],Marines:[13,2093,413,323,258,0,268,755,68],AF:[63,5254,1739,924,1358,2844,1030,892,625]};
const CMP={act:{e:E,o:O},grd:{e:EG,o:OG},res:{e:ER,o:OR}};
const G=[
{id:"tac",ic:"target",name:"Combat and tactical operations",e:["inf"],o:["tac"],le:"Infantry, gun crews, seamanship",lo:"Tactical operations"},
{id:"elec",ic:"tool",name:"Equipment repair and engineering",e:["elec"],o:["eng"],le:"Electrical / equipment repair",lo:"Engineering and maintenance"},
{id:"elx",ic:"cpu",name:"Electronics repair",e:["elx"],o:[]},
{id:"comm",ic:"signal",name:"Communications and intelligence",e:["comm"],o:["intel"],le:"Communications and intelligence",lo:"Intelligence"},
{id:"med",ic:"cross",name:"Medical and health care",e:["med"],o:["health"],le:"Medical",lo:"Health care"},
{id:"admin",ic:"clip",name:"Administration",e:["admin"],o:["admin"],same:true},
{id:"supply",ic:"box",name:"Supply and service",e:["supply"],o:["supply"],le:"Supply and service handlers",lo:"Supply, procurement, allied"},
{id:"tech",ic:"flask",name:"Technical and scientific",e:["tech"],o:["sci"],le:"Other technical",lo:"Scientists and professionals"},
{id:"craft",ic:"hammer",name:"Craftsmen",e:["craft"],o:[]},
{id:"gen",ic:"star",name:"General officers",e:[],o:["gen"]},
{id:"non",ic:"cap",name:"Non-occupational",e:["non"],o:["non"],same:true}];
const GRD={Army:{e:[11737,20287,44068,103848,68326,58130,36366,10305,3486],o:[9483,12307,26821,16023,8733,3694,118,96,44,15],w:15457},Navy:{e:[12791,13232,40256,53785,70224,49818,22812,6943,2804],o:[6708,7370,18645,10599,6586,3154,104,53,28,7],w:2015},Marines:{e:[13801,16105,39387,31278,24070,12818,8106,4084,1683],o:[2734,3903,5750,3945,1941,687,37,30,16,2],w:2200},AF:{e:[8226,7714,44490,64810,56125,41230,24029,4742,2538],o:[6788,6911,21104,13425,9098,3177,123,68,39,11],w:0},SF:{e:[135,113,935,623,1058,826,587,130,48],o:[519,521,1310,1140,688,222,11,6,5,2],w:0}};
const pc1=(n,t)=>t?(n/t*100).toFixed(1)+"%":"0.0%";
function renderGr(bs,cs){
const el=document.getElementById("gr");
const head=`<div class="sh"><span class="shl">Rank structure</span><span class="rule"></span><span class="shs">Active duty, Sept. 30, 2023. Source: ${sl("b36")}, ${sl("b38")}, ${sl("b34")}</span></div>`;
if(!cs.includes("act")){el.innerHTML=head+`<div class="gn">The report publishes paygrade counts for active duty only. Select Active duty to see them.</div>`;return;}
const rows=[];
for(let n=10;n>=1;n--)rows.push({l:"O-"+n,t:"o",n:n,f:b=>GRD[b].o[n-1]});
rows.push({l:"W-1 to W-5",t:"w",n:0,f:b=>GRD[b].w});
for(let n=9;n>=1;n--)rows.push({l:"E-"+n,t:"e",n:n,f:b=>GRD[b].e[n-1]});
rows.forEach(r=>{r.per=bs.map(b=>({k:b,v:r.f(b)}));r.v=r.per.reduce((s,p)=>s+p.v,0);});
const tot=t=>rows.filter(r=>r.t===t).reduce((s,r)=>s+r.v,0);
const et=tot("e"),ot=tot("o"),wt=tot("w");
const band=(t,a,z)=>rows.filter(r=>r.t===t&&r.n>=a&&r.n<=z).reduce((s,r)=>s+r.v,0);
const tiles=[["Junior enlisted","E-1 to E-4","e",1,4],["NCOs","E-5 to E-6","e",5,6],["Senior NCOs","E-7 to E-9","e",7,9],["Company-grade officers","O-1 to O-3","o",1,3],["Field-grade officers","O-4 to O-6","o",4,6],["General and flag officers","O-7 to O-10","o",7,10]];
const th=tiles.map(x=>{const v=band(x[2],x[3],x[4]);return `<div class="tile"><div class="tl">${sw(x[2])}${x[1]}</div><div class="tv">${fmt(v)}</div><div class="ts">${x[0]} · ${pc1(v,x[2]==="e"?et:ot)} of ${x[2]==="e"?"enlisted":"officers"}</div></div>`;}).join("");
const mx=Math.max.apply(null,rows.map(r=>r.v))||1;
const gname={o:"Officers",w:"Warrant officers",e:"Enlisted"},gtot={o:ot,w:wt,e:et};
let last="";
const pyr=rows.map(r=>{
let h="";
if(r.t!==last){last=r.t;h=`<div class="pg">${st.mode==="rank"?sw(r.t):""}${gname[r.t]} <b>${fmt(gtot[r.t])}</b></div>`;}
const parts=st.mode==="branch"?r.per.map(p=>({k:p.k,v:p.v,n:N[p.k]})):[{k:st.mode==="comp"?"act":r.t,v:r.v,n:st.mode==="comp"?"Active duty":gname[r.t]}];
const segs=parts.filter(p=>p.v>0).map(p=>`<div title="${esc(p.n)}: ${fmt(p.v)}" style="flex:${p.v} 1 0;background:${col(p.k)}"></div>`).join("");
const pt=r.t==="e"?pc1(r.v,et):r.t==="o"?pc1(r.v,ot):"";
return h+`<div class="pr"><span class="pl t-${r.t}">${r.l}</span><div class="pb"><div style="width:${r.v>0?Math.max(r.v/mx*100,0.6):0}%">${segs}</div></div><span class="pv">${fmt(r.v)}<i>${pt}</i></span></div>`;}).join("");
const multi=bs.length>1;
const trs=rows.map(r=>`<tr><td>${r.l}</td>${r.per.map(p=>`<td>${r.t==="w"&&!p.v?"–":fmt(p.v)}</td>`).join("")}${multi?`<td>${fmt(r.v)}</td>`:""}</tr>`).join("");
const trt=`<tr class="tt"><td>All grades</td>${bs.map(b=>`<td>${fmt(rows.reduce((s,r)=>s+r.f(b),0))}</td>`).join("")}${multi?`<td>${fmt(et+ot+wt)}</td>`:""}</tr>`;
el.innerHTML=head+`<div class="tiles">${th}</div>
<p class="gn">E-1 and E-2 together are ${fmt(rows.filter(r=>r.t==="e"&&r.n<=2).reduce((s,r)=>s+r.v,0))} people, ${pc1(band("e",1,2),et)} of enlisted. O-1 and O-2 together are ${fmt(band("o",1,2))}, ${pc1(band("o",1,2),ot)} of officers.</p>
<div class="pyr">${pyr}</div>
<p class="gn">The report does not split warrant officers by W-1 to W-5, and the Air Force and Space Force have none.</p>
<div class="tw"><table class="gt"><thead><tr><th>Grade</th>${bs.map(b=>`<th>${N[b]}</th>`).join("")}${multi?"<th>All</th>":""}</tr></thead><tbody>${trs}${trt}</tbody></table></div>`;}
const IC={target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',tool:'<path d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1-3 3l-6-6a6 6 0 0 1-8-8L7 10"/>',cpu:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M3 10h2M3 14h2M19 10h2M19 14h2M10 3v2M14 3v2M10 19v2M14 19v2"/>',signal:'<path d="M5 18v-3M10 18v-6M15 18V9M20 18V5"/>',cross:'<path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z"/>',clip:'<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><path d="M9 12h6M9 16h6"/>',box:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',flask:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M8 15h8"/>',hammer:'<path d="M3.5 20.5l8-8"/><path d="M14 3l7 7-3 3-7-7z"/><path d="M11 6l7 7"/>',star:'<path d="M12 17.75l-6.17 3.25 1.18-6.87-5-4.87 6.9-1L12 3.9l3.09 6.36 6.9 1-5 4.87 1.18 6.87z"/>',cap:'<path d="M22 9l-10-4L2 9l10 4 10-4v6"/><path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4"/>',right:'<path d="M9 6l6 6-6 6"/>',down:'<path d="M6 9l6 6 6-6"/>',dn2:'<path d="M7 7l5 5 5-5M7 13l5 5 5-5"/>',up2:'<path d="M7 11l5-5 5 5M7 17l5-5 5 5"/>'};
const ico=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const col=k=>`var(--c-${k})`;
const st={sel:new Set(BR),comp:new Set(CM),mode:"rank",open:new Set(),q:""};
const fmt=n=>n.toLocaleString("en-US");
const pct=(n,t)=>{const p=n/t*100;return n>0&&p<1?"<1%":Math.round(p)+"%";};
const sw=(k,s)=>`<span class="sw" style="background:${col(k)};${s?`width:${s}px;height:${s}px`:""}"></span>`;
function gv(g,b,c,t){const ks=t==="e"?g.e:g.o,s=CMP[c][t][b];if(!s)return 0;const a=t==="e"?EK:OK;return ks.reduce((x,k)=>x+s[a.indexOf(k)],0);}
function cd(g,b,t){const src=((X[b]||{})[t])||{},ks=t==="e"?g.e:g.o;let out=[];ks.forEach(k=>{if(src[k])out=out.concat(src[k]);});return out;}
const mt=c=>!st.q||(c[0]+" "+c[1]).toLowerCase().indexOf(st.q)>=0;
const cdf=(g,b,t)=>cd(g,b,t).filter(mt);
const selB=()=>BR.filter(b=>st.sel.has(b)),selC=()=>CM.filter(c=>st.comp.has(c));
const cbr=(bs,cs)=>bs.filter(b=>cs.some(c=>CMP[c].e[b]));
let TOTAL=0;BR.forEach(b=>["e","o"].forEach(t=>Object.keys((X[b]||{})[t]||{}).forEach(k=>TOTAL+=X[b][t][k].length)));
function items(){const bs=selB(),cs=selC();return G.map(g=>{
const perB=bs.map(b=>({k:b,v:cs.reduce((s,c)=>s+gv(g,b,c,"e")+gv(g,b,c,"o"),0)}));
const perC=cs.map(c=>({k:c,v:bs.reduce((s,b)=>s+gv(g,b,c,"e")+gv(g,b,c,"o"),0)}));
const en=bs.reduce((s,b)=>s+cs.reduce((t,c)=>t+gv(g,b,c,"e"),0),0);
const of=bs.reduce((s,b)=>s+cs.reduce((t,c)=>t+gv(g,b,c,"o"),0),0);
const nc=cbr(bs,cs).reduce((s,b)=>s+cdf(g,b,"e").length+cdf(g,b,"o").length,0);
return {g:g,perB:perB,perC:perC,en:en,of:of,n:en+of,nc:nc,has:nc>0};
}).filter(x=>!st.q||x.nc>0).sort((a,b)=>b.n-a.n);}
function styleBtns(sel,test){document.querySelectorAll(sel).forEach(b=>{const on=test(b.dataset.k);b.classList.toggle("on",on);b.setAttribute("aria-pressed",on);});}
function dots(sel,mode){document.querySelectorAll(sel+" .dt").forEach(d=>{const k=d.parentNode.dataset.k,show=st.mode===mode&&k!=="ALL";d.style.display=show?"inline-block":"none";d.style.background=show?col(k):"transparent";});}
function pick(set,all,k){if(k==="ALL")return new Set(all);if(set.size===all.length)return new Set([k]);const s=new Set(set);s.has(k)?s.delete(k):s.add(k);return s.size===0?new Set(all):s;}
function subl(g){const r=st.mode==="rank",L=(k,t)=>`<div>${r?sw(k,8):""}${t}</div>`;
if(g.e.length&&g.o.length){if(g.same)return `<div>${r?sw("e",8)+sw("o",8):""}Enlisted and officer</div>`;return L("e","Enlisted: "+g.le)+L("o","Officer: "+g.lo);}
return g.e.length?L("e","Enlisted only"):L("o","Officer only");}
function hl(s){const e=esc(s);if(!st.q)return e;const i=s.toLowerCase().indexOf(st.q);if(i<0)return e;return esc(s.slice(0,i))+"<mark>"+esc(s.slice(i,i+st.q.length))+"</mark>"+esc(s.slice(i+st.q.length));}
function panel(g,bs){
const list=bs.filter(b=>cdf(g,b,"e").length||cdf(g,b,"o").length);
return `<div class="panel">`+list.map(b=>{
const ne=cdf(g,b,"e").length,no=cdf(g,b,"o").length;
const showN=b==="AF"&&st.comp.has("act");
return `<div class="bb">`+(bs.length>1?`<div class="bh">${st.mode==="branch"?sw(b):""}${N[b]}<span class="cnt">${ne+no} codes</span></div>`:"")+(showN?`<div class="hnote">Headcounts are active duty as of Sept. 30, 2024, from Air &amp; Space Forces Magazine. A value with ≤ is the total for a specialty that has several codes, so each code holds that many or fewer.</div>`:"")+["e","o"].map(t=>{const a=cdf(g,b,t);return a.length?`<div class="th">${st.mode==="rank"?sw(t):""}${t==="e"?"Enlisted":"Officer"} · ${a.length} ${a.length===1?"code":"codes"}</div><div class="chips">${a.map(c=>`<div class="chip"><code>${hl(c[0])}</code><span>${hl(c[1])}</span>${showN&&c[2]!=null?`<em class="${c[3]?"":"ex"}" title="${c[3]?"Total for the whole specialty, which has more than one code":"Reported headcount for this specialty"}">${c[3]?"≤ ":""}${fmt(c[2])}</em>`:""}</div>`).join("")}</div>`:"";}).join("")+`</div>`;}).join("")+`</div>`;}
function render(){
const it=items(),bs=selB(),cs=selC(),grandAll=G.reduce((s,g)=>s+bs.reduce((a,b)=>a+cs.reduce((t,c)=>t+gv(g,b,c,"e")+gv(g,b,c,"o"),0),0),0);
const enlAll=G.reduce((s,g)=>s+bs.reduce((a,b)=>a+cs.reduce((t,c)=>t+gv(g,b,c,"e"),0),0),0),offAll=grandAll-enlAll;
const mx=it.length?Math.max.apply(null,it.map(x=>x.n)):1,shown=it.reduce((s,x)=>s+x.n,0);
styleBtns("#bb button",k=>k==="ALL"?st.sel.size===BR.length:(st.sel.has(k)&&st.sel.size<BR.length));
styleBtns("#cb button",k=>k==="ALL"?st.comp.size===CM.length:(st.comp.has(k)&&st.comp.size<CM.length));
styleBtns("#mb button",k=>k===st.mode);
dots("#bb","branch");dots("#cb","comp");
const bl=bs.length===BR.length?"All branches":bs.map(b=>N[b]).join(", "),cl=cs.length===CM.length?"all components":cs.map(c=>CN[c]).join(", ");
const byB=bs.map(b=>({k:b,n:N[b],v:G.reduce((s,g)=>s+cs.reduce((t,c)=>t+gv(g,b,c,"e")+gv(g,b,c,"o"),0),0)})),byC=cs.map(c=>({k:c,n:CN[c],v:G.reduce((s,g)=>s+bs.reduce((t,b)=>t+gv(g,b,c,"e")+gv(g,b,c,"o"),0),0)}));
const parts=st.mode==="rank"?[{k:"e",n:"Enlisted",v:enlAll},{k:"o",n:"Officer",v:offAll}]:st.mode==="branch"?byB:byC;
document.getElementById("hv").textContent=fmt(grandAll);
document.getElementById("hs").textContent=bl+" · "+cl;
document.getElementById("sb").innerHTML=parts.filter(p=>p.v>0).map(p=>`<div title="${esc(p.n)}: ${fmt(p.v)}" style="flex:${p.v} 1 0;background:${col(p.k)}"></div>`).join("");
document.getElementById("leg").innerHTML=parts.map(p=>`<span>${sw(p.k)}${esc(p.n)} <b>${fmt(p.v)}</b> <i>${grandAll?pct(p.v,grandAll):""}</i></span>`).join("");
document.getElementById("lede").textContent="Every enlisted and officer skill group in the US armed forces, ranked by people. Open a group to see its job codes for each branch: Army MOS, Navy ratings and designators, Marine Corps MOS, and Air Force AFSCs. "+fmt(TOTAL)+" codes are listed, with reported headcounts for Air Force specialties.";
const op=it.filter(x=>x.has),allOpen=op.length>0&&op.every(x=>st.open.has(x.g.id)||st.q),ea=document.getElementById("ea");
ea.style.display=op.length&&!st.q?"inline-flex":"none";
ea.innerHTML=ico(allOpen?"up2":"dn2")+(allOpen?"Collapse all":"Expand all");
let nt=`<div><b>Headcount</b> DoD occupational groups from the FY23 Population Representation report, Appendices B and C, as of Sept. 30, 2023. Active component plus the Selected Reserve (Guard and Reserve). Bars show whole groups.</div><div><b>Headcount by code</b> Only the Air Force publishes it, and only for active duty. Those counts come from the Air &amp; Space Forces Magazine almanac (Sept. 30, 2024) and are reported at the specialty level, such as 11F for fighter pilots. The Army, Navy, and Marine Corps do not publish headcount by MOS or rating, so their codes show none. Any number shown there would be a guess.</div><div><b>Codes</b> Lists come from Wikipedia's pages for Army careers, Navy ratings, Navy officer designators, Marine Corps MOS, and Air Force specialty codes. Each code is assigned to a DoD group by best fit, not by the official DoD 1312.1-I crosswalk, so some placements may differ from DoD's.</div><div><b>What is left out</b> Warrant officers, Marine Corps billet designators and deleted MOS, Air Force shred-outs (the letter after a code), and Space Force, which has no separate list in these sources. Air Force codes use X for the skill level, and Navy officer designators use X for the commission-status digit.</div>`;
if(st.comp.has("grd")||st.comp.has("res"))nt+=`<div><b>Guard and Reserve</b> The Guard covers only the Army and Air Force, the Reserve covers the four larger branches, and Space Force is active duty only.</div>`;
if(st.sel.has("SF")&&st.comp.has("act"))nt+=`<div><b>Space Force</b> Its 4,293 active enlisted in combat and tactical operations look like a coding artifact in the source tables.</div>`;
nt+=`<div><b>Paygrades</b> Counts come from Tables B-36 (enlisted), B-38 (officers), and B-34 (warrant officers) of the same report, active duty only, because the Guard and Reserve tables are by age and occupation, not paygrade. These tables are tabulated separately from the occupation table: they count 214,801 active officers where it counts 214,030, and the occupation table leaves out warrant officers.</div>`;
document.getElementById("notes").innerHTML=nt;
renderGr(bs,cs);
if(it.length===0){document.getElementById("rows").innerHTML=`<div class="empty">${st.q?"No codes match “"+esc(st.q)+"” for this branch and component selection.":"No headcount for this combination. Try adding a branch or component."}</div>`;return;}
document.getElementById("rows").innerHTML=it.map((x,i)=>{
const g=x.g,open=x.has&&(st.q||st.open.has(g.id)),w=x.n>0?Math.max(x.n/mx*100,0.8):0;
const nm=st.mode==="branch"?N:CN;
const sg=st.mode==="rank"?[{k:"e",v:x.en,n:"Enlisted"},{k:"o",v:x.of,n:"Officer"}]:(st.mode==="branch"?x.perB:x.perC).map(p=>({k:p.k,v:p.v,n:nm[p.k]}));
const segs=sg.filter(p=>p.v>0).map(p=>`<div title="${esc(p.n)}: ${fmt(p.v)}" style="flex:${p.v} 1 0;background:${col(p.k)}"></div>`).join("");
const both=g.e.length&&g.o.length;
const split=both?`<div class="sp">${st.mode==="rank"?sw("e",8):"Enl"} ${fmt(x.en)}<span style="width:4px"></span>${st.mode==="rank"?sw("o",8):"Off"} ${fmt(x.of)}</div>`:"";
const chev=x.has&&!st.q?ico(open?"down":"right"):"";
const cnt=x.has?`<span class="cnt">${fmt(x.nc)} ${st.q?(x.nc===1?"match":"matches"):"codes"}</span>`:"";
return `<div class="item"><div class="row" data-id="${g.id}" ${x.has&&!st.q?`role="button" tabindex="0" aria-expanded="${open}"`:""}><div class="rk">${String(i+1).padStart(2,"0")}</div><div class="ic${open?" on":""}">${ico(g.ic)}</div><div class="nm"><div class="t">${esc(g.name)}${chev}${cnt}</div><div class="s">${subl(g)}</div></div><div class="bar"><div style="width:${w}%">${segs}</div></div><div class="vl"><b>${fmt(x.n)}</b><span class="p">${grandAll?pct(x.n,grandAll):""}</span>${split}</div></div>${open?panel(g,cbr(bs,cs)):""}</div>`;}).join("");
}
function reset(){const f=items().find(x=>x.has);st.open=new Set(f?[f.g.id]:[]);}
document.getElementById("bb").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;st.sel=pick(st.sel,BR,b.dataset.k);reset();render();});
document.getElementById("cb").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;st.comp=pick(st.comp,CM,b.dataset.k);reset();render();});
document.getElementById("mb").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;st.mode=b.dataset.k;render();});
document.getElementById("ea").addEventListener("click",()=>{const op=items().filter(x=>x.has),all=op.length>0&&op.every(x=>st.open.has(x.g.id));st.open=all?new Set():new Set(op.map(x=>x.g.id));render();});
document.getElementById("q").addEventListener("input",e=>{st.q=e.target.value.trim().toLowerCase();render();});
function tog(e){const h=e.target.closest(".row");if(!h||h.getAttribute("role")!=="button")return;const k=h.dataset.id;st.open.has(k)?st.open.delete(k):st.open.add(k);render();if(e.type==="keydown"){const n=document.querySelector(`.row[data-id="${k}"]`);if(n)n.focus();}}
document.getElementById("rows").addEventListener("click",tog);
document.getElementById("rows").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();tog(e);}});
document.querySelectorAll("[data-src]").forEach(el=>{el.innerHTML=sl(el.dataset.src);});
document.getElementById("gsrc").innerHTML=`Counts: ${sl("b")} and ${sl("c")}. Codes and Air Force counts: <a href="#sources">see sources</a>`;
document.getElementById("srcgrid").innerHTML=CARDS.map(c=>`<article class="srccard"><h3>${esc(c.h)}</h3><ul>${c.it.map(i=>`<li>${sl(i.k,i.t)}<span>${esc(i.d)}</span>${i.l?`<div class="lk">${i.l.map(k=>sl(k)).join("")}</div>`:""}</li>`).join("")}</ul>${c.p?`<p>${esc(c.p)}</p>`:""}</article>`).join("");
(function(){const r=document.documentElement,btn=document.getElementById("tm"),sys=matchMedia("(prefers-color-scheme: dark)");
let m=null;try{m=localStorage.getItem("theme");}catch(e){}
if(m==="dark"||m==="light")r.dataset.theme=m;
const cur=()=>r.dataset.theme||(sys.matches?"dark":"light");
const lab=()=>{btn.textContent=cur()==="dark"?"Day mode":"Night mode";};
btn.addEventListener("click",()=>{const n=cur()==="dark"?"light":"dark";r.dataset.theme=n;try{localStorage.setItem("theme",n);}catch(e){}lab();});
lab();})();
reset();render();
