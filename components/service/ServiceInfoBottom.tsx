import styled from "styled-components";
const StyledServiceInfoBottom = styled.div`
  height: 162px;
  background: #000;
  padding: 24px 20px 21px 20px;
  display: flex;
  flex-direction: column;
`;
const StyledServiceInfoBottomTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: #ecf1fb;
`;
const StyledServiceInfoBottomDesc = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.25px;
  color: #9194a9;
`;

const ServiceInfoBottom = () => {
  return (
    <StyledServiceInfoBottom>
      <StyledServiceInfoBottomTitle>toy 3</StyledServiceInfoBottomTitle>
      <StyledServiceInfoBottomDesc>
        Copyright © 2022 toy 3 All Rights Reserved.
      </StyledServiceInfoBottomDesc>
    </StyledServiceInfoBottom>
  );
};
export default ServiceInfoBottom;
