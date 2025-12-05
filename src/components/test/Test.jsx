
// import React from "react";
// import "./FirstSection.css";

// const FirstSection = () => {
//   return (
//     <div className="about-page">
//       {/* ===== Section: Hero / Intro ===== */}
//       <section className="section-testimonial-13 position-relative pt-120 pb-80 fix">
//         <div className="container position-relative z-1">
//           <div className="row pb-9">
//             <div className="col-lg-10 mx-lg-auto">
//               <div className="text-center mb-lg-0 mb-5">
//                 <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1 mt-3">
//                   <img src="/assets/imgs/features-1/dots.png" alt="dots" />
//                   <s pan className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
//                     About us
//                   </s>
//                 </div>
//                 <h3 className="ds-3 my-3 fw-regular">
//                   Driven by <span className="fw-bold">Passion</span> powered by
//                   <br />
//                   <span className="fw-bold">Innovation</span>
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <img
//             className="position-absolute z-2 top-0 end-0 pe-10 pe-lg-10 star"
//             src="/assets/imgs/cta-15/star-2.svg"
//             alt="star"
//           />
//           <img
//             className="position-absolute z-2 bottom-0 start-0 ps-10 ms-10 star"
//             src="/assets/imgs/cta-15/star-1.svg"
//             alt="star"
//           />
//         </div>

//         {/* Images Row */}
//         <div className="container-fluid">
//           <div className="d-flex align-items-center justify-content-center position-relative flex-wrap">
//             {["img-1.png","img-2.png","img-3.png","img-4.png","img-5.png"].map((img,i)=>(
//               <div key={i} className="pe-3 position-relative z-1 d-none d-md-block">
//                 <img
//                   className="rounded-3 border border-3 border-white about-hero-img"
//                   src={`/assets/imgs/cta-15/${img}`}
//                   alt="Codm"
//                 />
//               </div>
//             ))}
//             <img
//               className="position-absolute top-50 end-50 translate-middle-y z-0 bg-ellipse"
//               src="/assets/imgs/cta-15/bg-ellipse.png"
//               alt="ellipse"
//             />
//           </div>

//           {/* Socials */}
//           <div className="text-center mt-5">
//             <div className="socials bg-white px-3 shadow-1 py-2 border rounded-pill d-inline-flex align-items-center">
//               <p className="text-900 mb-0 me-2">Follow us:</p>
//               <ul className="list-unstyled d-flex mb-0">
//                 <li className="ms-3">
//                   <a
//                     href="https://www.linkedin.com/in/company/codm-software-limited"
//                     target="_blank"
//                     rel="noreferrer"
//                     title="Linkedin"
//                   >
//                     <i className="bi bi-linkedin"></i>
//                   </a>
//                 </li>
//                 <li className="ms-3">
//                   <a href="https://twitter.com/" target="_blank" rel="noreferrer" title="Twitter">
//                     <i className="bi bi-twitter"></i>
//                   </a>
//                 </li>
//                 <li className="ms-3">
//                   <a
//                     href="https://www.youtube.com/@CodMSoftwareLimited"
//                     target="_blank"
//                     rel="noreferrer"
//                     title="Youtube"
//                   >
//                     <i className="bi bi-youtube"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== Section: About ===== */}
//       <section className="section-about py-5 bg-light">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4 mb-md-0">
//               <img
//                 src="/assets/imgs/cta-15/Aboutus.jpg"
//                 alt="About CodM"
//                 className="img-fluid rounded shadow"
//               />
//             </div>
//             <div className="col-md-6">
//               <h2 className="mb-3 fw-bold text-primary">
//                 Your Trusted Technology Consulting Partner Since 2021
//               </h2>
//               <p className="text-muted mb-3">
//                 Founded in 2021, CodM is a global technology consulting and implementation company with offices in India and the UK. We deliver end-to-end digital solutions across Salesforce CRM and modern technologies.
//               </p>
//               <p className="text-muted mb-3">
//                 Our team of certified architects, developers, and consultants has delivered scalable, secure, and innovative solutions across industries.
//               </p>
//               <h5 className="fw-bold text-dark mt-4 mb-2">Our Core Service Offerings:</h5>
//               <ul className="list-unstyled text-muted">
//                 <li>
//                   <span className="fw-bold text-dark">Salesforce Consulting & Implementation</span>
//                   <p>Sales, Service, Experience Cloud, CPQ, Marketing, and Education Cloud</p>
//                 </li>
//                 <li>
//                   <span className="fw-bold text-dark">Custom Web & Mobile Development</span>
//                   <p>.NET, JavaScript, React, Node.js, and Python</p>
//                 </li>
//                 <li>
//                   <span className="fw-bold text-dark">AI and Machine Learning Solutions</span>
//                   <p>LLM-based applications, chatbots, and intelligent automation</p>
//                 </li>
//                 <li>
//                   <span className="fw-bold text-dark">API Integrations & Cloud Services</span>
//                   <p>REST/SOAP APIs, Azure, AWS, Salesforce, and third-party platforms</p>
//                 </li>
//                 <li>
//                   <span className="fw-bold text-dark">Data Analytics & Visualization</span>
//                   <p>Dashboarding, reporting, and predictive insights</p>
//                 </li>
//               </ul>
//               <p className="text-muted mt-3">
//                 CodM has proudly been a Salesforce Consulting Partner since 2021 and continues to uphold the highest standards.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== Section: Core Values (Features) ===== */}
//       <section className="section-feature-12 border-bottom pb-120 pt-110">
//         <div className="container">
//           <div className="text-center">
//             <h5 className="ds-5">Our Core Values</h5>
//             <p className="fs-5 pb-4">
//               We break down barriers so teams can focus on what matters - working together
//               <br className="d-none d-lg-block" />
//               to create products their customers love.
//             </p>
//           </div>

