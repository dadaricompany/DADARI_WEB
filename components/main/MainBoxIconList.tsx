import styled from "styled-components";
import MainBox from "./MainBoxIcon";

const StyledMainBoxIconList = styled.div`
  display: flex;
  margin-right: 12px;
  div + div {
    margin-left: -15px;
  }
`;
const MainBoxIconList = () => {
  return (
    <StyledMainBoxIconList>
      <MainBox type="icon" />
      <MainBox type="icon" />
      <MainBox type="icon" />
      <MainBox type="plus" />
    </StyledMainBoxIconList>
  );
};
export default MainBoxIconList;
