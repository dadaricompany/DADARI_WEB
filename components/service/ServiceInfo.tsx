import styled from "styled-components";
import Image from "next/image";

const StyledServiceInfo = styled.div`
  height: 338px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledServiceInfoLogo = styled.div`
  margin-top:40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledServiceInfoTitle = styled.p`
  z-index:999;
  height: 28px;
  margin: -10px 0 0 0;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -1px;
  text-align: center;
  color: #fff;
`;
const StyledServiceInfoSubTitle = styled.p`
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
const StyledServiceInfoDesc = styled.p`
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
const ServiceInfo = ({ titleKr, titleEng, desc, image }: any) => {
  return (
    <StyledServiceInfo>
      <StyledServiceInfoLogo>
        <Image
          src={`http://52.79.72.35:4000/${image}`}
          width={130}
          height={130}
          alt={"logo"}
        />
      </StyledServiceInfoLogo>
      <StyledServiceInfoTitle>{titleKr}</StyledServiceInfoTitle>
      <StyledServiceInfoSubTitle>{titleEng}</StyledServiceInfoSubTitle>
      <StyledServiceInfoDesc>{desc}</StyledServiceInfoDesc>
    </StyledServiceInfo>
  );
};
export default ServiceInfo;
