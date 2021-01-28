import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../resources/carousel1.jpg"
import carousel2 from "../resources/carousel2.jpg"
import carousel3 from "../resources/carousel3.jpg"

const HeaderCarousel = () => {
        return (
            <div>
            <Carousel>
                <Carousel.Item style={{height:"300px", width:"100%", overflow:"hidden"}}>
                    <img
                        alt="Picsum"
                        src={carousel1}
                        style={{width:'100%'}}
                    />
                </Carousel.Item>
                <Carousel.Item style={{height:"300px", width:"100%", overflow:"hidden"}}>
                    <img
                        alt="Picsum"
                        src={carousel2}
                        style={{width:'100%'}}
                    />
                </Carousel.Item>
                <Carousel.Item style={{height:"300px", width:"100%", overflow:"hidden"}}>
                    <img
                        alt="Picsum"
                        src={carousel3}
                        style={{width:'100%'}}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        );
}

export default HeaderCarousel;
