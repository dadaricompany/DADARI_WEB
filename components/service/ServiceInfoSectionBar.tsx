import styled from "styled-components";
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
`
const ServiceInfoSectionBar = ({ item }: any) => {
    return <StyledServiceInfoSectionBar>
        <ServiceInfoSectionTitle title={item.comparisonItem.name} path={item.comparisonItem.imgPath}/>
        <StyledServiceInfoSectionBarItem></StyledServiceInfoSectionBarItem>
    </StyledServiceInfoSectionBar>
}
export default ServiceInfoSectionBar;