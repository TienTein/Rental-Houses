import React from "react";
import { useContext } from "react";
import { DetailContext } from "../DetailPage";

import "../../assets/sass/detailpage/DetaiCarousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function DetaiCarousel() {
  const value = useContext(DetailContext);
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    focusOnSelect: true,
    speed: 500,
  };
  return (
    <div className="container-fluid container-carousel">
      <Slider {...settings}>
        <div>
          <img src={value?.urlId[0]} alt="" />
        </div>
        <div>
          <img src={value?.urlId[1]} alt="" />
        </div>
        <div>
          <img src={value?.urlId[2]} alt="" />
        </div>
        <div>
          <img src={value?.urlId[3]} alt="" />
        </div>
        <div>
          <img src={value?.urlId[4]} alt="" />
        </div>
      </Slider>
    </div>
    /* End container */
  );
}

export default DetaiCarousel;
