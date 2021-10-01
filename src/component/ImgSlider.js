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
        <a>
          <img src='/images/slider-badag.jpg' alt='' />
        </a>
      </Warp>
      <Warp>
        <a>
          <img src='/images/slider-badging.jpg' alt='' />
        </a>
      </Warp>
      <Warp>
        <a>
          <img src='/images/slider-scale.jpg' alt='' />
        </a>
      </Warp>
      <Warp>
        <a>
          <img src='/images/slider-scales.jpg' alt='' />
        </a>
      </Warp>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

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

  & > button {
    z-index: 1;
    opacity: 0;
    height: 100%;
    width: 5vw;

    &hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Warp = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;
