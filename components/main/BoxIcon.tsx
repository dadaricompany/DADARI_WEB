import styled from "styled-components";

const StyledBoxIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid 2.4px #21283f;
  background-color: #2d344b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBoxText = styled.span`
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.25px;
  text-align: center;
  color: #bcc2d6;
`;

const BoxIcon = ({ type }: { type: string }) => {
  return type == "icon" ? (
    <StyledBoxIcon></StyledBoxIcon>
  ) : (
    <StyledBoxIcon>
      <StyledBoxText>+2</StyledBoxText>
    </StyledBoxIcon>
  );
};
export default BoxIcon;
