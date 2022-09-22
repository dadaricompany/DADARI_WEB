import { Fragment, KeyboardEvent, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash-es";
import { selectSearchList } from "api/modules/search";
import SearchSectionItemContainer from "./SearchSectionItemContainer";
import { HeaderContainer, SearchBoxModuleContainer } from "containers/base";

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

const SearchContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState<Array<any> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await selectSearchList("");
      setSearchList(data);
    };
    fetchData();
  }, []);

  const search = useCallback(
    debounce(async (searchText: string) => {
      const { data } = await selectSearchList(searchText);
      setSearchList(data);
    }, 800),
    []
  );

  const onChangeSearchText = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (!e.target) return;
    setSearchText((e.target as HTMLInputElement).value);
    search((e.target as HTMLInputElement).value);
  }, []);

  return (
    <>
      <HeaderContainer>
        <SearchBoxModuleContainer onChangeSearchText={onChangeSearchText} />
      </HeaderContainer>
      <StyledSection>
        {searchList &&
          searchList.map((v: any, i: number) => {
            return (
              <Fragment key={i}>
                <SearchSectionItemContainer item={v} />
                {(searchList?.length > 1 && searchList.length - 1 != i) && <StyledSectionGap />}
              </Fragment>
            );
          })}
      </StyledSection>
    </>
  );
};
export default SearchContainer;
