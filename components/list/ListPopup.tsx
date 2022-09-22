import { MouseEvent } from "react";
import styled from "styled-components";
import ListPopupItem from "./ListPopupItem";

const StyledListPopup = styled.div`
  height: 78px;
  background-color: #2d344b;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  max-width: 768px;
  width: 100%;
`;
const StyledListPopupItemList = styled.div`
  display: flex;
  div + div {
    margin-left: 16px;
  }
`;
const StyeldListPopupBtn = styled.div`
  width: 86px;
  height: 36px;
  border-radius: 10px;
  background-color: #68708d;
  display: flex;
  justify-content: center;
  align-self: center;
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
interface Props {
  deleteDetail: (item: any) => (e: MouseEvent<HTMLElement>) => void;
  compareDetail: () => void;
  item: any;
}

const ListPopup = ({
  deleteDetail,
  compareDetail,
  item,
}: Props) => {
  return (
    <StyledListPopup>
      <StyledListPopupItemList>
        <ListPopupItem item={item[0]} deleteDetail={deleteDetail} />
        <ListPopupItem item={item[1]} deleteDetail={deleteDetail} />
      </StyledListPopupItemList>
      <StyeldListPopupBtn onClick={compareDetail}>
        <span>비교하기</span>
      </StyeldListPopupBtn>
    </StyledListPopup>
  );
};
export default ListPopup;
