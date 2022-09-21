import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChartColor } from "styles/Color";
import ServiceInfoSectionTitle from "./ServiceInfoSectionTitle";
import { Chart, registerables } from "chart.js";
const StyledServiceInfoSectionBar = styled.div`
  margin-top: 22px;
  width: 100%;
  padding: 0 20px;
`;
const StyledServiceInfoSectionBarItem = styled.div`
  height: 187px;
  background-color: #2d344b;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  position: relative;
`;
const StyledServiceInfoSectionBarItemFront = styled.div`
  position:absolute;
  width:100%;
  height:187px;
  display:flex;
`
const StyledDashLine = styled.div`
  border-bottom:1px dashed #68708d;
  width:100%;
  opacity: 0.33;
`
const StyledServiceInfoSectionBarItemBack = styled.div`
    padding:26px 27px 0 27px;
    display:flex;
    flex-direction: column;

    div:first-child{
        margin-top:15px
    }
    div+div{
        margin-top:23px;
    }
`
const StyledServiceInfoSectionBarDiv = styled.div`
    width:50%;
    display:flex;
    flex-direction: column;
    canvas {
        margin-top:24px;
        z-index:999;
        width:100% !important;
        height:90px !important;
    }
`
const StyledServiceInfoSectionMoney = styled.p`
    margin:20px 0 0 0;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: -0.28px;
    text-align: center;
    color: #fff;
`
const ServiceInfoSectionBar = ({ title, items, path }: any) => {
  const [barData1, setBarData1] = useState<any>(null);
  const [barData2, setBarData2] = useState<any>(null);
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!items && !items.length) return;
    setBarData1({
      data: [Math.ceil((Number(items[0]) / (Number(items[0]) + Number(items[1]))) * 100)],
      color: [ChartColor[0]],
    })
    setBarData2({
      data: [Math.ceil((Number(items[1]) / (Number(items[0]) + Number(items[1]))) * 100)],
      color: [ChartColor[1]],
    })
  }, [items]);
  useEffect(() => {
    if (!barData1) return;
    const canvas = document.getElementById(
      "barChart1"
    ) as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    Chart.register(...registerables);
    const barChart1 = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            data: { data: barData1.data },
            backgroundColor: barData1.color,
            borderColor: barData1.color,
            borderRadius: 10,
            maxBarThickness: 33
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: false,
            min: 0,
            max: 100,
          },
          x: {
            display: false
          },
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
    return () => {
      barChart1.destroy();
    };
  }, [barData1])

  useEffect(() => {
    if (!barData2) return;
    const canvas = document.getElementById(
      "barChart2"
    ) as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    Chart.register(...registerables);
    const barChart2 = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            data: { data: barData2.data },
            backgroundColor: barData2.color,
            borderColor: barData2.color,
            borderRadius: 10,
            maxBarThickness: 33
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: false,
            min: 0,
            max: 100,
          },
          x: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
    return () => {
      barChart2.destroy();
    };
  }, [barData2])
  return (
    <StyledServiceInfoSectionBar>
      <ServiceInfoSectionTitle title={title} path={path} />
      <StyledServiceInfoSectionBarItem>
        <StyledServiceInfoSectionBarItemFront>
          <StyledServiceInfoSectionBarDiv>
            <canvas id="barChart1" width="80" height="80" />
            <StyledServiceInfoSectionMoney>
              {String(items[0]).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </StyledServiceInfoSectionMoney>
          </StyledServiceInfoSectionBarDiv>
          <StyledServiceInfoSectionBarDiv>
            <canvas id="barChart2" width="80" height="80" />
            <StyledServiceInfoSectionMoney>
              {String(items[1]).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </StyledServiceInfoSectionMoney>
          </StyledServiceInfoSectionBarDiv>
        </StyledServiceInfoSectionBarItemFront>
        <StyledServiceInfoSectionBarItemBack>
          <StyledDashLine></StyledDashLine>
          <StyledDashLine></StyledDashLine>
          <StyledDashLine></StyledDashLine>
          <StyledDashLine></StyledDashLine>
        </StyledServiceInfoSectionBarItemBack>
      </StyledServiceInfoSectionBarItem>
    </StyledServiceInfoSectionBar>
  );
};
export default ServiceInfoSectionBar;
