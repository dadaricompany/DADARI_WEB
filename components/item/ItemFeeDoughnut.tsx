import { Chart, registerables } from 'chart.js';
import { useEffect, useRef } from "react";
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

const ItemFeeDoughnut = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = document.getElementById('doughnutChart') as HTMLCanvasElement | null;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    Chart.register(...registerables);
    const doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [
            '#2d344b',
            '#8246fa',
            'rgb(255, 205, 86)'
          ],
          borderColor: [
            '#2d344b',
            '#8246fa',
            'rgb(255, 205, 86)'
          ]
        }]
      },
    });
    return () => {
      doughnutChart.destroy();
    }
  }, [])

  return (
    <StyledItemFeeDoughnut>
      <canvas id='doughnutChart' width="80" height="80" />
      <p>약 70,000 개</p>
      <StyledItemFeeDescription>
        <StyledItemFeeDescriptionContent>
          <StyledItemFeeDescriptionColor color={"#8246fa"} />
          <StyledItemFeeDescriptionText>영화 (10%)</StyledItemFeeDescriptionText>
        </StyledItemFeeDescriptionContent>
        <StyledItemFeeDescriptionContent>
          <StyledItemFeeDescriptionColor color={"rgb(255, 205, 86)"} />
          <StyledItemFeeDescriptionText>애니 (22%)</StyledItemFeeDescriptionText>
        </StyledItemFeeDescriptionContent>
        <StyledItemFeeDescriptionContent>
          <StyledItemFeeDescriptionColor color={"#2d344b"} />
          <StyledItemFeeDescriptionText>기타 (68%)</StyledItemFeeDescriptionText>
        </StyledItemFeeDescriptionContent>
      </StyledItemFeeDescription>
    </StyledItemFeeDoughnut>
  );
};
export default ItemFeeDoughnut;
