import styled from "styled-components";
import { Footer } from "components/base";
import { HeaderContainer, SearchIconModuleContainer } from "containers/base";

const StyledMainTempalte = styled.div`
  background: #111320;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledSection = styled.main<{ url: string }>`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  background: #111320 url(${(props) => props.url}) no-repeat right top /
    contain;
`;

const HomeTemplate = ({ children }: any) => {
  return (<StyledMainTempalte>
    <HeaderContainer>
      <SearchIconModuleContainer />
    </HeaderContainer>
    <StyledSection url={`http://localhost:3000/assets/image/bg_main.png`}>{children}</StyledSection>
    <Footer />
  </StyledMainTempalte>
  );
};

export default HomeTemplate;
