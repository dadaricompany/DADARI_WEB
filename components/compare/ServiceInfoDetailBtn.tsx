import styled from "styled-components";

const StyledServiceInfoDetailBtn = styled.div`
  width: 132px;
  height: 42px;
  margin: 32px 0 32px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #68708d;
  span{
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: -0.5px;
    text-align: center;
    color: #bcc2d6;
  }
`
const ServiceInfoDetailBtn = () => {
    return <StyledServiceInfoDetailBtn>
        <span>상세보기</span>       
    </StyledServiceInfoDetailBtn>
}
export default ServiceInfoDetailBtn;
