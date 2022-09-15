import SearchItemContainer from "containers/search/SearchItemContainer";
import { Fragment } from "react";
import styled from "styled-components";

const StyledSearchSectionItem = styled.div`
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

const SearchSectionItem = ({ item }: any) => {
  console.log(item)
  return (
    <StyledSearchSectionItem>
      <StyledSectionTitle>
        <p>{item && item.nameKr}</p>
      </StyledSectionTitle>
      {item.subscriptionServices && item.subscriptionServices.map((v: any, i: number) => {
        return <Fragment key={i}>
          <SearchItemContainer item={v} />
        </Fragment>
      })}
    </StyledSearchSectionItem>
  );
};
export default SearchSectionItem;
