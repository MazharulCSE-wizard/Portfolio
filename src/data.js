// ============ EDIT YOUR CONTENT HERE ============
export const PROFILE={
 name:"Mazharul Islam",
 roles:["AI/ML Engineer","Systems Engineer","Software Engineer","NLP Enthusiast","Computer Vision Builder", "AI/ML Researcher"],
 bio:"I am currently at my final semester in BRAC University. Till now, my grade is CGPA 3.54 . I can build end-to-end ML and NLP pipelines. I can work on software engineering projects as well and in this section, I am more comfortable in Backend Development. I am currently completing thesis on Us road sign detection using embedded systems(Computer Vision + Robotics). ",
 email:"nishafee.rahman102@gmail.com",
 github:"https://github.com/MazharulCSE-wizard",
 linkedin:"https://www.linkedin.com/in/mazharulwizard",
 rankOverride:null   // e.g. "C" to force a rank, or null for automatic
};
// skills: [name, level 1-5]
export const SKILLS={
 "AI & ML":[["Machine Learning",5],["NLP",4],["Computer Vision",4]],
 "Programming":[["Python",5],["C",4],["JavaScript",4],["HTML",5],["CSS",3]],
 "Tools":[["scikit-learn",4],["pandas",5],["Numpy",5],["PyTorch",3],["Keras",4],["NLTK",3],["Git / GitHub",3],["Linux",3]],
 "Web & Data":[["Node.js / Express",5],["React",3],["MySQL",4],["MongoDB",5]]
};
// add: {title,desc,tags:[],date,link}
export const PROJECTS=[
 {title:"News Topic from Headlines",date:"Sep 2026 - Oct 2026",desc:"Compared Logistic Regression, feed-forward nets and RNN/LSTM/GRU (plus bidirectional) across raw, stemmed and lemmatized text versions.",tags:["Python","NLP","Deep Learning"],link:PROFILE.github},
 {title:"Telecom Customer Churn Prediction",date:"Nov 2025 - Dec 2025",desc:"Trained Logistic Regression, Decision Tree and an MLP on the Telco dataset, with K-means to study churn distribution. Team project.",tags:["scikit-learn","pandas","Matplotlib"],link:PROFILE.github},
 {title:"Oseek-Your dream job finder",date:"OCT 2025 - Dec 2025",desc:"Contributors of this project : Mazharul Islam, Muhtasim Rahman, Shaswato Das Aunon In this website, there are admin, companies and general users. General users can provide their information like a CV. can download their information in CV format and can apply for jobs that companies had posted. In companies end, company can post jobs and can have their own profile as well. Companies can review the candidates information directly from profile and can also download their information directly like CV format if they want a printed document and also company can directly call a candidate to interview, can mail then and can tag  them hired if companies press hire button. A gemini api is used here and AI can review users' information and can suggest jobs in ranks keeping the most maching requirements at first. If you want to full project and want to understand its feature , see the following youtube video: https://www.youtube.com/watch?v=ckdm3_-T64Y&t=5s. \n\nversel link : \n https://oseek.vercel.app/ ",tags:["React.Js","Node.Js","Express.Js","CSS","MongoDB"],link:PROFILE.github},
 {title:"File-System Metadata Journaling",date:"May 2026 - Jun 2026",desc:"C utility that checks file-system consistency on corrupted disk images, verifies metadata and recovers broken entries.",tags:["C","File Systems","OS"],link:PROFILE.github},
 {title:"Custom Shell for Ubuntu",date:"Apr 2025",desc:"Shell supporting chained commands (&&, ;), pipes, redirection, history and Ctrl+C handling. Team project.",tags:["C","Linux","OS"],link:PROFILE.github},
 {title:"My Portfolio website",date:"Oct 2026",desc:"This project is created with React+Vite. I have also added a background music and all you have to do to press the play button. Here Level is calculated using xp calculation where xp=skillPts*4 + PROJECTS.length*100 + RESEARCH.length*150 + CERTS.length*60 + EXPERIENCE.length*120. level = 1+ math.floor(xp/40) and after that rank is calculated from level where E = level 1, D= level 10, C =level 20, B = level 35 , A = level 50, S= level 70 and Beyond S = level 100",tags:["Python","Javascript","React","CSS"],link:PROFILE.github}
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
const XP_PER = 40;
let skillPts = 0;
Object.values(SKILLS).flat().forEach((s) => (skillPts += s[1]));
const xp = skillPts*10 + PROJECTS.length*100 + RESEARCH.length*150 + CERTS.length*50 + EXPERIENCE.length*120;
const level = 1 + Math.floor(xp / XP_PER);
const pct = Math.round(((xp % XP_PER) / XP_PER) * 100);
let ri = 0;
RANKS.forEach((r, i) => { if (level >= r[1]) ri = i; });
if (PROFILE.rankOverride) { const k = RANKS.findIndex((r) => r[0] === PROFILE.rankOverride); if (k >= 0) ri = k; }
export const stats = { xp, level, pct, ri, rank: RANKS[ri][0], nextR: RANKS[ri + 1] };
