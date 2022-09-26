import IconNoData from "components/icons/IconNoData";
import styled from "styled-components";

const StyledNoData = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const StyledIconBox = styled.div`
    padding-top:110px;
`
const StyledP = styled.p`
    margin:20px 0;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: -0.5px;
    text-align: center;
    color: #ecf1fb;
`
const NoData = () => {
    return <StyledNoData>
        <StyledIconBox>
            <IconNoData />
        </StyledIconBox>
        <StyledP>검색 결과가 없습니다.</StyledP>
    </StyledNoData>
}
export default NoData;