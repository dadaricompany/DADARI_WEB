import styled from "styled-components";
import ListPopupItem from "./ListPopupItem";

const StyledListPopup = styled.div`
  height: 156px;
  background-color: #2d344b;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  padding: 26px 24px 0 24px;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  max-width: 768px;
  width: 100%;
  div + div {
    margin-left: 29px;
  }
`;
const StyeldListPopupBtn = styled.div`
  margin-top: 30px;
  width: 110px;
  height: 36px;
  border-radius: 10px;
  background-color: #68708d;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: -0.5px;
    text-align: center;
    color: #fff;
  }
`;
const ListPopup = () => {
  return (
    <StyledListPopup>
      <ListPopupItem />
      <ListPopupItem />
      <StyeldListPopupBtn>
        <span>비교하기</span>
      </StyeldListPopupBtn>
    </StyledListPopup>
  );
};
export default ListPopup;
