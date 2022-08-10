import styled from "styled-components";

import { Footer } from "components/base";
import HeaderMainContainer from "containers/base/HeaderMainContainer";

const StyledMainTempalte = styled.div`
  background: #111320;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledSection = styled.main`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  background: #111320 url(assets/image/bg_main.png) no-repeat right top /
    contain;
`;

const HomeTemplate = ({ children }: any) => {
  return (
    <StyledMainTempalte>
      <HeaderMainContainer />
      <StyledSection>{children}</StyledSection>
      <Footer />
    </StyledMainTempalte>
  );
};

export default HomeTemplate;
