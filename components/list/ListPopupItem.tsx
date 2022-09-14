import styled from "styled-components";
import { MouseEvent } from "react";
import { IconX } from "components/icons";

const StyledListPopupItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledDeletePopupItem = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgb(103, 112, 140);
  position: absolute;
  right: -10px;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledListPopupItemIcon = styled.div`
  border-radius: 18px;
  width: 72px;
  height: 72px;
  border: 1px dashed #68708d;
  background-color: rgba(145, 148, 169, 0.12);
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
  item,
}: {
  deleteDetail: (item: any) => (e: MouseEvent<HTMLElement>) => void;
  item: any;
}) => {
  return (
    <StyledListPopupItem className="popup_item">
      {item && (
        <StyledDeletePopupItem onClick={deleteDetail(item)}>
          <IconX />
        </StyledDeletePopupItem>
      )}
      {item && item.bigLogoPath ? (
        <img
          src={`http://52.79.72.35:4000/${item.bigLogoPath}`}
          style={{
            borderRadius: "18px",
            width: "72px",
            height: "72px",
          }}
          width={20}
          height={20}
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
