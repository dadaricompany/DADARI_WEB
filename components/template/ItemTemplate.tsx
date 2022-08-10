import HeaderBaseContainer from "containers/base/HeaderBaseContainer";
import styled from "styled-components";

const StyledItemTempalte = styled.div`
  background: #111320;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledSection = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemTamplte = ({ children }: any) => {
  return (
    <StyledItemTempalte>
      <HeaderBaseContainer />
      <StyledSection>
        <div>{children}</div>
      </StyledSection>
    </StyledItemTempalte>
  );
};
export default ItemTamplte;
