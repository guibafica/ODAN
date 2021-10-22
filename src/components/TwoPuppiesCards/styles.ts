import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
  max-width: 1366px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const PuppiesLeftCard = styled.div`
  background: ${colors.gray.light03};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 49%;
  height: 300px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 870px) {
    flex-direction: column;
    height: 95vh;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const PuppiesRightCard = styled.div`
  background: ${colors.gray.light03};
  border-radius: 12px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 49%;
  height: 300px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 870px) {
    flex-direction: column;
    height: 95vh;
  }


  @media screen and (max-width: 650px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const ImgDiv = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 870px) {
    width: 90%;
  }
`;

export const InfoLeftDiv = styled.div`
  height: 90%;
  width: 55%;
  margin-right: 0.6rem;
  border-radius: 12px;
  border: 1px dashed #ccc;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 870px) {
    width: 100%;
    margin-right: 0;
    padding-left: 1.3rem;
    border: none;
  }
`;

export const InfoRightDiv = styled.div`
  height: 90%;
  width: 55%;
  margin-left: 0.6rem;
  border-radius: 12px;
  border: 1px dashed #ccc;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 870px) {
    width: 100%;
    margin-left: 0;
    padding-left: 1.3rem;
    border: none;
  }
`;

export const PuppiesLeftImgDiv = styled.div`
  width: 100%;
  height: 90%;
  border-right: 10px solid ${colors.gray.light01};
  border-top: 10px solid ${colors.gray.light01};
  border-bottom: 10px solid ${colors.gray.light01};
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${colors.gray.light01};

  @media screen and (max-width: 870px) {
    height: 100%;
    border-right: 10px solid ${colors.gray.light01};
    border-left: 10px solid ${colors.gray.light01};
    border-bottom: 10px solid ${colors.gray.light01};
    border-top: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }
`;

export const PuppiesRightImgDiv = styled.div`
  width: 100%;
  height: 90%;
  border-left: 10px solid ${colors.gray.light01};
  border-top: 10px solid ${colors.gray.light01};
  border-bottom: 10px solid ${colors.gray.light01};
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: ${colors.gray.light01};

  @media screen and (max-width: 870px) {
    height: 100%;
    border-right: 10px solid ${colors.gray.light01};
    border-left: 10px solid ${colors.gray.light01};
    border-bottom: 10px solid ${colors.gray.light01};
    border-top: none;
    border-top-left-radius: 0;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }
`;

export const PuppiesLeftImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  @media screen and (max-width: 870px) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }
`;

export const PuppiesRightImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  @media screen and (max-width: 870px) {
    border-top-left-radius: 0;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }
`;

export const TextDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &+div {
    margin-top: 10px;
    border-top: 1px solid ${colors.gray.light02};
    padding-top: 10px;
  }

  @media screen and (max-width: 870px) {
    justify-content: space-between;
  }
`;

export const VaccineLeftDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -38px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  z-index: 2;
  background-image: linear-gradient(to right, #00000080, #00000000);

  @media screen and (max-width: 870px) {
    background: #00000080;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const VaccineRightDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: -38px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  z-index: 2;
  background-image: linear-gradient(to left, #00000080, #00000000);

  @media screen and (max-width: 870px) {
    background: #00000080;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const GenderLeftDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -50px;
  padding-left: 13px;
  margin-left: -20px;
  position: relative;
  z-index: 2;
  background: ${colors.primary.yellow01};

  @media screen and (max-width: 870px) {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    justify-content: center;
    width: 30%;
    padding-left: 0;
    margin-left: 0;
    margin-bottom: -38px;
    height: 38px;
  }
`;

export const GenderRightDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -50px;
  padding-right: 13px;
  margin-left: 88%;
  position: relative;
  z-index: 2;
  background: ${colors.primary.yellow01};

  @media screen and (max-width: 1350px) {
    margin-left: 84%;
  }

  @media screen and (max-width: 870px) {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    justify-content: center;
    width: 30%;
    padding-left: 0;
    margin-left: 0;
    margin-bottom: -38px;
    height: 38px;
  }
`;
