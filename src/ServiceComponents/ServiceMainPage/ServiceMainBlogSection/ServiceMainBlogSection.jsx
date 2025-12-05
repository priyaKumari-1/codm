import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import blog1 from "../../../assets/imgs/features-7/img-1.png";
import { Link } from "react-router-dom";
import "./ServiceMainBlogSection.css";

const blogData = [
  {
    image: blog1,
    category: "Project Management", 
    title: "Project Management",
    description:
      "As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...",
    link: "/integrationframework.html",
  },
  {
    image: blog1,
    category: "Apex",
    title: "Mastering Async Apex for Large Scale Systems",
    description:
      "Queueable, Future, Batch, and Scheduled Apex explained for scalable apps.",
    link: "/asyncapex.html",
  },
  {
    image: blog1,
    category: "Security",
    title: "Salesforce Shield Encryption Best Practices",
    description:
      "How to secure your org with Platform Encryption, Event Monitoring, and more.",
    link: "/shield.html",
  },
  {
    image: blog1,
    category: "Security",
    title: "Salesforce Shield Encryption Best Practices",
    description:
      "How to secure your org with Platform Encryption, Event Monitoring, and more.",
    link: "/shield.html",
  }
];

function ServiceMainBlogSection() {
  return (
    <div className="slide-container">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        centeredSlides={false}
        // grabCursor={true}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}

        autoplay={{
          delay: 2500,  
          disableOnInteraction: false,
        }}

        breakpoints={{
          0: { slidesPerView: 1 },
          520: { slidesPerView: 2 },
          950: { slidesPerView: 3 },
        }}

        className="slide-content"
      >

        {blogData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="blogCardCustom bg-white p-4 rounded-2 mb-5">
              <img src={item.image} className="blogImg" width={'100%'} alt={item.title} />

              <div className="blogInfo pt-3">
                <Link className="no-decoration" to={item.link}>
                  {/* <p className="blogCategory">{item.category}</p> */}
                </Link>

                <h5 className="blogTitle">{item.title}</h5>
                <p className="blogDesc">{item.description}</p>

                <p className="purple-text fw-bold">Read More
                <svg class="ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none"><path class="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black"></path></svg>
                </p>
              </div>

              {/* whole card clickable */}
              <a className="cardClickable" href={item.link}></a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="swiper-btn-prev swiper-navBtn"></div>
      <div className="swiper-btn-next swiper-navBtn"></div>
    </div>
  );
}
export default ServiceMainBlogSection;