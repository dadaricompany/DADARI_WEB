import styled from "styled-components";
import ServiceInfoSectionTitle from "./ServiceInfoSectionTitle";

const StyledServiceInfoSectionDoughnut = styled.div`
  margin-top: 22px;
  width: 100%;
  padding: 0 20px;
`;
const StyledServiceInfoSectionDoughnutItem = styled.div`
  background-color: #2d344b;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  padding: 27px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledDoughnutDsec = styled.p`
  margin-top: 12px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  text-align: center;
  color: #fff;
  opacity: 0.9;
`;
const StyledDoughnutContent = styled.div`
  width: 100%;
  padding: 0 95px;
  display: flex;
  align-items: center;
`;
const StyledDoughnutContentColor = styled.div<{ color: string }>`
  width: 10px !important;
  height: 10px;
  border-radius: 3px;
  background-color: ${(props) => props.color};
`;
const StyledDoughnutContentText = styled.span`
  margin-left: 4px;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.25px;
  color: #9194a9;
`;
const ServiceInfoSectionDoughnut = ({ title }: { title: string }) => {
  return (
    <StyledServiceInfoSectionDoughnut>
      <ServiceInfoSectionTitle title={title} />
      <StyledServiceInfoSectionDoughnutItem>
        <canvas id="doughnutChart" width="80" height="80" />
        <StyledDoughnutDsec>약 70,000개</StyledDoughnutDsec>
        <StyledDoughnutContent>
          <StyledDoughnutContentColor color={"#ffffff"} />
          <StyledDoughnutContentText>영화 (22%)</StyledDoughnutContentText>
        </StyledDoughnutContent>
      </StyledServiceInfoSectionDoughnutItem>
    </StyledServiceInfoSectionDoughnut>
  );
};
export default ServiceInfoSectionDoughnut;
