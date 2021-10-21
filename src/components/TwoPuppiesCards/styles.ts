import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3rem;
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
`;

export const ImgDiv = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
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
`;

export const PuppiesLeftImg = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  border-right: 10px solid ${colors.gray.light01};
  border-top: 10px solid ${colors.gray.light01};
  border-bottom: 10px solid ${colors.gray.light01};
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const PuppiesRightImg = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  border-left: 10px solid ${colors.gray.light01};
  border-top: 10px solid ${colors.gray.light01};
  border-bottom: 10px solid ${colors.gray.light01};
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
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
`;
