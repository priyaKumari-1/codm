import './ServiceMainNextComponent.css';
const ServiceMainNextComponent = () => {
  const counters = [
    {
      title: (
        <>
          Continuous <br /> growth with
        </>
      ),
      value: 20,
      subtitle: "New accounts",
    },
    {
      title: (
        <>
          Successfully <br /> completed
        </>
      ),
      value: 20,
      subtitle: "Finished projects",
    },
    {
      title: (
        <>
          Recruit more <br /> than
        </>
      ),
      value: 20,
      subtitle: "Skilled experts",
    },
    {
      title: (
        <>
          Increase internet <br /> awareness
        </>
      ),
      value: 20,
      subtitle: "Media posts",
    },
  ];

  return (
    <section className="fix section-padding bg-light mt-5">
      <div className="ServiceMainNextContainer container">
        <div className="inner">
          <div className="row justify-content-between">
            {counters.map((item, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="counter-item">
                  <div className="content text-center mx-auto">
                    <h6 className='counterItem'>{item.title}</h6>

                    <span className="service_countnum h1 fw-black my-0">
                      +
                      <span className="odometer"></span>
                      <span>{item.value}</span>
                    </span>

                    <p className="service_countnumspan fs-5">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMainNextComponent;
