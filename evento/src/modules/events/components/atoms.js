import styled, { keyframes } from "styled-components";

export const StyledFunEvent = styled.div`
  width: 1440px;
  height: 358px;
  background-size: cover;
  background-repeat: no-repeat;
  img {
    width: 40px;
    height: 40px;
    margin-top: 24px;
    margin-left: 64px;
    padding: 10px 0px 0px 0px;
    gap: 0px;
    border-radius: 50px;
    opacity: 0px;
  }
`;
export const FunEventMain = styled.div`
  margin: auto;
  width: 1440px;
  height: 458px;
`;
export const StyledEventText = styled.div`
  width: 263px;
  height: 65px;
  margin-top: 40px;
  margin-left: 64px;
  gap: 0px;
  opacity: 0px;
  p {
    //styleName: 48 BOLD SANS;
    font-family: Open Sans;
    font-size: 30px;
    font-weight: 700;
    line-height: 65.37px;
    text-align: left;
    color: rgba(255, 220, 49, 1);
  }
`;
export const StyledEventLocation = styled.div`
  width: 106px;
  height: 25px;
  margin-top: 16px;
  margin-left: 64px;
  gap: 0px;
  opacity: 0px;
  p {
    //styleName: 18 BOLD SANS;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 700;
    line-height: 24.51px;
    text-align: left;
    color: white;
  }
`;
export const StyledEventSubText = styled.div`
  width: 495px;
  height: 27px;
  margin-top: 18px;
  margin-left: 64px;
  gap: 0px;
  opacity: 0px;
  p {
    //styleName: 20 MEDIUM SANS;
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 500;
    line-height: 27.24px;
    text-align: left;
    color: white;
  }
`;
export const StyledExploreCategory = styled.div`
  width: 1160px;
  height: 268px;
  margin-left: 140px;
  position: relative;
`;
export const ExploreText = styled.div`
  width: 520px;
  height: 44px;
  margin-left: 320px;

  position: relative;
  p {
    //styleName: 32 SEMIBOLD SANS;
    font-family: Open Sans;
    font-size: 32px;
    font-weight: 600;
    line-height: 43.58px;
    text-align: center;
  }
`;
export const StyledExploreCard = styled.div`
  width: 1160px;
  height: 200px;
  margin: 10px;
  opacity: 0px;
  display: ruby;

  margin-left: 23px;
`;
export const Explore = styled.div`
  width: 200px;
  height: 200px;
  gap: 0px;
  opacity: 0px;
  margin-top: 34px;
  background-repeat: no-repeat;
  background-size: 168px 125px;
  background-position: 16px 16px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  p {
    //styleName: 20 SEMIBOLD SANS;
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 27.24px;
    text-align: center;
    color: rgba(255, 0, 0, 1);
    margin-top: 157px;
  }
`;
