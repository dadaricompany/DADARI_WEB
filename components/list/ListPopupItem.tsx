import styled from "styled-components";

const StyledListPopupItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledListPopupItemIcon = styled.div`
  border-radius: 18px;
  border: dashed 1px #68708d;
  background-color: rgba(145, 148, 169, 0.12);
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

const ListPopupItem = () => {
  return (
    <StyledListPopupItem className="popup_item">
      <StyledListPopupItemIcon></StyledListPopupItemIcon>
      <StyledListPopupItemText>선택</StyledListPopupItemText>
    </StyledListPopupItem>
  );
};
export default ListPopupItem;
