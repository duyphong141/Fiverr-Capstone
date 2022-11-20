import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Home-Comment-Slick.css'
import ModalVideo from "react-modal-video";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        return (

            <div className="comment">
                <Slider {...settings}>
                    <div className="comment-item d-flex">

                        <div className="video-modal">
                            <img className="img-fluid" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg" alt="" />
                        </div>
                        {/* <ModalVideo isOpen={isOpenComment} url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" channel='custom' onClose={() => setOpen(false)} /> */}

                        <div className="text-content">
                            <h5>
                                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                                <span>
                                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png" alt="" />
                                </span>
                            </h5>
                            <blockquote>
                                <i>"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."</i>
                            </blockquote>
                        </div>
                    </div>

                    <div className="comment-item d-flex">

                        <div className="video-modal">
                            <img className="img-fluid" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg" alt="" />
                        </div>

                        <div className="text-content">
                            <h5>
                                Kay Kim, Co-Founder
                                <span>
                                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png" alt="" />
                                </span>
                            </h5>
                            <blockquote>
                                <i>"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."</i>
                            </blockquote>
                        </div>
                    </div>

                    <div className="comment-item d-flex">

                        <div className="video-modal">
                            <img className="img-fluid" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg" alt="" />
                        </div>

                        <div className="text-content">
                            <h5>
                                Tim and Dan Joo, Co-Founders
                                <span>
                                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png" alt="" />
                                </span>
                            </h5>
                            <blockquote>
                                <i>"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."</i>
                            </blockquote>
                        </div>
                    </div>

                    <div className="comment-item d-flex">

                        <div className="video-modal">
                            <img className="img-fluid" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg" alt="" />
                        </div>

                        <div className="text-content">
                            <h5>
                                Caitlin Tormey, Chief Commercial Officer
                                <span>
                                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png" alt="" />
                                </span>
                            </h5>
                            <blockquote>
                                <i>"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."</i>
                            </blockquote>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}



// export default function MultipleItems() {
//     const [isOpen, setOpen] = useState(false);

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />
//     };

//     return (
//         <div className="comment">
//             <Slider {...settings}>
//                 <div className="comment-item d-flex">

//                     <div className="video-modal" onClick={() => setOpen(true)}>
//                         <img className="img-fluid" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg" alt="" />
//                     </div>
//                     <ModalVideo isOpen={isOpen} url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" channel='custom' onClose={() => setOpen(false)} />

//                     <div className="text-content">
//                         <h5>
//                             Brighid Gannon (DNP, PMHNP-BC), Co-Founder
//                             <span>
//                                 <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png" alt="" />
//                             </span>
//                         </h5>
//                         <blockquote>
//                             <i>"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."</i>
//                         </blockquote>
//                     </div>
//                 </div>

//             </Slider>
//         </div>
//     );
// }
