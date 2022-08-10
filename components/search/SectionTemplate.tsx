import styled from "styled-components";
import SearchItem from "./SearchItem";

const StyledSectionTemplate = styled.div`
  height: 332px;
  display: flex;
  flex-direction: column;
`;
const StyledSectionTitle = styled.div`
  height: 58px;
  padding: 30px 0 0 24px;
  p {
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #fff;
  }
`;

const SectionTemplate = () => {
  return (
    <StyledSectionTemplate>
      <StyledSectionTitle>
        <p>영화/드라마</p>
      </StyledSectionTitle>
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </StyledSectionTemplate>
  );
};
export default SectionTemplate;
