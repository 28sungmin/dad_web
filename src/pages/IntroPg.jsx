import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImgAtm from "../components/atom/ImgAtm";

import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";

import { click } from "@testing-library/user-event/dist/click";

const MainPg = () => {
  const slideLists = [slide1, slide2, slide3];
  // const [slideLists, setslideLists] = useState([slide1, slide2, slide3]);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <section id="main">
      <Slider {...settings}>
        <div>
          <ImgAtm srcProp={slide1} />
        </div>
        <div>
          <ImgAtm srcProp={slide2} />
        </div>
        <div>
          <ImgAtm srcProp={slide3} />
        </div>
      </Slider>
    </section>
  );
};
export default MainPg;
