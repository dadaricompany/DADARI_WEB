import styled from "styled-components";
import Image from "next/image";

const StyledServiceInfoSectionTitle = styled.div`
  padding: 15px 0;
  background-color: #21283f;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  justify-content: center;
`;
const StyledServiceInfoSectionTitleGroup = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: -10px;
  span {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #bcc2d6;
    margin-left: 8px;
  }
`;

const ServiceInfoSectionTitle = ({ title, path }: any) => {
  return (
    <StyledServiceInfoSectionTitle>
      <StyledServiceInfoSectionTitleGroup>
        <Image  src={`https://dadari-api.com${path}`} width={30} height={30}></Image>
        <span>{title}</span>
      </StyledServiceInfoSectionTitleGroup>
    </StyledServiceInfoSectionTitle>
  );
};
export default ServiceInfoSectionTitle;
