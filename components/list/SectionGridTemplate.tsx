import styled from "styled-components";
import SectionItem from "./SectionItem";

const StyledCategorySection = styled.div`
  background: #111320;
  flex-grow: 1;
  padding: 24px 20px 54px 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledCategoryGridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px 12px;
`;
const SectionGridTemplate = ({ children }: any) => {
  return (
    <StyledCategorySection>
      <StyledCategoryGridSection>{children}</StyledCategoryGridSection>
    </StyledCategorySection>
  );
};
export default SectionGridTemplate;
