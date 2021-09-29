import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
function ImgSlider() {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Carousel {...setting}>
      <Warp>
        <img src='/images/slider-badag.jpg' alt='' />
      </Warp>
      <Warp>
        <img src='/images/slider-badging.jpg' alt='' />
      </Warp>
      <Warp>
        <img src='/images/slider-scale.jpg' alt='' />
      </Warp>
      <Warp>
        <img src='/images/slider-scales.jpg' alt='' />
      </Warp>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  &:hover button {
    opacity: 1;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  /* .slick-arrow {
    opacity: 0;
  } */

  button {
    z-index: 1;
    opacity: 0;
  }

  .slick-list {
    overflow: visible;
  }
`;

const Warp = styled.div`
  cursor: pointer;
  padding: 4px;

  img {
    height: 100%;
    width: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 10px;

    &:hover {
      transition-duration: 300ms;
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
