import styled from "styled-components";

const StyledSearchItem = styled.div`
  display: flex;
  padding: 14px 24px;
  height: 76px;
  align-items: center;
  justify-content: space-between;
`;
const StyledSearchItemFront = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSearchIcon = styled.div`
  background: url(../../assets/image/netflix-mini.png) no-repeat center top /
    cover;
  height: 48px;
  width: 48px;
`;
const StyledSearchContent = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;
const StyledSearchTitle = styled.p`
  margin: 3px 0 0 0;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: #fff;
`;
const StyledSearchSub = styled.p`
  margin: 2px 0 6px 0;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.25px;
  text-align: center;
  color: #bcc2d6;
`;
const StyledSearchBtn = styled.div`
  width: 32px;
  height: 32px;
  border: solid 1px #69708d;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchItem = () => {
  return (
    <StyledSearchItem>
      <StyledSearchItemFront>
        <StyledSearchIcon />
        <StyledSearchContent>
          <StyledSearchTitle>서비스명</StyledSearchTitle>
          <StyledSearchSub>간단설명 한 줄 들어가는 곳</StyledSearchSub>
        </StyledSearchContent>
      </StyledSearchItemFront>
      <StyledSearchBtn />
    </StyledSearchItem>
  );
};
export default SearchItem;
