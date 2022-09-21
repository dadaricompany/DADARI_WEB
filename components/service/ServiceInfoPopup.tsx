import styled from "styled-components";
import { MouseEvent } from "react";
const StyledServiceInfoPopup = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  z-index: 999999;
  position: absolute;
  max-width:768px;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  transition: all 0.4s;
  justify-content: center;
  align-items: center;
`;
const StyledServiceInfoPopupBox = styled.div`
  width: 100%;
  margin: 0 20px;
  height: 162px;
  border-radius: 13px;
  background-color: #2d344b;
  padding: 24px 20px 0 20px;
  display: flex;
  flex-direction: column;
`;
const StyledServiceInfoPopupBoxMainTxt = styled.p`
  margin: 0;
  font-size: 19px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: -0.5px;
  color: #fff;
`;
const StyledServiceInfoPopupBoxSubTxt = styled.p`
  margin: 5px 0 0 0;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: #fff;
`;
const StyledServiceInfoPopupBoxBottom = styled.div`
  margin-top: 17px;
  display: flex;
  gap: 0 6px;
  span {
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: -0.5px;
    text-align: center;
    color: #fff;
  }
`;
const StyledServiceInfoPopupBoxCancel = styled.div`
  flex-grow: 53;
  border-radius: 10px;
  background-color: #68708d;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledServiceInfoPopupBoxConfirm = styled.div`
  flex-grow: 84;
  border-radius: 10px;
  background-image: linear-gradient(107deg, #ac66ff, #7435ff 100%);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ServiceInfoPopup = ({
  url,
  closePopup,
  goToURL,
}: {
  url: string;
  closePopup: (e: MouseEvent<HTMLElement>) => void;
  goToURL: (url: string) => (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <StyledServiceInfoPopup id="ServiceInfoPopup">
      <StyledServiceInfoPopupBox>
        <StyledServiceInfoPopupBoxMainTxt>
          해당 서비스로 이동합니다.
        </StyledServiceInfoPopupBoxMainTxt>
        <StyledServiceInfoPopupBoxSubTxt>
          이동 하시겠습니까?
        </StyledServiceInfoPopupBoxSubTxt>
        <StyledServiceInfoPopupBoxBottom>
          <StyledServiceInfoPopupBoxCancel onClick={closePopup}>
            <span>취소</span>
          </StyledServiceInfoPopupBoxCancel>
          <StyledServiceInfoPopupBoxConfirm onClick={goToURL(url)}>
            <span>확인</span>
          </StyledServiceInfoPopupBoxConfirm>
        </StyledServiceInfoPopupBoxBottom>
      </StyledServiceInfoPopupBox>
    </StyledServiceInfoPopup>
  );
};
export default ServiceInfoPopup;
