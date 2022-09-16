import styled from "styled-components";
import MembershipChart from "./MembershipChart";
import ServiceInfoDetailBtn from "./ServiceInfoDetailBtn";

const StyledServiceInfoItem = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    flex-grow:1;
    
`
const StyledServiceInfoItemLogo = styled.div`
    margin-top:40px;
    width:130px;
    height:130px;
    background: #000;

`

const StyledServiceInfoTitle = styled.p`
    margin:-10px 0 0 0;
    font-size: 19px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: -0.5px;
    color: #fff;
`

const StyledServiceInfoEngTitle = styled.p`
    margin:8px 0 34px 0;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: -0.25px;
    color: #fff;
`
const ServiceInfoItem = () => {
    return <StyledServiceInfoItem>
        <StyledServiceInfoItemLogo>

        </StyledServiceInfoItemLogo>
        <StyledServiceInfoTitle>
            넷플릭스
        </StyledServiceInfoTitle>
        <StyledServiceInfoEngTitle>
            Netflix
        </StyledServiceInfoEngTitle>
        <MembershipChart item={{ data: [] }} changeMemberShip={() => { }} />
        <ServiceInfoDetailBtn />
    </StyledServiceInfoItem>
}
export default ServiceInfoItem;