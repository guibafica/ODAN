import styled, { keyframes } from 'styled-components';

import wave from '../../assets/wave.png';
import wave02 from '../../assets/wave02.png';
import wave03 from '../../assets/wave03.png';

import colors from '../../utils/colors';

const waveAnimation = keyframes`
  0% { background-position-x: 0 }
  100% { background-position-x: 1000px }
`;

const waveAnimation2 = keyframes`
  0% { background-position-x: 0 }
  100% { background-position-x: -1000px }
`;

export const Container = styled.div`
  background: ${colors.gray.light02};
  min-height: 75vh;
  display: flex;
  align-items: center;
`;

export const WavyShape = styled.div`
  background: ${colors.gray.light03};

  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 3%;
  vertical-align: middle;
  overflow: hidden;
`;

export const WaveOne = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(${wave02});
  background-size: 1000px 100px;
  transform: rotate(180deg);

  animation: ${waveAnimation} 30s linear infinite;
  z-index: 9;
  opacity: 1;
  animation-delay: 0s;
`;

export const WaveTwo = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100px;
  background: url(${wave03});
  background-size: 1000px 100px;
  transform: rotate(180deg);

  animation: ${waveAnimation2} 15s linear infinite;
  z-index: 8;
  opacity: 1;
  animation-delay: -5s;
`;

export const WaveThree = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(${wave});
  background-size: 1000px 100px;
  transform: rotate(180deg);

  animation: ${waveAnimation} 30s linear infinite;
  z-index: 7;
  opacity: 0.5;
  animation-delay: -2s;
`;

export const Content = styled.div`
  padding: 3rem;
  padding-top: 8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PatentsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1366px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 870px) {
    justify-content: center;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const DogPìcDivLeft = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #fff;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 870px) {
    border-bottom-left-radius: 0px;
    border-top-right-radius: 40px;
  }
`;

export const DogPìcDivRight = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #fff;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 870px) {
    border-bottom-right-radius: 0px;
    border-top-left-radius: 40px;
  }
`;

export const DogPic = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DogInfoDiv = styled.div`
  width: 33%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const DogInfoLeftDiv = styled.div`
  width: 100%;
  height: 45%;
  margin-left: -2rem;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${colors.gray.light02};
  border: 4px dashed #fff;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;

  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const DogInfoRightDiv = styled.div`
  width: 100%;
  height: 45%;
  margin-right: -2rem;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  background-color: ${colors.gray.light02};
  border: 4px dashed #fff;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const LineInfoLeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 650px) {
    justify-content: center;
  }
`;

export const LineInfoRightDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 650px) {
    justify-content: center;
  }
`;

export const ParentsCardDiv = styled.div`
  width: 31%;

  @media screen and (max-width: 870px) {
    width: 200%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;

    &+div {
      margin-top: -15rem;
    }
  }
`;

export const DogInfoLeftVerticalDiv = styled.div`
  width: 100%;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;

  display: none;
  flex-direction: column;
  justify-content: center;

  border: 4px dashed #fff;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;

  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 870px) {
    display: flex;
  }
`;

export const DogInfoRightVerticalDiv = styled.div`
  width: 100%;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;

  display: none;
  flex-direction: column;
  justify-content: center;

  border: 4px dashed #fff;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;

  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 870px) {
    display: flex;
  }
`;