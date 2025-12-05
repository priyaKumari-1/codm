
import robotImg from "../../assets/imgs/hero-1/img-agent-1.webp";
import { heroSection } from "../../data";
import ContactUsBtn from "../../utils/ContactUsBtn/ContactUsBtn";
import './Hero.css';
import bgImg from '../../assets/imgs/hero-1/background.png';

function Hero() {
  return (
    <section className="hero-Section hero">
      <div className="container heroContainer">
        <div className="row align-items-center">
            
          {/* Left Content */}
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <span className="agentBtn d-inline-flex align-items-center border border-2 border-white rounded-pill px-3 mt-5 py-1">
              AgentForce
            </span>

            {/* <h1 className="text-3xl text-md-5xl fw-bold mt-4 leading-tight" data-aos="fade-up" data-aos-delay="100"> */}
            <h1 className="text-3xl text-md-5xl fw-bold mt-4 leading-tight">
              {heroSection.HEADING}
            </h1>

            {/* <p className="text-gray-600 mt-4" data-aos="fade-up" data-aos-delay="100"> */}
             <p className="text-gray-600 mt-4">
              We deliver enterprise-scale solutions with futuristic thinking
              helping businesses modernize, streamline, and scale with confidence
              using cutting-edge cloud and CRM technologies. Our development
              approach is grounded in SOLID principles, ensuring clean,
              maintainable, and scalable architecture from day one.
            </p>

            <div className="py-4 d-flex gap-3 flex-wrap">
              <button className="explorebtn btn-gradient">
                Explore Now
                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none">
                  <path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" 
                    strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" 
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <ContactUsBtn />
            </div>
          </div>

          {/* Right Image */}
          <div className="col-12 col-md-6">
            <div className="robot_Container d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "360px",
              }}>
              <img
                src={robotImg}
                alt="Robot"
                className="hero-img img-fluid"
                style={{ maxWidth: "400px"}}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

// import robotImg from "../../assets/imgs/hero-1/img-agent-1.webp";
// import { heroSection } from "../../data";
// import ContactUsBtn from "../../utils/ContactUsBtn/ContactUsBtn";
// import CustomButton from "../../utils/CustomButton/CustomButton";
// import './Hero.css';
// import bgImg from '../../assets/imgs/hero-1/background.png';
// // import robatImg from "../../assets/imgs/template/image18.png";

// function Hero() {
//   return (
//     <section className="hero-Section hero">
//       <div className="heroContainer container mx-auto grid md:grid-cols-2 items-center gap-10 px-6">
//         {/* Left Content */}
//         <div>
//           <span className="agentBtn d-flex align-items-center border border-2 border-white d-inline-flex rounded-pill px-3 mt-5 py-1">
//             AgentForce
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
//             {heroSection.HEADING}
//             {/* Delivering enterprise-scale <br />
//             solutions with futuristic <br />
//             thinking. */}
//           </h1> 
//           <p className="text-gray-600 mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
//             We deliver enterprise-scale solutions with futuristic thinking—
//             helping businesses modernize, streamline, and scale with confidence
//             using cutting-edge cloud and CRM technologies. Our development
//             approach is grounded in SOLID principles, ensuring clean,
//             maintainable, and scalable architecture from day one.
//           </p>

//           {/* btn for explore now and contact us  */}

//           <div className="py-5 d-flex gap-3">
//             <button className="explorebtn btn-gradient" data-aos="fade-zoom-in" data-aos-delay="300">
//               Explore Now
//               <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="stroke-white" d="M17 7L6.75 17.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
//             </button>
//             <ContactUsBtn />
//           </div>

//         </div>

//         {/* Right Image */}
//         <div className="robot_Container flex justify-center" style={{
//           backgroundImage: `url(${bgImg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           height: "500px",

//         }}>
//           <img width={"500px"}
//             src={robotImg}
//             alt="Robot"
//             className="hero-img max-w-full h-auto"
//           />
//         </div>


//       </div>

//     </section>
//   );
// }

// export default Hero;