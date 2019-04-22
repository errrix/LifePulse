import React from "react";
// import Slider from "react-slick/lib";
import Slider from "react-slick";
import {Link} from "react-router-dom";

class BlogHomepage extends React.Component {

    render() {

        var settings = {
            dots: true,
            arrows : false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        };

        return (
           <div>
               <div className="homepage-blog-section">
                   <div className="container">
                       <h2 className="h2Header h2Header-underline">
                           ИНТЕРЕСНОЕ В БЛОГЕ
                       </h2>

                       <div className="main-article-wrapper">
                           <div className="main-article">
                               <img src="/img/header-baner2.jpg" alt=""/>
                               <div className="text-block">
                                   <div>
                                       <h4>
                                           БЛАГОДАРЯ LIFESPULSE ПРООПЕРИРОВАЛИ ГАРШИНА
                                           ВЯЧЕСЛАВА
                                       </h4>
                                       <h6>
                                           Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis
                                           dis parturient montes,
                                           nascetur
                                           ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
                                           tellus mollis orci, sed
                                           rhoncus
                                           sapien nunc eget. Proin sodales pulvinar tempor.
                                       </h6>

                                       <a href="/"> Читать дальше</a>
                                   </div>
                                   <div className="date">
                                       12.08.2018
                                   </div>
                               </div>
                           </div>
                       </div>


                       <ul className="blog-article-list">
                           <Slider {...settings}>
                               <div>
                                   <li className="blog-card">
                                       <img src="/img/card1.jpg" alt=""/>

                                       <div className="text-block">
                                           <div>
                                               <div className="date">
                                                   12.08.2018
                                               </div>
                                               <h4>
                                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae  Animi beatae
                                               </h4>
                                           </div>


                                           <a href="/"> Читать дальше</a>
                                       </div>
                                   </li>
                               </div>
                               <div>
                                   <li className="blog-card">
                                       <img src="/img/card2.jpg" alt=""/>

                                       <div className="text-block">
                                           <div>
                                               <div className="date">
                                                   12.08.2018
                                               </div>
                                               <h4>
                                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae  Animi beatae
                                               </h4>
                                           </div>


                                           <a href="/"> Читать дальше</a>
                                       </div>
                                   </li>
                               </div>
                               <div>
                                   <li className="blog-card">
                                       <img src="/img/card3.jpg" alt=""/>

                                       <div className="text-block">
                                           <div>
                                               <div className="date">
                                                   12.08.2018
                                               </div>
                                               <h4>
                                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae  Animi beatae
                                               </h4>

                                           </div>


                                           <a href="/"> Читать дальше</a>
                                       </div>
                                   </li>
                               </div>



                           </Slider>
                       </ul>

                       <div className="link-wrapper">
                           <Link to='/blog' className="link-bottom-hover">Смотреть ещё</Link>
                       </div>
                   </div>
               </div>


           </div>
        )
    }
};

export default BlogHomepage;