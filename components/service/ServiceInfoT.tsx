import styled from "styled-components";
import ServiceInfoTTitle from "./ServiceInfoTTitle";

const StyledServiceInfoT = styled.div``;

const StyledServiceTItem = styled.div`
  padding: 27px 12px;
  background-color: #2d344b;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ServiceInfoT = ({ title }: any) => {
  return (
    <StyledServiceInfoT>
      <ServiceInfoTTitle title={title} />
      <StyledServiceTItem></StyledServiceTItem>
    </StyledServiceInfoT>
  );
};
export default ServiceInfoT;
