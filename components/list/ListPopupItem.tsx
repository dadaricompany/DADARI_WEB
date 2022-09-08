import styled from "styled-components";
import { MouseEvent } from "react";
const StyledListPopupItem = styled.div`
  display: flex;
  flex-direction: column;
  position:relative;
`;
const StyledDeletePopupItem = styled.div`
    width: 26px;
    height: 26px;
    padding: 5px;
    border-radius:50%;
    background-color: #68708d;
    position:absolute;
    right:-10px;
    top:-10px;
`;
const StyledListPopupItemIcon = styled.div`
  border-radius: 18px;
  width: 72px;
  height: 72px;
`;
const StyledListSelectPopupItemIcon = styled.img`
  border-radius: 18px;
  width: 72px;
  height: 72px;
`;
const StyledListPopupItemText = styled.p`
  margin: 10px 0 0 0;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  color: #fff;
  text-align: center;
`;

const ListPopupItem = ({
  deleteDetail,
  item
}: {
  deleteDetail: (item: any) => (e: MouseEvent<HTMLElement>) => void,
  item: any
}) => {
  return (
    <StyledListPopupItem className="popup_item">
      {item && <StyledDeletePopupItem onClick={deleteDetail(item)}></StyledDeletePopupItem>}
      {item && item.bigLogoPath ? <StyledListSelectPopupItemIcon src={`http://52.79.72.35:4000/${item.bigLogoPath}`}
        width={20}
        height={20}></StyledListSelectPopupItemIcon> : <StyledListPopupItemIcon></StyledListPopupItemIcon>}
      <StyledListPopupItemText>{item && item.nameKr ? item.nameKr : '선택'}</StyledListPopupItemText>
    </StyledListPopupItem>
  );
};
export default ListPopupItem;
