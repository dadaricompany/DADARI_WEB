import styled from "styled-components";
import Image from 'next/image'

const StyledMainBoxIcon = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 5px 0 0;
  border-radius: 50%;
  border: solid 2px #8246fa;
  background-color: #2d344b;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledMainBoxText = styled.span`
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.25px;
  text-align: center;
  color: #bcc2d6;
`;
const MainBoxIcon = ({ type, item }: { type: string; item: any }) => {
  return type == "icon" ? (
    <StyledMainBoxIcon>
      <Image src={`http://52.79.72.35:4000/${item.smallLogoPath}`}
        width="18"
        height="18"
        loading="lazy"
        alt="" />
    </StyledMainBoxIcon>
  ) : (
    <StyledMainBoxIcon>
      <StyledMainBoxText>+{item}</StyledMainBoxText>
    </StyledMainBoxIcon>
  );
};
export default MainBoxIcon;
