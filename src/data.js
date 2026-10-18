// ============ EDIT YOUR CONTENT HERE ============
export const PROFILE={
 name:"Mazharul Islam",
 roles:["AI/ML Engineer","NLP Enthusiast","Computer Vision Builder","Systems Programmer (C)"],
 bio:"Final-semester CSE student at BRAC University (CGPA 3.54). I build end-to-end ML and NLP pipelines, and I am finishing a thesis on US road sign detection on an embedded system.",
 email:"nishafee.islam102@gmail.com",
 github:"https://github.com/MazharulCSE-wizard",
 linkedin:"https://www.linkedin.com/in/mazharulwizard",
 rankOverride:null   // e.g. "C" to force a rank, or null for automatic
};
// skills: [name, level 1-5]
export const SKILLS={
 "AI & ML":[["Machine Learning",3],["NLP",3],["Computer Vision",3],["CNN",3],["RNN / LSTM / GRU",3],["K-means",3]],
 "Programming":[["Python",4],["C",4],["JavaScript",3],["HTML / CSS",3]],
 "Tools":[["scikit-learn",3],["pandas / NumPy",4],["PyTorch",2],["Keras",2],["Git / GitHub",3],["Linux",3]],
 "Web & Data":[["Node.js / Express",3],["MySQL",3],["MongoDB",3]]
};
// add: {title,desc,tags:[],date,link}
export const PROJECTS=[
 {title:"News Topic from Headlines",date:"Sep 2026 - Oct 2026",desc:"Compared Logistic Regression, feed-forward nets and RNN/LSTM/GRU (plus bidirectional) across raw, stemmed and lemmatized text versions.",tags:["Python","NLP","Deep Learning"],link:PROFILE.github},
 {title:"Telecom Customer Churn Prediction",date:"Nov 2025 - Dec 2025",desc:"Trained Logistic Regression, Decision Tree and an MLP on the Telco dataset, with K-means to study churn distribution. Team project.",tags:["scikit-learn","pandas","Matplotlib"],link:PROFILE.github},
 {title:"File-System Metadata Journaling",date:"May 2026 - Jun 2026",desc:"C utility that checks file-system consistency on corrupted disk images, verifies metadata and recovers broken entries.",tags:["C","File Systems","OS"],link:PROFILE.github},
 {title:"Custom Shell for Ubuntu",date:"Apr 2025",desc:"Shell supporting chained commands (&&, ;), pipes, redirection, history and Ctrl+C handling. Team project.",tags:["C","Linux","OS"],link:PROFILE.github}
];
export const RESEARCH=[
 {title:"US Road Sign Detection on an Embedded System",date:"Undergraduate thesis · Ongoing",desc:"Researching and building a computer-vision system that detects US road signs and runs on an embedded platform.",tags:["Computer Vision","Embedded"]}
];
export const CERTS=[
 {title:"GCI2026 - Matsuo AI Lab",date:"In progress · expected Jan 2027",desc:"3-month ML, AI and data science program with a business-production focus.",tags:["ML","AI","Data Science"]}
];
export const EXPERIENCE=[]; // add {title, date, desc, tags:[]} when you gain experience
// ================================================

export const RANKS = [["E",1],["D",10],["C",20],["B",35],["A",50],["S",70],["BEYOND S",100]];
const XP_PER = 55;
let skillPts = 0;
Object.values(SKILLS).flat().forEach((s) => (skillPts += s[1]));
const xp = skillPts*4 + PROJECTS.length*100 + RESEARCH.length*150 + CERTS.length*60 + EXPERIENCE.length*120;
const level = 1 + Math.floor(xp / XP_PER);
const pct = Math.round(((xp % XP_PER) / XP_PER) * 100);
let ri = 0;
RANKS.forEach((r, i) => { if (level >= r[1]) ri = i; });
if (PROFILE.rankOverride) { const k = RANKS.findIndex((r) => r[0] === PROFILE.rankOverride); if (k >= 0) ri = k; }
export const stats = { xp, level, pct, ri, rank: RANKS[ri][0], nextR: RANKS[ri + 1] };
