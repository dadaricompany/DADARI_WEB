import { Chart, registerables } from 'chart.js';
import { Fragment, useEffect, useRef, useState } from "react";
import styled from "styled-components";
const StyledItemFeeDoughnut = styled.div`
  height: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  canvas {
    width:80px !important;
    height:80px !important;
  }
  p{
    margin:20px 0 0 0;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: -0.5px;
    text-align: center;
    color: #fff;
  }
`;

const StyledItemFeeDescription = styled.div`
  width:150px;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  margin:13px 0 0 0;
`
const StyledItemFeeDescriptionContent = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  div+div{
    margin-left:4px;
  }
`
const StyledItemFeeDescriptionColor = styled.div<{ color: string }>`
  width: 10px !important;
  height: 10px;
  border-radius: 3px;
  background-color: ${(props) => props.color};
`
const StyledItemFeeDescriptionText = styled.div`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.25px;
  color: #9194a9;
  width:fit-content !important;
`
//TODO : 컴포넌트 디자인 과 기능 분리해야됨
const ItemFeeDoughnut = ({ value }: any) => {

  const [doughnutData, setDoughnutData] = useState<any>(null);

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  useEffect(() => {
    if (!value) return;
    value['color'] = [];
    for (let i = 0, len = value.data.length; i < len; i++) {
      value['color'].push(getRandomColor());
    }
    console.log(value)
    setDoughnutData(value);
  }, [value])

  const canvasRef = useRef(null);

  useEffect(() => {
    if (!doughnutData) return;
    const canvas = document.getElementById('doughnutChart') as HTMLCanvasElement | null;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    Chart.register(...registerables);
    const doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: doughnutData.data,
          backgroundColor: doughnutData.color,
          borderColor: doughnutData.color
        }]
      },
    });
    return () => {
      doughnutChart.destroy();
    }
  }, [doughnutData])

  return doughnutData && <StyledItemFeeDoughnut>
    <canvas id='doughnutChart' width="80" height="80" />
    <p>약 {doughnutData.data.reduce((cur: number, acc: number) => Number(cur) + Number(acc), 0).toLocaleString()} 개</p>
    <StyledItemFeeDescription>
      {doughnutData.data.map((v: any, i: number) => {
        return <Fragment key={i}>
          <StyledItemFeeDescriptionContent >
            <StyledItemFeeDescriptionColor color={doughnutData.color[i]} />
            <StyledItemFeeDescriptionText>{doughnutData.labels[i]} ({Math.floor(Number(v) / doughnutData.data.reduce((cur: number, acc: number) => Number(cur) + Number(acc), 0) * 100)}%)</StyledItemFeeDescriptionText>
          </StyledItemFeeDescriptionContent>
        </Fragment>
      })}
    </StyledItemFeeDescription>
  </StyledItemFeeDoughnut>
};
export default ItemFeeDoughnut;
