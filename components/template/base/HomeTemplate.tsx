import styled from "styled-components";
import { Footer } from "components/base";
import { HeaderContainer, SearchIconModuleContainer } from "containers/base";
import React from "react";

const StyledMainTempalte = styled.div`
  background: #111320;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledSection = styled.main<{ url: string, backup: string }>`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  background: #111320 url(${(props) => props.url}) no-repeat right top /
    contain;
  
  ::before{
    background: #111320 url(${(props) => props.backup}) no-repeat right top /
    contain;
  }
`;
interface Props {
  baseURL: string | undefined
  children: JSX.Element | JSX.Element[]
}
const HomeTemplate = ({ baseURL, children }: Props) => {
  return (
    <StyledMainTempalte>
      <HeaderContainer>
        <SearchIconModuleContainer />
      </HeaderContainer>
      <StyledSection url={`${baseURL}assets/image/bg_main.webp`} backup={`${baseURL}assets/image/bg_main.png`}>{children}</StyledSection>
      <Footer />
    </StyledMainTempalte>
  );
};

export default HomeTemplate;
