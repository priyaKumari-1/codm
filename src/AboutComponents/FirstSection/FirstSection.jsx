import './FirstSection.css';


import { Link } from 'react-router-dom';

import star1 from '../../assets/imgs/cta-15/star-1.svg';
import star2 from '../../assets/imgs/cta-15/star-2.svg';
import DotBtn from "../../utils/Dotbtn/Dotbtn";

import img1 from '../../assets/imgs/cta-15/img-1.png';
import img2 from '../../assets/imgs/cta-15/img-2.png';
import img3 from '../../assets/imgs/cta-15/img-3.png';
import img4 from '../../assets/imgs/cta-15/img-4.png';
import img5 from '../../assets/imgs/cta-15/img-5.png';

// icons
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const FirstSection = () => {
    return (
        <div className="about_first_section container container">
            <div>
                <div className="d-flex align-items-center justify-content-center position-relative flex-wrap">
                    <DotBtn text="ABOUT US" />
                </div>
                <h3 className="about_heading mt-3 mb-3">
                    Driven by <span className="fw-bold">Passion</span> powered by <br />
                    <span className="fw-bold">Innovation</span>
                </h3>

                <div className="img-container d-flex align-items-center justify-content-center">
                    <img src={img1} alt="" width={'15%'} />
                    <img src={img2} alt="" width={'20%'} />
                    <img src={img3} alt="" width={'35%'} />
                    <img src={img4} alt="" width={'20%'} />
                    <img src={img5} alt="" width={'15%'} />
                </div>  

                <div>
                    <div className="text-center mt-5">
                        <div className="socials bg-white px-3 shadow-1 py-2 border rounded-pill d-inline-flex align-items-center">
                            <p className="text-900 mb-0 me-2">Follow us:  </p>
                            <ul className='list-unstyled d-flex mb-0 gap-2'>
                                <a href='https://www.linkedin.com/company/codm-software-limited/' target="_blank" rel="noreferrer"><CiLinkedin size={'1.6rem'} color="gray"/></a>
                                <a href='' target="_blank" rel="noreferrer"><FaSquareXTwitter size={'1.6rem'} color="gray"/></a>
                                <a href='https://www.youtube.com/@CodMSoftwareLimited' target="_blank" rel="noreferrer"><FaYoutube size={'1.6rem'} color="gray"/></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


  {/* background imgs */ }


    {/* ------ star section ----- */ }

    {/* <div className=''>
        <img className="position-absolute top-50" src={star1} alt="star"/>
        <img className='position-absolute top-10' src={star2} alt="" />
   </div> */}

    <div className='first_section_bgImgs'>
        <div className="rotate-center ellipse-rotate-success position-absolute z-0"></div>
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0"></div>
    </div>
    </div >
    );
};

export default FirstSection;
