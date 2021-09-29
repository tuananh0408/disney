import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <Background>
        <img
          src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg'
          alt=''
        />
      </Background>
      <ImgTitle>
        <img
          src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'
          alt=''
        />
      </ImgTitle>
      <Controls>
        <ButtonPlay>
          <img src='/images/play-icon-black.png' alt='' />
          <span>Play</span>
        </ButtonPlay>
        <ButtonTrailer>
          <img src='/images/play-icon-white.png' alt='' />
          <span>Trailer</span>
        </ButtonTrailer>
        <ButtonAdd>
          <span>+</span>
        </ButtonAdd>
        <ButtonGroup>
          <img src='/images/group-icon.png' alt='' />
        </ButtonGroup>
      </Controls>
      <SubTitle>2018 . 7m . Family, Fantasykids, Animation</SubTitle>
      <Description>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem
      </Description>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonPlay = styled.button`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: none;
  height: 56px;
  padding: 0px 24px;
  margin-right: 22px;
  background-color: rgb(249, 249, 249);
  cursor: pointer;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const ButtonTrailer = styled(ButtonPlay)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const ButtonAdd = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 16px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: white;
    font-size: 30px;
  }
`;

const ButtonGroup = styled(ButtonAdd)`
  background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  margin-top: 26px;
  font-size: 15px;
  min-height: 20px;
  color: rgb(249, 249, 249);
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  margin-top: 26px;
  line-height: 1.4;
  font-size: 20px;
`;
