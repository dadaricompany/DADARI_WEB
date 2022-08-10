import SectionTemplate from "components/search/SectionTemplate";
import HeaderSearchContainer from "containers/base/HeaderSearchContainer";
import styled from "styled-components";

const StyledSearchTempalte = styled.div`
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
const StyledSectionGap = styled.div`
  height: 14px;
  background: #000;
`;

const SearchTemplate = () => {
  return (
    <StyledSearchTempalte>
      <HeaderSearchContainer />
      <StyledSection>
        <SectionTemplate />
        <StyledSectionGap />
        <SectionTemplate />
        <StyledSectionGap />
        <SectionTemplate />
        <StyledSectionGap />
      </StyledSection>
    </StyledSearchTempalte>
  );
};
export default SearchTemplate;
