import styled from "styled-components";

const StyledBoxList = styled.div`
  overflow-x: scroll;
  padding: 0 20px 10px 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const StyledScrollBox = styled.div`
  display: inline-flex;
  div + div {
    margin-left: 10px;
  }
`;

interface Props {
  children: JSX.Element | JSX.Element[]
};

const BoxScrollTemplate = ({ children }: Props) => {
  return (
    <StyledBoxList>
      <StyledScrollBox>{children}</StyledScrollBox>
    </StyledBoxList>
  );
};

export default BoxScrollTemplate;
