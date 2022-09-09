import styled from "styled-components";
import Image from "next/image";

const StyledDescription = styled.div`
  height: 338px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledDescriptionLogo = styled.div`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledDescriptionTitle = styled.p`
  height: 28px;
  margin: 0;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -1px;
  text-align: center;
  color: #fff;
`;
const StyledDescriptionSubTitle = styled.p`
  margin: 7px 0 27px 0;
  height: 20px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  text-align: center;
  color: #fff;
`;
const StyledDescriptionDesc = styled.p`
  width: 100%;
  height: 65px;
  overflow: auto;
  margin: 0;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  color: #9194a9;
`;
const Description = ({ titleKr, titleEng, desc, image }: any) => {
  return (
    <StyledDescription>
      <StyledDescriptionLogo>
        <Image
          src={`http://52.79.72.35:4000/${image}`}
          width={100}
          height={100}
          alt={"logo"}
        />
      </StyledDescriptionLogo>
      <StyledDescriptionTitle>{titleKr}</StyledDescriptionTitle>
      <StyledDescriptionSubTitle>{titleEng}</StyledDescriptionSubTitle>
      <StyledDescriptionDesc>{desc}</StyledDescriptionDesc>
    </StyledDescription>
  );
};
export default Description;
