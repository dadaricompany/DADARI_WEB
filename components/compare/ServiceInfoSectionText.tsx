import styled from "styled-components";
import ServiceInfoSectionTitle from "./ServiceInfoSectionTitle";

const StyledServiceInfoSectionText = styled.div`
  margin-top: 22px;
  width: 100%;
  padding: 0 20px;
`;
const StyledServiceInfoSectionTextItem = styled.div`
  padding: 27px 0;
  background-color: #2d344b;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  display: flex;
  align-items: center;
`;
const StyledServiceInfoSectionTextItemData = styled.div`
  padding: 0 12px;
  width: 50%;
  font-size: 14px;
  font-weight: 350;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  text-align: center;
  color: #fff;
`;
const StyledDivider = styled.div`
  width: 1px;
  opacity: 0.33;
  background-color: #68708d;
`;
const ServiceInfoSectionText = ({ title, items, path }: any) => {
  return (
    <StyledServiceInfoSectionText>
      <ServiceInfoSectionTitle title={title} path={path} />
      <StyledServiceInfoSectionTextItem>
        <StyledServiceInfoSectionTextItemData>
          {items[0]}
        </StyledServiceInfoSectionTextItemData>
        <StyledDivider />
        <StyledServiceInfoSectionTextItemData>
          {items[1]}
        </StyledServiceInfoSectionTextItemData>
      </StyledServiceInfoSectionTextItem>
    </StyledServiceInfoSectionText>
  );
};
export default ServiceInfoSectionText;
