import styled from "styled-components";
import BoxIcon from "./BoxIcon";

const StyledBoxIconList = styled.div`
  display: flex;
  div + div {
    margin-left: -13px !important;
  }
`;

const BoxIconList = () => {
  return (
    <StyledBoxIconList>
      <BoxIcon type="icon" />
      <BoxIcon type="icon" />
      <BoxIcon type="icon" />
      <BoxIcon type="plus" />
    </StyledBoxIconList>
  );
};
export default BoxIconList;
