const DEFAULT_DATA = {
  name: "Ahsan Uddoula Saif",
  role: "Student · Learner · Multi-skilled Creative",
  intro: "Curious by nature, versatile by practice — always learning, building and exploring new possibilities.",
  aboutTitle: "Curiosity is my advantage.",
  about: "I’m Ahsan Uddoula Saif, a student from Monirampur, Jashore. I enjoy learning different things, experimenting with ideas and developing practical skills. I believe every new skill is another way to understand the world and create something useful.",
  contactText: "For collaboration, conversation or simply saying hello, feel free to reach out.",
  email: "",
  phone: "",
  facts: [
    {num:"2019", label:"PSC passed"},
    {num:"2025", label:"SSC passed"},
    {num:"2027", label:"HSC candidate"}
  ],
  education: [
    {year:"2019", title:"PSC — Passed", school:"Primary School Certificate examination"},
    {year:"2019–2025", title:"Monirampur Government High School", school:"Secondary education · SSC passed in 2025"},
    {year:"2025–2027", title:"Monirampur Government Degree College", school:"Higher Secondary education · HSC candidate for 2027"}
  ],
  skills: [
    {name:"Web & Digital", level:75, text:"Web basics, digital tools and online workflows"},
    {name:"Creative Work", level:78, text:"Visual ideas, content and creative experimentation"},
    {name:"Technology", level:72, text:"Comfortable exploring software, AI and new technology"},
    {name:"Communication", level:76, text:"Learning, explaining and working with people"},
    {name:"Problem Solving", level:82, text:"Practical thinking and finding workable solutions"},
    {name:"Adaptability", level:88, text:"Quick to learn new tools, tasks and skills"}
  ],
  interests: ["Technology & AI","Web & Digital Creativity","Content Creation","Photography","Learning New Skills","Creative Experimentation"],
  instagram:"https://www.instagram.com/saifdaula47",
  facebook:"https://www.facebook.com/share/14ta7aoPENK/"
};

function getData(){
  try { return {...DEFAULT_DATA, ...(JSON.parse(localStorage.getItem("saifPortfolio")||"{}"))}; }
  catch(e){ return DEFAULT_DATA; }
}
function render(){
  const d=getData();
  document.title = d.name + " — Portfolio";
  document.getElementById("heroRole").textContent=d.role;
  document.getElementById("heroIntro").textContent=d.intro;
  document.getElementById("aboutTitle").innerHTML=(d.aboutTitle||"Curiosity is my advantage.").replace(/(advantage|future|learning|creative|next)/gi,'<span>$1</span>');
  document.getElementById("aboutText").textContent=d.about;
  document.getElementById("contactText").textContent=d.contactText;
  document.getElementById("facts").innerHTML=(d.facts||[]).map(x=>`<div class="fact"><div class="num">${x.num}</div><small>${x.label}</small></div>`).join("");
  document.getElementById("educationList").innerHTML=(d.education||[]).map(x=>`<article class="timeline-item"><div class="timeline-year">${x.year}</div><div><h3>${x.title}</h3><p>${x.school}</p></div></article>`).join("");
  document.getElementById("skillsList").innerHTML=(d.skills||[]).map(x=>`<article class="skill"><div class="skill-top"><h3>${x.name}</h3><span class="level">${x.level}%</span></div><p style="color:#7f8c84;font-size:12px;margin-top:6px">${x.text||""}</p><div class="bar"><i style="width:${Math.min(100,Math.max(0,x.level))}%"></i></div></article>`).join("");
  document.getElementById("interestList").innerHTML=(d.interests||[]).map((x,i)=>`<article class="interest"><span class="n">0${i+1}</span><h3>${x}</h3></article>`).join("");
  document.getElementById("heroSocials").innerHTML=[
    d.instagram?`<a href="${d.instagram}" target="_blank" rel="noopener">Instagram ↗</a>`:"",
    d.facebook?`<a href="${d.facebook}" target="_blank" rel="noopener">Facebook ↗</a>`:""
  ].join("");
  document.getElementById("contactLinks").innerHTML=[
    d.email?`<a href="mailto:${d.email}">${d.email}</a>`:"",
    d.phone?`<a href="tel:${d.phone}">${d.phone}</a>`:"",
    d.instagram?`<a href="${d.instagram}" target="_blank" rel="noopener">Instagram ↗</a>`:"",
    d.facebook?`<a href="${d.facebook}" target="_blank" rel="noopener">Facebook ↗</a>`:""
  ].join("");
  document.getElementById("year").textContent=new Date().getFullYear();
  const img=localStorage.getItem("saifProfileImage");
  if(img) document.getElementById("profileImage").src=img;
}
render();
