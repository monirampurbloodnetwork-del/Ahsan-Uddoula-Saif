const DEFAULT_DATA = {
  name:"Ahsan Uddoula Saif", role:"Student · Learner · Multi-skilled Creative",
  intro:"Curious by nature, versatile by practice — always learning, building and exploring new possibilities.",
  aboutTitle:"Curiosity is my advantage.",
  about:"I’m Ahsan Uddoula Saif, a student from Monirampur, Jashore. I enjoy learning different things, experimenting with ideas and developing practical skills. I believe every new skill is another way to understand the world and create something useful.",
  contactText:"For collaboration, conversation or simply saying hello, feel free to reach out.",email:"",phone:"",
  instagram:"https://www.instagram.com/saifdaula47",facebook:"https://www.facebook.com/share/14ta7aoPENK/",
  facts:[{num:"2019",label:"PSC passed"},{num:"2025",label:"SSC passed"},{num:"2027",label:"HSC candidate"}],
  education:[
    {year:"2019",title:"PSC — Passed",school:"Primary School Certificate examination"},
    {year:"2019–2025",title:"Monirampur Government High School",school:"Secondary education · SSC passed in 2025"},
    {year:"2025–2027",title:"Monirampur Government Degree College",school:"Higher Secondary education · HSC candidate for 2027"}],
  skills:[
    {name:"Web & Digital",level:75,text:"Web basics, digital tools and online workflows"},
    {name:"Creative Work",level:78,text:"Visual ideas, content and creative experimentation"},
    {name:"Technology",level:72,text:"Comfortable exploring software, AI and new technology"},
    {name:"Communication",level:76,text:"Learning, explaining and working with people"},
    {name:"Problem Solving",level:82,text:"Practical thinking and finding workable solutions"},
    {name:"Adaptability",level:88,text:"Quick to learn new tools, tasks and skills"}],
  interests:["Technology & AI","Web & Digital Creativity","Content Creation","Photography","Learning New Skills","Creative Experimentation"]
};
let data=loadData();
function loadData(){try{return {...DEFAULT_DATA,...JSON.parse(localStorage.getItem("saifPortfolio")||"{}")}}catch(e){return DEFAULT_DATA}}
function $(id){return document.getElementById(id)}
function esc(v){return String(v??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll('"',"&quot;")}
function fill(){
  ["name","role","intro","aboutTitle","about","contactText","email","phone","instagram","facebook"].forEach(k=>$(k).value=data[k]||"");
  renderFacts();renderEducation();renderSkills();renderInterests();
  const img=localStorage.getItem("saifProfileImage"); if(img) $("preview").src=img;
}
function renderFacts(){$("factsEditor").innerHTML=(data.facts||[]).map((x,i)=>`<div class="editor-row"><input data-type="fact" data-i="${i}" data-k="num" value="${esc(x.num)}"><input data-type="fact" data-i="${i}" data-k="label" value="${esc(x.label)}"><button class="remove" data-remove="fact" data-i="${i}">×</button></div>`).join("")}
function renderEducation(){$("educationEditor").innerHTML=(data.education||[]).map((x,i)=>`<div class="editor-row"><input data-type="education" data-i="${i}" data-k="year" value="${esc(x.year)}"><input data-type="education" data-i="${i}" data-k="title" value="${esc(x.title)}"><input data-type="education" data-i="${i}" data-k="school" value="${esc(x.school)}"><button class="remove" data-remove="education" data-i="${i}">×</button></div>`).join("")}
function renderSkills(){$("skillsEditor").innerHTML=(data.skills||[]).map((x,i)=>`<div class="editor-row"><input data-type="skill" data-i="${i}" data-k="name" value="${esc(x.name)}"><input type="number" min="0" max="100" data-type="skill" data-i="${i}" data-k="level" value="${esc(x.level)}"><input data-type="skill" data-i="${i}" data-k="text" value="${esc(x.text)}"><button class="remove" data-remove="skill" data-i="${i}">×</button></div>`).join("")}
function renderInterests(){$("interestEditor").innerHTML=(data.interests||[]).map((x,i)=>`<div class="editor-row"><input data-type="interest" data-i="${i}" data-k="value" value="${esc(x)}"><button class="remove" data-remove="interest" data-i="${i}">×</button></div>`).join("")}
function syncRows(){
  document.querySelectorAll("[data-type]").forEach(el=>{
    const i=+el.dataset.i,k=el.dataset.k,t=el.dataset.type;
    if(t==="interest") data.interests[i]=el.value;
    else data[t==="fact"?"facts":t==="education"?"education":"skills"][i][k]=el.value;
  });
}
document.addEventListener("input",e=>{if(e.target.matches("[data-type]")) syncRows()});
document.addEventListener("click",e=>{
  const r=e.target.dataset.remove;if(r){
    const i=+e.target.dataset.i; const key=r==="fact"?"facts":r==="education"?"education":r==="skill"?"skills":"interests";
    data[key].splice(i,1); ({fact:renderFacts,education:renderEducation,skill:renderSkills,interest:renderInterests})[r](); return;
  }
  const a=e.target.dataset.add;if(a){
    if(a==="fact"){data.facts.push({num:"2026",label:"New fact"});renderFacts()}
    if(a==="education"){data.education.push({year:"",title:"New education",school:""});renderEducation()}
    if(a==="skill"){data.skills.push({name:"New skill",level:70,text:"Describe this skill"});renderSkills()}
    if(a==="interest"){data.interests.push("New interest");renderInterests()}
  }
});
$("photo").addEventListener("change",e=>{
  const f=e.target.files[0]; if(!f)return;
  const reader=new FileReader(); reader.onload=()=>{localStorage.setItem("saifProfileImage",reader.result);$("preview").src=reader.result}; reader.readAsDataURL(f);
});
$("save").onclick=()=>{
  syncRows();["name","role","intro","aboutTitle","about","contactText","email","phone","instagram","facebook"].forEach(k=>data[k]=$(k).value.trim());
  data.skills.forEach(x=>x.level=Number(x.level)||0);
  localStorage.setItem("saifPortfolio",JSON.stringify(data));
  const p=$("newPin").value.trim(); if(p)localStorage.setItem("saifAdminPin",p);
  $("newPin").value="";$("status").textContent="Saved locally ✓";setTimeout(()=>$("status").textContent="",2200);
};
$("reset").onclick=()=>{if(confirm("Reset all portfolio text to the original defaults? Your custom photo will remain unless you remove it manually.")){localStorage.removeItem("saifPortfolio");data=loadData();fill();$("status").textContent="Reset ✓"}};
$("loginBtn").onclick=login;
$("pin").addEventListener("keydown",e=>{if(e.key==="Enter")login()});
function login(){const expected=localStorage.getItem("saifAdminPin")||"2468";if($("pin").value===expected){sessionStorage.setItem("saifAdminUnlocked","1");$("login").classList.add("hidden");$("panel").classList.remove("hidden");fill()}else alert("Incorrect admin PIN.") }
$("logout").onclick=()=>{sessionStorage.removeItem("saifAdminUnlocked");location.reload()};
if(sessionStorage.getItem("saifAdminUnlocked")==="1"){$("login").classList.add("hidden");$("panel").classList.remove("hidden");fill()}
