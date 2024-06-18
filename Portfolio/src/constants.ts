import Tsf from "./assets/tsf.png";
import Sira from "./assets/OBJECTS.svg";
import Uhb from "./assets/uhblogo.png";
import Mhb from "./assets/mhb.png";
import Landing from "./assets/landing.jpg";
import Cl1 from "./assets/clos1.jpg";
import Sparks from "./assets/sparkbank.jpg";
import Market from "./assets/market.jpg";
import Cl2 from "./assets/clos2.jpg";
import S417 from "./assets/417.jpg";


const Experience =[
{
    company: "Sira Digitals",
    start: "Jul 2023",
    end: "June 2024",
    title: "Frontend Developer",
    duration: "11 months",
    logo: Sira,
    points: [
   "Responsible for Desiging (sira.com.sa), (marketplace.sira.com.sa)",
   "Responsibel for implementing the frontend using ReactJS and Tailwind",
    "Utilized Git and Docker for integration management", 
    "Collaborated with team members in the backed,deployment and business", 
    ]}
,
{
    company: "Municipality of Hafr Albatin",
    start: "Jun 2023",
    end: "Aug 2023",
    title: "Operating Department Intern",
    duration: "3 months",
    logo: Mhb,
    points: [
    "Provided IT support to department workers",
    "Assisten users with the municipality's system usage",
    "Troubleshooting and maintenance of department devices", 
    ]}
, {
    company: "The Sparks Foundation",
    start: "Mar 2023",
    end: "May 2023",
    title: "Web Design and Development Intern",
    duration: "3 months",
    logo: Tsf,
    points: [
    "Development of a comprehensive banking system",
    "Incorporated user-friendly interfaces and secure functionalities",
    ]}
,  
{
company: "University of Hafr Albatin",
start: "Aug 2023",
end: "Jun 2024",
title: "CCSE Part-timer",
duration: "11 months",
logo: Uhb,
points: [
"Laboratories maintenance and devices troubleshooting",
"Managing Activities/Workshops schedule, content and budget",
"Deploying and presenting programming workshops and competitions",
]} 
]

const projects=[
{
    title: "Sira Landing Page",
    tools: ["ReactJS","TailWindCSS", "Vite"],
    desc: "",
    pic: Landing,
    role: "Designer + Frontend Developer",
    link: "https://Sira.com.sa",
}
,
{
    title: "Sira Marketplace",
    tools: ["ReactJS","TailWindCSS", "Vite"],
    desc: "",
    pic: Market,
    role: "Designer + Frontend Developer",
    link: "https://marketplace.sira.com.sa",   
}
,{
    title: "Sparks Bank",
    tools: ["HTML", "PHP", "JS", "CSS", "MYSQL"],
    desc: "",
    pic: Sparks,
    role: "Full-stack Developer",
    link: "https://github.com/emanbell12/SparksBank.git",   
},
{
    title: "Course Learning Outcomes",
    tools: ["ReactJS", "Django", "SQLITE"],
    desc: "",
    pic: Cl1,
    role: "Full-stack Developer",
    link: "https://github.com/emanbell12/4th-programming-competition.git",   
}
,{
    title: "UHB Facilities Reservation System",
    tools: ["HTML", "PHP", "JS", "CSS", "MYSQL"],
    desc: "",
    pic: S417,
    role: "Full-stack Developer",
    link: "https://github.com/emanbell12/GRAD-PROJ.git",   
}
,
{
    title: "PlayJS",
    tools: ["React Native", "NativeWind", "EXPO"],
    desc: "",
    pic: "",
    role: "Full-stack Developer",
    link: "",   
}
,
]
export {Experience, projects}