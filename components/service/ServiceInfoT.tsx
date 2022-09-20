import styled from "styled-components";
import ServiceInfoTTitle from "./ServiceInfoTTitle";

const StyledServiceInfoT = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledServiceTItem = styled.div`
  flex-grow: 1;
  padding: 27px 12px;
  background-color: #2d344b;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  text-align: center;
  color: #fff;
`;
const ServiceInfoT = ({ item }: any) => {
  return (
    <StyledServiceInfoT>
      <ServiceInfoTTitle title={item.comparisonItem.name} path={item.comparisonItem.imgPath}/>
      <StyledServiceTItem>{item.value}</StyledServiceTItem>
    </StyledServiceInfoT>
  );
};
export default ServiceInfoT;
