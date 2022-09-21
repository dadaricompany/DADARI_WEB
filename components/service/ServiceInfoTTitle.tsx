import styled from "styled-components";
import Image from "next/image";

const StyledServiceInfoTTitle = styled.div`
  padding: 12px 0 0;
  background-color: #21283f;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledServiceInfoTTitleText = styled.p`
  margin: 6px 0 8px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  text-align: center;
  color: #bcc2d6;
`;

const ServiceInfoTTitle = ({
  title,
  path,
}: {
  title: string;
  path: string;
}) => {
  return (
    <StyledServiceInfoTTitle>
      <Image src={`https://dadari-api.com${path}`} width={30} height={30}></Image>
      <StyledServiceInfoTTitleText>{title}</StyledServiceInfoTTitleText>
    </StyledServiceInfoTTitle>
  );
};
export default ServiceInfoTTitle;
