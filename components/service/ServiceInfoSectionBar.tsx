import { Chart, registerables } from "chart.js";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChartColor } from "styles/Color";
import ServiceInfoSectionTitle from "./ServiceInfoSectionTitle";

const StyledServiceInfoSectionBar = styled.div`
    margin-top:22px;
    width:100%;
    padding:0 20px;
`
const StyledServiceInfoSectionBarItem = styled.div`
    height:204px;
    background-color: #2d344b;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    position:relative;
`
const StyledServiceInfoSectionBarItemFront = styled.div`
    position:absolute;
    width:100%;
    height:204px;
    display:flex;
`
const StyledServiceInfoSectionMoney = styled.p`
    margin:20px 0 0 0;
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: -0.28px;
    text-align: center;
    color: #fff;
`
const StyledServiceInfoSectionTitle = styled.p`
    margin:6px 0 0 0;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: -0.5px;
    text-align: center;
    color: #9194a9;
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
const StyledDashLine = styled.div`
     border-bottom:1px dashed #68708d;
        width:100%;
        opacity: 0.33;
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

const ServiceInfoSectionBar = ({ item }: any) => {
    const [barData1, setBarData1] = useState<any>(null);
    const [barData2, setBarData2] = useState<any>(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!item || !item.value.data.length) return;
        item.value["color"] = [];
        item.value["color"].push(ChartColor[0]);
        item.value["color"].push(ChartColor[9]);

        setBarData1({
            data: [Math.ceil((Number(item.value.data[0]) / (Number(item.value.data[0]) + Number(item.value.data[1]))) * 100)],
            color: [item.value.color[0]],
            labels: [item.value.labels[0]]
        });
        setBarData2({
            data: [Math.ceil((Number(item.value.data[1]) / (Number(item.value.data[0]) + Number(item.value.data[1]))) * 100)],
            color: [item.value.color[1]],
            labels: [item.value.labels[1]]
        });
    }, [item]);

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
                        maxBarThickness: 25
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
                        maxBarThickness: 25
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
    return <StyledServiceInfoSectionBar>
        <ServiceInfoSectionTitle title={item.comparisonItem.name} path={item.comparisonItem.imgPath} />
        <StyledServiceInfoSectionBarItem>
            <StyledServiceInfoSectionBarItemFront>
                <StyledServiceInfoSectionBarDiv>
                    <canvas id="barChart1" width="80" height="80" />
                    <StyledServiceInfoSectionMoney>
                        {String(item.value.data[0]).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                    </StyledServiceInfoSectionMoney>
                    <StyledServiceInfoSectionTitle>
                        {item.value.labels[0]}
                    </StyledServiceInfoSectionTitle>
                </StyledServiceInfoSectionBarDiv>
                <StyledServiceInfoSectionBarDiv>
                    <canvas id="barChart2" width="80" height="80" />
                    <StyledServiceInfoSectionMoney>
                        {String(item.value.data[1]).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                    </StyledServiceInfoSectionMoney>
                    <StyledServiceInfoSectionTitle>
                        {item.value.labels[1]}
                    </StyledServiceInfoSectionTitle>
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
}
export default ServiceInfoSectionBar;