import { MouseEvent } from "react";
import Image from "next/image";
import styled from "styled-components";

import { IconPlus } from "components/icons";
import { ServiceConvertInterface } from "utils/data/modules/list/ListInterface";

const StyledSectionItem = styled.div`
  height: 248px;
  border: 1px solid #68708d;
  border-radius: 15px;
  padding: 14px 10px 14px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const StyledSectionItemTitle = styled.p`
  align-self: flex-start;
  margin: 20px 0 8px 0;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: -0.5px;
  color: #fff;
`;
const StyledSectionDescripton = styled.p`
  align-self: flex-start;
  font-size: 14px;
  height: 57px;
  margin: 0;
  padding-right: 54px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  overflow: hidden;
  color: #bcc2d6;
`;
const StyledSectionItemBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background-image: linear-gradient(135deg, #ac66ff, #7435ff);
`;
interface Props {
  onClickSection: (item: any) => (e: MouseEvent<HTMLElement>) => void;
  onClickPlusBtn: (item: any) => (e: MouseEvent<HTMLElement>) => void;
  data: ServiceConvertInterface;
}

const SectionItem = ({
  onClickSection,
  onClickPlusBtn,
  data,
}: Props) => {
  return (
    <StyledSectionItem onClick={onClickSection(data.id)}>
      <Image
        src={`https://dadari-api.com${data.listLogoPath}`}
        width={110}
        height={110}
        loading="lazy"
        alt={`${data.nameKr}의 서비스로고`}
      />
      <StyledSectionItemTitle>{data.nameKr}</StyledSectionItemTitle>
      <StyledSectionDescripton>{data.description}</StyledSectionDescripton>
      <StyledSectionItemBtn onClick={onClickPlusBtn(data)}>
        <IconPlus iWidth={32} iHeight={32} />
      </StyledSectionItemBtn>
    </StyledSectionItem>
  );
};
export default SectionItem;
