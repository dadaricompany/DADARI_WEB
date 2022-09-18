import styled from "styled-components";
import ServiceInfoSectionTitle from "./ServiceInfoSectionTitle";

const StyledServiceInfoSectionDoughnut = styled.div`
  margin-top: 22px;
  width: 100%;
  padding: 0 20px;
`;
const StyledServiceInfoSectionDoughnutItem = styled.div`
  padding: 21px 0 33px;
  background-color: #2d344b;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
`;
const StyledServiceInfoSectionDoughnutItemData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  canvas {
    width: 80px;
    height: 80px;
  }
`;
const StyledDivider = styled.div`
  opacity: 0.33;
  background-color: #68708d;
`;
const StyledDoughnutDsec = styled.p`
  margin: 12px 0 13px;
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
const ServiceInfoSectionDoughnut = ({ title, items, path }: any) => {
  return (
    <StyledServiceInfoSectionDoughnut>
      <ServiceInfoSectionTitle title={title} path={path} />
      <StyledServiceInfoSectionDoughnutItem>
        <StyledServiceInfoSectionDoughnutItemData>
          <canvas id="doughnutChart" width="80" height="80" />
          <StyledDoughnutDsec>약 70,000개</StyledDoughnutDsec>
          <StyledDoughnutContent>
            <StyledDoughnutContentColor color={"#ffffff"} />
            <StyledDoughnutContentText>영화 (22%)</StyledDoughnutContentText>
          </StyledDoughnutContent>
        </StyledServiceInfoSectionDoughnutItemData>
        <StyledDivider />
        <StyledServiceInfoSectionDoughnutItemData>
          <canvas id="doughnutChart2" width="80" height="80" />
          <StyledDoughnutDsec>약 70,000개</StyledDoughnutDsec>
          <StyledDoughnutContent>
            <StyledDoughnutContentColor color={"#ffffff"} />
            <StyledDoughnutContentText>영화 (22%)</StyledDoughnutContentText>
          </StyledDoughnutContent>
        </StyledServiceInfoSectionDoughnutItemData>
      </StyledServiceInfoSectionDoughnutItem>
    </StyledServiceInfoSectionDoughnut>
  );
};
export default ServiceInfoSectionDoughnut;
