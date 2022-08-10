import styled from "styled-components";

const StyledDescription = styled.div`
  height: 338px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledDescriptionLogo = styled.div`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 100px;
    height: 100px;
    background: url(../assets/image/ico-netflix.png) no-repeat center top / cover;
  }
`;
const StyledDescriptionTitle = styled.p`
  height: 28px;
  margin: 0;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -1px;
  text-align: center;
  color: #fff;
`;
const StyledDescriptionSubTitle = styled.p`
  margin: 7px 0 27px 0;
  height: 20px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  text-align: center;
  color: #fff;
`;
const StyledDescriptionDesc = styled.p`
  height: 65px;
  overflow: auto;
  margin: 0;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  color: #9194a9;
`;
const Description = () => {
  return (
    <StyledDescription>
      <StyledDescriptionLogo>
        <div></div>
      </StyledDescriptionLogo>
      <StyledDescriptionTitle>넷플릭스</StyledDescriptionTitle>
      <StyledDescriptionSubTitle>Netflix</StyledDescriptionSubTitle>
      <StyledDescriptionDesc>
        넷플릭스는 TV 프로그램과 영화를 인터넷 연결 지원 디바이스에서 광고 없이
        시청할 수 있는 멤버십 기반 스트리밍 서비스입니다.
      </StyledDescriptionDesc>
    </StyledDescription>
  );
};
export default Description;
