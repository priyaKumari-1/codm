import img1 from '../../../assets/imgs/service-4/React.png';
import FlipImgwithContent from '../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/service-4/icon-1.svg';
import icon2 from '../../../assets/imgs/service-4/icon-2.svg';
import ServiceMainPagePills from '../ServiceMainPagePills/ServiceMainPagePills';

function ReactIntegration() {
  const items = [
    {
      icon: icon1,
      title: "Component-based Architecture (CBA)",
      description:
        "CBA is a software design paradigm that structures a system into independent, reusable, and self-contained components that communicate through defined interfaces."
    },
    {
      icon: icon2,
      title: "Virtual DOM (VDOM)",
      description:
        "React uses a fast, in-memory version of the DOM that helps update the UI efficiently."
    }
  ];

  return (
    <>
      <div className="row rounded-3 bg-white">
        <div className="col-lg-5 mb-lg-0 mb-5">
          <img
            className="rounded-3 my-4"
            src={img1}
            alt="React Integration"
            width="100%"
          />
        </div>

        <div className="col-lg-7">
          <div className="p-lg-3">
            <h3 className="fw-normal">
              Build Lightning-Fast Interfaces with <span className="fw-bold">React</span>
            </h3>

            <p className="custom-p">
              We help you develop dynamic, responsive front-end interfaces using React, 
              delivering seamless user experiences and high-performance web apps.
            </p>

            <div>
              <FlipImgwithContent items={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactIntegration;