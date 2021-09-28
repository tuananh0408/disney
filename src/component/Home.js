import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  position: relative;
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    content: "";
    z-index: -1;
  }
`;
