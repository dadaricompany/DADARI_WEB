import styled from "styled-components";

const StyledSubTitle = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.53px;
  color: #fff;
  margin: 17px 0 17px 26px;
`;
const SubTitle = ({ sub }: { sub: String }) => {
  return <StyledSubTitle>{sub}</StyledSubTitle>;
};
export default SubTitle;
