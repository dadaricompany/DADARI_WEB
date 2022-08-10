import { IconArrowR, IconMovie } from "components/icons";
import styled from "styled-components";
import BoxIconList from "./BoxIconList";
import { MouseEvent } from "react";
const StyledBox = styled.div`
  width: 150px;
  height: 169px;
  padding: 15px 12px 20px;
  border-radius: 14px;
  box-shadow: inset 1px 1px 2px 0 rgba(255, 255, 255, 0.07);
  background-color: #21283f;
`;
const StyledBoxIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 2px 4px 16px 0 rgba(126, 37, 255, 0.52),
    inset 1px 1px 3px 0 rgba(248, 213, 255, 0.2);
  background-image: linear-gradient(135deg, #ac66ff, #7435ff);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBoxText = styled.p`
  margin: 19px 0 22px 0;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: -0.5px;
  color: #fff;
`;

const StyledBoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: centere;
`;

const StyledBoxBottomBtn = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #2f334e;
`;
const Box = ({
  moveList,
}: {
  moveList: (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <StyledBox>
      <StyledBoxIcon>
        <IconMovie iWidth={20} iHeight={20} />
      </StyledBoxIcon>
      <StyledBoxText>음악</StyledBoxText>
      <StyledBoxBottom>
        <BoxIconList />
        <StyledBoxBottomBtn onClick={moveList}>
          <IconArrowR iWidth={26} iHeight={26} />
        </StyledBoxBottomBtn>
      </StyledBoxBottom>
    </StyledBox>
  );
};
export default Box;
