const vm=require("vm"),fs=require("fs");
const els={};
const mk=()=>({innerHTML:"",textContent:"",style:{},dataset:{},classList:{toggle(){}},setAttribute(){},addEventListener(){},getAttribute(){return null},closest(){return null},parentNode:{dataset:{}}});
const ctx={document:{getElementById:id=>els[id]||(els[id]=mk()),querySelectorAll:()=>[],querySelector:()=>null,documentElement:{dataset:{}}},console,matchMedia:()=>({matches:false}),Math,Set,Object,JSON,Number,String,Array,RegExp};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(require("path").join(__dirname,"check.js"),"utf8"),ctx);
const run=c=>vm.runInContext(c,ctx);
const bad=h=>/undefined|NaN|\[object/.test(h);
function snap(l){const all=Object.values(els).map(e=>e.innerHTML+e.textContent).join("");console.log(l.padEnd(22),"rows",(els.rows.innerHTML.match(/class="item"/g)||[]).length,"pyr",(els.gr.innerHTML.match(/class="pr"/g)||[]).length,"chips",(els.rows.innerHTML.match(/class="chip"/g)||[]).length,bad(all)?"BAD":"ok");}
snap("default");
console.log("hero total:",els.hv.textContent,"| rank numbers:",/class="rk">01</.test(els.rows.innerHTML),/class="rk">11</.test(els.rows.innerHTML));
console.log("tag class:",/pl t-o/.test(els.gr.innerHTML),/pl t-e/.test(els.gr.innerHTML),/pl t-w/.test(els.gr.innerHTML));
console.log("grade sources linked:",(els.gr.innerHTML.match(/docs\.opa\.mil/g)||[]).length,"| srcgrid cards:",(els.srcgrid.innerHTML.match(/class="srccard"/g)||[]).length,"links:",(els.srcgrid.innerHTML.match(/<a href/g)||[]).length);
console.log("gsrc:",els.gsrc.innerHTML.slice(0,120));
for(const m of["branch","comp","rank"]){run(`st.mode="${m}";render()`);snap("mode "+m);}
run('st.sel=new Set(["AF"]);st.open=new Set(G.map(g=>g.id));render()');snap("AF all open");
console.log("AF counts:",(els.rows.innerHTML.match(/<em/g)||[]).length);
run('st.sel=new Set(BR);st.comp=new Set(["grd"]);reset();render()');snap("Guard only");
run('st.comp=new Set(CM);st.q="welder";render()');snap("q welder");
run('st.q="zzz";render()');snap("q none");
