import styled from "styled-components";
import ServiceInfoSectionTitle from "./ServiceInfoSectionTitle";

const StyledServiceInfoSectionText = styled.div`
    margin-top:22px;
    width:100%;
    padding:0 20px;
`
const StyledServiceInfoSectionTextItem = styled.div`
    padding:27px 0;
    background-color: #2d344b;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    display: flex;
`
const StyledServiceInfoSectionTextItemData = styled.div`
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
const ServiceInfoSectionText = ({ title }: { title: string }) => {
    return <StyledServiceInfoSectionText>
        <ServiceInfoSectionTitle title={title} />
        <StyledServiceInfoSectionTextItem>
            <StyledServiceInfoSectionTextItemData>
                asd
            </StyledServiceInfoSectionTextItemData>
            <StyledDivider />
            <StyledServiceInfoSectionTextItemData>
                asd
            </StyledServiceInfoSectionTextItemData>
        </StyledServiceInfoSectionTextItem>
    </StyledServiceInfoSectionText>
}
export default ServiceInfoSectionText;