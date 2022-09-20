import { Fragment, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChartColor } from "styles/Color";
import ServiceInfoSectionTitle from "./ServiceInfoSectionTitle";
import { Chart, registerables } from "chart.js";
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
  align-items: center;
  padding: 0 25px;
  canvas {
    width: 80px !important;
    height: 80px !important;
  }
`;
const StyledDivider = styled.div`
  opacity: 0.33;
  background-color: #68708d;
`;
const StyledDoughnutDsec = styled.p`
  margin: 12px 0 13px;
  font-size: 14px;
  font-weight: 300;
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
  const [doughnutData1, setDoughnutData1] = useState<any>(null);
  const [doughnutData2, setDoughnutData2] = useState<any>(null);
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);


  useEffect(() => {
    if (!items || !items[0] || !items[1]) return;
    let item1 = JSON.parse(items[0]);
    let item2 = JSON.parse(items[1]);

    item1["color"] = [];
    for (let i = 0, len = item1.data.length; i < len; i++) {
      item1["color"].push(ChartColor[i]);
    }
    item2["color"] = [];
    for (let i = 0, len = item2.data.length; i < len; i++) {
      item2["color"].push(ChartColor[i]);
    }
    setDoughnutData1(item1);
    setDoughnutData2(item2);
  }, [items]);

  useEffect(() => {
    if (!doughnutData1) return;
    const canvas = document.getElementById(
      "doughnutChart1"
    ) as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    Chart.register(...registerables);
    const doughnutChart1 = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: doughnutData1.data,
            backgroundColor: doughnutData1.color,
            borderColor: doughnutData1.color,
          },
        ],
      },
    });
    return () => {
      doughnutChart1.destroy();
    };
  }, [doughnutData1]);

  useEffect(() => {
    if (!doughnutData2) return;
    const canvas = document.getElementById(
      "doughnutChart2"
    ) as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    Chart.register(...registerables);
    const doughnutChart2 = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: doughnutData2.data,
            backgroundColor: doughnutData2.color,
            borderColor: doughnutData2.color,
          },
        ],
      },
    });
    return () => {
      doughnutChart2.destroy();
    };
  }, [doughnutData2]);
  return (
    <StyledServiceInfoSectionDoughnut>
      <ServiceInfoSectionTitle title={title} path={path} />
      <StyledServiceInfoSectionDoughnutItem>
        <StyledServiceInfoSectionDoughnutItemData>
          <canvas id="doughnutChart1" width="80" height="80" />
          <StyledDoughnutDsec> 약
            {doughnutData1 && doughnutData1.data
              .reduce(
                (cur: number, acc: number) => Number(cur) + Number(acc),
                0
              )
              .toLocaleString()}
            개</StyledDoughnutDsec>
          {doughnutData1 && doughnutData1.data.map((v: any, i: number) => {
            return (
              <Fragment key={i}>
                <StyledDoughnutContent>
                  <StyledDoughnutContentColor color={doughnutData1.color[i]} />
                  <StyledDoughnutContentText>
                    {doughnutData1.labels[i]} (
                    {Math.floor(
                      (Number(v) /
                        doughnutData1.data.reduce(
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
        </StyledServiceInfoSectionDoughnutItemData>
        <StyledDivider />
        <StyledServiceInfoSectionDoughnutItemData>
          <canvas id="doughnutChart2" width="80" height="80" />
          <StyledDoughnutDsec>약
            {doughnutData2 && doughnutData2.data
              .reduce(
                (cur: number, acc: number) => Number(cur) + Number(acc),
                0
              )
              .toLocaleString()}
            개</StyledDoughnutDsec>
          {doughnutData2 && doughnutData2.data.map((v: any, i: number) => {
            return (
              <Fragment key={i}>
                <StyledDoughnutContent>
                  <StyledDoughnutContentColor color={doughnutData2.color[i]} />
                  <StyledDoughnutContentText>
                    {doughnutData2.labels[i]} (
                    {Math.floor(
                      (Number(v) /
                        doughnutData2.data.reduce(
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
        </StyledServiceInfoSectionDoughnutItemData>
      </StyledServiceInfoSectionDoughnutItem>
    </StyledServiceInfoSectionDoughnut>
  );
};
export default ServiceInfoSectionDoughnut;
