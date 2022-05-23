import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ipsam molestiae nobis provident velit omnis placeat consequatur blanditiis nemo pariatur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia aliquam fugit ex, labore ipsa magnam voluptatem. Neque, assumenda unde!.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora aliquam iusto libero? Facere illo iusto atque sapiente qui. Adipisci!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;