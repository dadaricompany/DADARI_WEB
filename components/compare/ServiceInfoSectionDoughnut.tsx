import styled from "styled-components";
import ServiceInfoSectionTitle from "./ServiceInfoSectionTitle";

const StyledServiceInfoSectionDoughnut = styled.div`
    margin-top:22px;
    width:100%;
    padding:0 20px;
`
const StyledServiceInfoSectionDoughnutItem = styled.div`
    padding:21px 0 33px;
    background-color: #2d344b;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    display: flex;
`
const StyledServiceInfoSectionDoughnutItemData = styled.div`
    flex-grow:1;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: -0.5px;
    text-align: center;
    color: #fff;
`
const StyledDivider = styled.div`
    width:1px;
    opacity: 0.33;
    background-color: #68708d;
`
const ServiceInfoSectionDoughnut = ({ title }: { title: string }) => {
    return <StyledServiceInfoSectionDoughnut>
        <ServiceInfoSectionTitle title={title} />
        <StyledServiceInfoSectionDoughnutItem>
            <StyledServiceInfoSectionDoughnutItemData>
                asd
            </StyledServiceInfoSectionDoughnutItemData>
            <StyledDivider />
            <StyledServiceInfoSectionDoughnutItemData>
                asd
            </StyledServiceInfoSectionDoughnutItemData>
        </StyledServiceInfoSectionDoughnutItem>
    </StyledServiceInfoSectionDoughnut>
}
export default ServiceInfoSectionDoughnut;