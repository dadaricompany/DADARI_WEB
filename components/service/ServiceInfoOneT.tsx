import styled from "styled-components";
import ServiceInfoSectionTitle from "./ServiceInfoSectionTitle";

const StyledServcieInfoOneT = styled.div`
  margin-top: 22px;
  width: 100%;
  padding: 0 20px;
`;
const StyledSErviceInfoOneTItem = styled.div`
  padding: 27px 12px;
  background-color: #2d344b;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 350;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  text-align: center;
  color: #fff;
`;
const ServiceInfoOneT = ({ item }: any) => {
  return (
    <StyledServcieInfoOneT>
      <ServiceInfoSectionTitle title={item.comparisonItem.name} path={item.comparisonItem.imgPath}/>
      <StyledSErviceInfoOneTItem>{item.value}</StyledSErviceInfoOneTItem>
    </StyledServcieInfoOneT>
  );
};
export default ServiceInfoOneT;
