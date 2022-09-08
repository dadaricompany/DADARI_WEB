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

const BoxIcon = ({ type, item }: { type: string; item: any }) => {
  return type == "icon" ? (
    <StyledBoxIcon>
      <img
        src={`http://52.79.72.35:4000/${item.smallLogoPath}`}
        width="18"
        height="18"
      />
    </StyledBoxIcon>
  ) : (
    <StyledBoxIcon>
      <StyledBoxText>+{item}</StyledBoxText>
    </StyledBoxIcon>
  );
};
export default BoxIcon;
