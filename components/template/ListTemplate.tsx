import HeaderListContainer from "containers/base/HeaderListContainer";
import styled from "styled-components";

const StyledListTempalte = styled.div`
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

const ListTemplate = ({ children }: any) => {
  return (
    <StyledListTempalte>
      <HeaderListContainer />
      <StyledSection>{children}</StyledSection>
    </StyledListTempalte>
  );
};
export default ListTemplate;
