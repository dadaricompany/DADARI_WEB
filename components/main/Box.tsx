import { MouseEvent } from "react";
import styled from "styled-components";
import Image from "next/image";

import { IconArrowR } from "components/icons";
import BoxIconList from "./BoxIconList";
import { MainConvertInterface } from "utils/data/modules/main/MainInterface";

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
const StyledBoxTitle = styled.p`
  margin: 19px 0 22px 0;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: -0.5px;
  color: #fff;
`;
const StyledBoxContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: centere;
`;
const StyledBoxLinkBtn = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #2f334e;
`;

interface Props {
  data: MainConvertInterface,
  onClickLink: (e: MouseEvent<HTMLElement>) => void
};

const Box = ({
  data,
  onClickLink
}: Props) => {
  return (
    <StyledBox>
      <StyledBoxIcon>
        <Image src={`http://52.79.72.35:4000${data.smallLogoPath}`}
          width={20}
          height={20} loading="lazy" alt="" />
      </StyledBoxIcon>
      <StyledBoxTitle>{data.nameKr}</StyledBoxTitle>
      <StyledBoxContents>
        <BoxIconList item={data.subscriptionServices} />
        <StyledBoxLinkBtn onClick={onClickLink}>
          <IconArrowR iWidth={26} iHeight={26} />
        </StyledBoxLinkBtn>
      </StyledBoxContents>
    </StyledBox>
  );
};
export default Box;
