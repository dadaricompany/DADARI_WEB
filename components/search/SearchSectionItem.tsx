import SearchItemContainer from "containers/search/SearchItemContainer";
import { Fragment, useEffect } from "react";
import styled from "styled-components";
import SearchItemBtn from "./SearchItemBtn";
import { MouseEvent } from "react";

const StyledSearchSectionItem = styled.div`
  display: flex;
  transition: all 1s;
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

const SearchSectionItem = ({ item, sectionState, onClickMore }: { item: any, sectionState: boolean, onClickMore: (e: MouseEvent<HTMLElement>) => void; }) => {
  return (
    <>
      <StyledSearchSectionItem>
        <StyledSectionTitle>
          <p>{item && item.nameKr}</p>
        </StyledSectionTitle>
        {item.subscriptionServices && item.subscriptionServices.slice(0, 3).map((v: any, i: number) => {
          return <Fragment key={i}>
            <SearchItemContainer item={v} />
          </Fragment>
        })}
        {sectionState && item.subscriptionServices && item.subscriptionServices.slice(3).map((v: any, i: number) => {
          return <Fragment key={i}>
            <SearchItemContainer item={v} />
          </Fragment>
        })}
      </StyledSearchSectionItem>
      {item.subscriptionServices && item.subscriptionServices.length > 3 && <SearchItemBtn sectionState={sectionState} onClickMore={onClickMore} />}
    </>
  );

};
export default SearchSectionItem;