//           <div className="row">
//             {[
//               {
//                 icon: "icon-6.svg",
//                 title: "S.O.L.I.D Principle",
//                 desc: "SOLID Design Principle is a collection of best-practice, object-oriented design principles..."
//               },
//               {
//                 icon: "icon-5.svg",
//                 title: "Open Source Apex Framework",
//                 desc: "Contains 4 key elements: Selector, Domains, Services, Unit of work."
//               },
//               {
//                 icon: "icon-4.svg",
//                 title: "DRY Principle",
//                 desc: "Avoiding redundancy in code for efficiency and maintainability."
//               },
//               {
//                 icon: "icon-3.svg",
//                 title: "Development Strategies",
//                 desc: "Agile, Waterfall, and ADHOC approaches to software development."
//               }
//             ].map((f, i) => (
//               <div className="col-lg-6" key={i}>
//                 <div className="feature-item mb-5 bg-neutral-100 p-4 rounded-4 hover-up h-100">
//                   <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
//                     <img
//                       className="filter-invert"
//                       src={`/assets/imgs/service-1/${f.icon}`}
//                       alt="icon"
//                     />
//                   </div>
//                   <h4>{f.title}</h4>
//                   <p>{f.desc}</p>
//                   <a href="#" className="text-primary fs-7 fw-bold">
//                     Learn More →
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FirstSection;























// import { useEffect, useState } from "react";
// import "./Test.css";

// import img1 from "../../assets/imgs/Certifications/CPQ.png";
// import img2 from "../../assets/imgs/Certifications/Admin.png";
// import img3 from "../../assets/imgs/Certifications/B2C-Solution-Architect.png";

// const slides = [
//   { img: img1, text: "Websites" },
//   { img: img2, text: "Plugins" },
//   { img: img3, text: "Web Apps" },
// ];

// export default function Test() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 2000); // change slide every 2s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="containertext">
//       <div
//         className="v-slides"
//         style={{ transform: `translateY(-${index * 80}px)` }}
//       >
//         {slides.map((slide, i) => (
//           <div className="v-slide" key={i}>  
//             <img src={slide.img} alt={slide.text} className="slide-img"/>
//             <span className="text">{slide.text}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
