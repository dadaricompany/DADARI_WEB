import styled from "styled-components";
import { MouseEvent } from "react";

const StyledListPopupItem = styled.div`
  display: flex;
  align-items: center;
`;

const StyledListPopupItemIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 9px;
  border: 1px dashed #68708d;
  background-color: rgba(145, 148, 169, 0.12);
`;
const StyledListPopupItemText = styled.p`
  margin: 0 0 0 8px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  color: #fff;
`;
interface Props {
  deleteDetail: (item: any) => (e: MouseEvent<HTMLElement>) => void;
  item: any;
}
const ListPopupItem = ({
  deleteDetail,
  item,
}: Props) => {
  return (
    <StyledListPopupItem className="popup_item">
      {item && item.defaultLogoPath ? (
        <img
          onClick={deleteDetail(item)}
          src={`https://dadari-api.com${item.defaultLogoPath}`}
          style={{
            borderRadius: "9px",
            width: "36px",
            height: "36px",
          }}
          loading="lazy"
          alt=""
        />
      ) : (
        <StyledListPopupItemIcon></StyledListPopupItemIcon>
      )}
      <StyledListPopupItemText>
        {item && item.nameKr ? item.nameKr : "선택"}
      </StyledListPopupItemText>
    </StyledListPopupItem>
  );
};
export default ListPopupItem;
