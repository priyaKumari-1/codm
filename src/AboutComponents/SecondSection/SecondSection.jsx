import { Link } from "react-router-dom";
import aboutImg from "../../assets/imgs/cta-15/Aboutus.jpg"; 
import './SecondSection.css';

const SecondSection = () => {
  return (
    <section className="section-about py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Column */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={aboutImg}
              alt="About CodM"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Content Column */}
          <div className="SecondSection_RightContainer col-md-6">
            <h2 className="text-center text-md-start fs-1">
              Your Trusted Technology Consulting Partner Since 2021
            </h2>

            <p className="text-muted mb-3 text-center text-md-start">
              Founded in 2021, CodM is a global technology consulting and
              implementation company with offices in India and the UK. We
              deliver end-to-end digital solutions across Salesforce CRM and a
              broad spectrum of modern technologies including .NET, Python,
              AI/ML, and Large Language Models (LLMs).
            </p>

            <p className="text-muted mb-3 text-centertext-md-start">
              Our team of certified architects, developers, and consultants has
              delivered scalable, secure, and innovative solutions across
              industries such as healthcare, finance, insurance, education, and
              retail.
            </p>

            <h5 className=" fw-bold text-dark mt-4 mb-2 text-center text-md-start">
              Our Core Service Offerings:
            </h5>

            <ul className="list-unstyled text-muted text-center text-md-start">
              <li>
                <span className="fw-bold text-dark">
                  Salesforce Consulting &amp; Implementation
                </span>
                <p>Sales, Service, Experience Cloud, CPQ, Marketing, and Education Cloud</p>
              </li>

              <li>
                <span className="fw-bold text-dark">
                  Custom Web &amp; Mobile Development
                </span>
                <p>.NET, JavaScript, React, Node.js, and Python</p>
              </li>

              <li>
                <span className="fw-bold text-dark">
                  AI and Machine Learning Solutions
                </span>
                <p>LLM-based applications, chatbots, and intelligent automation</p>
              </li>

              <li>
                <span className="fw-bold text-dark">
                  API Integrations &amp; Cloud Services
                </span>
                <p>REST/SOAP APIs, Azure, AWS, Salesforce, and third-party platforms</p>
              </li>

              <li>
                <span className="fw-bold text-dark">
                  Data Analytics &amp; Visualization
                </span>
                <p>Dashboarding, reporting, and predictive insights</p>
              </li>
            </ul>

            <p className="text-muted mt-3 text-center text-md-start">
              CodM has proudly been a Salesforce Consulting Partner since 2021
              and continues to uphold the highest standards of security,
              scalability, and industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
