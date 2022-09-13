import styled from "styled-components";
import { MouseEvent } from "react";
const StyledItemFooter = styled.div`
  height: 155px;
  background: #000;
  padding: 24px 20px 21px 20px;
  display: flex;
  flex-direction: column;
`;
const StyledItemFooterTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: #ecf1fb;
`;

const StyledItemFooterSub = styled.p`
  margin: 4px 0 21px 0;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.25px;
  color: #9194a9;
`;
const StyledItemFooterBtnZone = styled.div`
  display: flex;
  gap: 0 6px;
`;
const StyledItemGo = styled.div`
  cursor: pointer;
  flex-grow: 60;
  height: 50px;
  border-radius: 10px;
  background-color: #68708d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  color: #fff;
`;
const StyledItemAdd = styled.div`
  cursor: pointer;
  flex-grow: 97;
  height: 50px;
  border-radius: 10px;
  background-image: linear-gradient(104deg, #ac66ff, #7435ff);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  color: #fff;
`;
const ItemFooter = ({
  openPopup,
  selectCmpare
}: {
  openPopup: (e: MouseEvent<HTMLElement>) => void;
  selectCmpare: (item: any) => void;
}) => {
  return (
    <StyledItemFooter>
      <StyledItemFooterTitle>DADARI</StyledItemFooterTitle>
      <StyledItemFooterSub>
        Copyright © 2022 toy 3 All Rights Reserved.
      </StyledItemFooterSub>
      <StyledItemFooterBtnZone>
        <StyledItemGo onClick={openPopup}>서비스 바로가기</StyledItemGo>
        <StyledItemAdd >비교함 담기</StyledItemAdd>
      </StyledItemFooterBtnZone>
    </StyledItemFooter>
  );
};
export default ItemFooter;
