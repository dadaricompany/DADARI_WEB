import { IconArrowR, IconMovie } from "components/icons";
import styled from "styled-components";
import MainBoxIconList from "./MainBoxIconList";
import { MouseEvent } from "react";
const StyledMainBox = styled.div`
  position: relative;
`;

const StyledMainBoxBack = styled.div`
  margin: 0 20px;
  height: 64px;
  box-shadow: 0 3px 30px 0 rgba(126, 37, 255, 0.31),
    inset 1px 1px 2px 0 rgba(255, 255, 255, 0.07);
  background-image: linear-gradient(101deg, #ac66ff, #7435ff);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border-radius: 14px;
  margin-top: 13px;
  opacity: 0.8;
`;

const StyledMainBoxFront = styled.div`
  position: absolute;
  top: 0;
  margin: 0 20px;
  padding: 12px;
  width: -webkit-fill-available;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMainBoxLeft = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMainBoxRight = styled.div`
  display: flex;
`;

const StyledIcon = styled.div`
  position: relative;
`;

const StyledIconBack = styled.div`
  width: 40px;
  height: 40px;
  opacity: 0.2;
  border-radius: 10px;
  box-shadow: 2px 4px 16px 0 rgba(126, 37, 255, 0.52),
    inset 1px 1px 3px 0 rgba(248, 213, 255, 0.2);
  background-color: #fff;
`;

const StyledIconFront = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
`;

const StyledTitle = styled.span`
  font-size: 17px;
  line-height: 1.35;
  letter-spacing: 0.5px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  color: #fff;
  margin-left: 16px;
`;

const StyledBtn = styled.div`
  position: relative;
`;

const StyledBtnBack = styled.div`
  width: 30px;
  height: 30px;
  opacity: 0.15;
  border-radius: 6px;
  background-color: #fff;
`;

const StyledBtnFront = styled.div`
  position: absolute;
  top: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBox = ({
  item,
  moveList,
}: {
  item: any
  moveList: (e: MouseEvent<HTMLElement>) => void;
}) => {
  //TODO : item 없을떄 스켈레톤 코드 넣어야됨
  return !item ? <>
  </> :
    (
      <StyledMainBox>
        <StyledMainBoxBack />
        <StyledMainBoxFront>
          <StyledMainBoxLeft>
            <StyledIcon>
              <StyledIconBack />
              <StyledIconFront>
                <img src={`http://52.79.72.35:4000/${item.logoPath}`} width={20} height={20}/>
              </StyledIconFront>
            </StyledIcon>
            <StyledTitle>{item.nameKr}</StyledTitle>
          </StyledMainBoxLeft>
          <StyledMainBoxRight>
            <MainBoxIconList item={item.subscriptionServices}/>
            <StyledBtn onClick={moveList}>
              <StyledBtnBack />
              <StyledBtnFront>
                <IconArrowR iWidth={26} iHeight={26} />
              </StyledBtnFront>
            </StyledBtn>
          </StyledMainBoxRight>
        </StyledMainBoxFront>
      </StyledMainBox>
    );
};
export default MainBox;
