import styled from "styled-components";
import { MouseEvent } from "react";
const StyledPopup = styled.div`
     width: 100vw;
    height: 100vh;
    z-index: 999999;
    position: absolute;
    max-width:768px;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    transition: all 0.4s;
    justify-content: center;
    align-items: center;
`
const StyledPopupBox = styled.div`
    width: 100%;
    margin: 0 20px;
    height: 162px;
    border-radius: 13px;
    background-color: #2d344b;
    padding: 24px 20px 0 20px;
    display: flex;
    flex-direction: column;
`
const StyledPopupBoxTitle = styled.div`
  margin: 0;
  font-size: 19px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: -0.5px;
  color: #fff;
`
const StyledPopupBoxContent = styled.div`
  margin: 5px 0 0 0;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: #fff;
`
const StyledPopupBoxBottom = styled.div`
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
`
const StyledPopupBoxCancel = styled.div`
    flex-grow: 53;
    border-radius: 10px;
    background-color: #68708d;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledPopupBoxConfirm = styled.div`
    flex-grow: 84;
    border-radius: 10px;
    background-image: linear-gradient(107deg, #ac66ff, #7435ff 100%);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
interface Props {
    onClickCancel: (e: MouseEvent<HTMLElement>) => void;
    onClickConfirm: (e: MouseEvent<HTMLElement>) => void;
}
const Popup = ({
    onClickCancel,
    onClickConfirm,
}: Props) => {
    return <StyledPopup  id="ComparePopup">
        <StyledPopupBox>
            <StyledPopupBoxTitle>
                같은 카테고리에서만 비교 가능해요.
            </StyledPopupBoxTitle>
            <StyledPopupBoxContent>
                이전에 선택된 서비스가 삭제됩니다.
            </StyledPopupBoxContent>
            <StyledPopupBoxBottom>
                <StyledPopupBoxCancel onClick={onClickCancel}><span>취소</span></StyledPopupBoxCancel>
                <StyledPopupBoxConfirm onClick={onClickConfirm}><span>삭제하고 담기</span></StyledPopupBoxConfirm>
            </StyledPopupBoxBottom>
        </StyledPopupBox>
    </StyledPopup>
}
export default Popup;