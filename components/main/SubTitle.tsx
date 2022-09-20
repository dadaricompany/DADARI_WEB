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

type Props = {
  context: String
};

const SubTitle: React.FC<Props> = ({ context }) => {
  return <StyledSubTitle>{context}</StyledSubTitle>;
};

export default SubTitle;
