import React from "react";
import SingleCard from './singleCard'
import Slider from "react-slick";

class CardBlock extends React.Component {

    render() {
        const {title} = this.props;

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
            <div className="card-block">
                <div className="container">
                    <h2 className="h2Header h2Underline">
                        {this.props.title}
                    </h2>
                    <ul className="card-block-list">
                        <Slider {...settings}>
                        <li>
                            <SingleCard></SingleCard>
                        </li>
                        <li>
                            <SingleCard></SingleCard>
                        </li>
                        <li>
                            <SingleCard></SingleCard>
                        </li>
                        </Slider>
                    </ul>

                    <div className="link-wrapper">
                        <a href="/" className="link-bottom-hover">Посмотреть еще</a>
                    </div>

                </div>
            </div>
        )
    }
};

export default CardBlock;