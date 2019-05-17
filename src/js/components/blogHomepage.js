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
                    breakpoint: 610,
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
                       <h2 className="h3Header h2Header-underline">
                           ИНТЕРЕСНОЕ В БЛОГЕ
                       </h2>

                       <div className="main-article-wrapper">
                           <div className="main-article">
                               <img src="/img/header-baner2.jpg" alt="Blog Image"/>
                               <div className="text-block">
                                   <div>
                                       <h4 className="h4Header">
                                           БЛАГОДАРЯ LIFESPULSE ПРООПЕРИРОВАЛИ ГАРШИНА
                                           ВЯЧЕСЛАВА
                                       </h4>
                                       <h6 className="paragraph">
                                           Деменция (психоорганический синдром) — это приобретенное слабоумие, возникающее из-за поражения головного мозга, чаще в пожилом и старческом возрасте (сенильная деменция, или старческий маразм). При этом нарушается интеллект и высшие функции коры головного мозга.
                                       </h6>

                                       <a href="/"> Читать дальше</a>
                                   </div>
                                   <div className="date">
                                       12.08.2018
                                   </div>
                               </div>
                           </div>
                       </div>


                       <div className="blog-article-list">
                           <Slider {...settings}>
                               <div className="blog-card-item">
                                   <div className="blog-card">
                                       <img src="/img/card1.jpg" alt=""/>

                                       <div className="text-block">
                                           <div>
                                               <div className="date">
                                                   12.08.2018
                                               </div>
                                               <h4>
                                                   У старых людей замедлен обмен веществ и снижена подвижность, поэтому они очень чувствительны к холоду.
                                               </h4>
                                           </div>


                                           <a href="/"> Читать дальше</a>
                                       </div>
                                   </div>
                               </div>
                               <div className="blog-card-item">
                                   <div className="blog-card">
                                       <img src="/img/card2.jpg" alt=""/>

                                       <div className="text-block">
                                           <div>
                                               <div className="date">
                                                   12.08.2018
                                               </div>
                                               <h4>
                                                   Чрезмерный прием лекарств с побочным снотворным и седативным (успокаивающим) эффектом приводит к вялости, заторможенности и ухудшению когнитивных (познавательных) функций.
                                               </h4>
                                           </div>


                                           <a href="/"> Читать дальше</a>
                                       </div>
                                   </div>
                               </div>
                               <div className="blog-card-item">
                                   <div className="blog-card">
                                       <img src="/img/card3.jpg" alt=""/>

                                       <div className="text-block">
                                           <div>
                                               <div className="date">
                                                   12.08.2018
                                               </div>
                                               <h4>
                                                   Состояние, напоминающее деменцию, может развиться в результате хронической субдуральной гематомы после перенесенной черепно-мозговой травмы.
                                               </h4>

                                           </div>


                                           <a href="/"> Читать дальше</a>
                                       </div>
                                   </div>
                               </div>



                           </Slider>
                       </div>

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