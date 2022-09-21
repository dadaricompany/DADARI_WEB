import { Chart, registerables } from "chart.js";
import { Fragment, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChartColor } from "styles/Color";
import ServiceInfoSectionTitle from "./ServiceInfoSectionTitle";

const StyledServiceInfoSectionDoughnut = styled.div`
  margin-top: 22px;
  width: 100%;
  padding: 0 20px;
  canvas {
    width: 80px !important;
    height: 80px !important;
  }
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
const ServiceInfoSectionDoughnut = ({ item }: any) => {
  const [doughnutData, setDoughnutData] = useState<any>(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!item || !item.value.data.length) return;
    item.value["color"] = [];
    for (let i = 0, len = item.value.data.length; i < len; i++) {
      item.value["color"].push(ChartColor[i]);
    }
    setDoughnutData(item.value);
  }, [item]);

  useEffect(() => {
    if (!doughnutData) return;
    const canvas = document.getElementById(
      "doughnutChart"
    ) as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    Chart.register(...registerables);
    const doughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: doughnutData.data,
            backgroundColor: doughnutData.color,
            borderColor: doughnutData.color,
          },
        ],
      },
    });
    return () => {
      doughnutChart.destroy();
    };
  }, [doughnutData]);
  return (
    doughnutData && (
      <StyledServiceInfoSectionDoughnut>
        <ServiceInfoSectionTitle title={item.comparisonItem.name} path={item.comparisonItem.imgPath}/>
        <StyledServiceInfoSectionDoughnutItem>
          <canvas id="doughnutChart" width="80" height="80" />
          <StyledDoughnutDsec>
            약{" "}
            {doughnutData.data
              .reduce(
                (cur: number, acc: number) => Number(cur) + Number(acc),
                0
              )
              .toLocaleString()}
            개
          </StyledDoughnutDsec>
          {doughnutData.data.map((v: any, i: number) => {
            return (
              <Fragment key={i}>
                <StyledDoughnutContent>
                  <StyledDoughnutContentColor color={doughnutData.color[i]} />
                  <StyledDoughnutContentText>
                    {doughnutData.labels[i]} (
                    {Math.floor(
                      (Number(v) /
                        doughnutData.data.reduce(
                          (cur: number, acc: number) =>
                            Number(cur) + Number(acc),
                          0
                        )) *
                        100
                    )}
                    %)
                  </StyledDoughnutContentText>
                </StyledDoughnutContent>
              </Fragment>
            );
          })}
        </StyledServiceInfoSectionDoughnutItem>
      </StyledServiceInfoSectionDoughnut>
    )
  );
};
export default ServiceInfoSectionDoughnut;
