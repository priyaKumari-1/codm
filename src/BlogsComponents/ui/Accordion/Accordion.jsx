
import "./Accordion.css";

const Accordion = ({ title, items, defaultOpen = 0 }) => {
  return (
    <>
      {title && (
        <h4 className="mt-3 pt-3 mb-3">{title}</h4>
      )}
      <div className="accordion mt-4" id="accordionExample">
        {items.map((item, index) => (
          <div key={item.number} className="accordion-item border-bottom">
            <h2 className="accordion-header" id={`heading${item.number}`}>
              <button
                className={`accordion-button ${
                  index === defaultOpen ? "" : "collapsed"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.number}`}
                aria-expanded={index === defaultOpen ? "true" : "false"}
                aria-controls={`collapse${item.number}`}
              >
                <span className="circleIcon purple-bg me-3">
                  {item.number}
                </span>
                <h6 className="accordion_title">{item.title}</h6>
              </button>
            </h2>
            <div
              id={`collapse${item.number}`}
              className={`accordion-collapse collapse ${
                index === defaultOpen ? "show" : ""
              }`}
              aria-labelledby={`heading${item.number}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;


//  how to use this 
 
//   <Accordion
//       title="Use Cases of Salesforce Education Cloud"
//       items={accordionData}
//       defaultOpen={0} 
//     />

// and here is data format

// const accordionData = [
//   {
//     number: 1,
//     title: "Admissions & Enrollment",
//     content:
//       "Institutions can attract, engage, and convert prospective students with tailored campaigns and seamless application processes. From first interest to first day on campus, every step is automated and tracked."
//   },]

