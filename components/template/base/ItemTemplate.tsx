import HeaderContainer from "containers/base/header/HeaderContainer"
import { Fragment } from "react";
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

const StyledSectionWrapper = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow:1;
`

const ItemTamplte = ({ children }: any) => {
  return (
    <StyledItemTempalte>
      <HeaderContainer>
        <Fragment></Fragment>
      </HeaderContainer>
      <StyledSection>
        <StyledSectionWrapper>{children}</StyledSectionWrapper>
      </StyledSection>
    </StyledItemTempalte>
  );
};
export default ItemTamplte;
