import styled from "styled-components";
import ServiceInfoItem from "./ServiceInfoItem";

const StyledServiceInfo = styled.div`
    display:flex;
`
const ServiceInfo = () => {
    return <StyledServiceInfo>
        <ServiceInfoItem />
        <ServiceInfoItem />
    </StyledServiceInfo>
}
export default ServiceInfo;