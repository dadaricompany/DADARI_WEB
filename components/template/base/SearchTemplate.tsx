import styled from "styled-components";

const StyledSearchTempalte = styled.div`
  background: #111320;
  display: flex;
  flex-direction: column;
  height: 100%;
`;



const SearchTemplate = ({ children }: any) => {
  return (
    <StyledSearchTempalte>
      {children}
    </StyledSearchTempalte>
  );
};
export default SearchTemplate;
