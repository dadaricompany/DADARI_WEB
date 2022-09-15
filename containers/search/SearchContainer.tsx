import SearchSectionItem from "components/search/SearchSectionItem";
import HeaderSearchContainer from "containers/base/HeaderSearchContainer";
import { Fragment, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { debounce } from 'lodash-es'
import { selectSearchList } from "api/modules/search";
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
    const [searchText, setSearchText] = useState('');
    const [searchList, setSearchList] = useState<Array<any> | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await selectSearchList('');
            setSearchList(data);
        }
        fetchData();
    }, [])

    const search = useCallback(debounce(async searchText => {
        const { data } = await selectSearchList(searchText);
        setSearchList(data);
    }, 800), [])

    const onChangeSearchText = (e: any) => {
        setSearchText(e.target.value);
        search(e.target.value);
    }

    return <>
        <HeaderSearchContainer onChangeSearchText={onChangeSearchText} />
        <StyledSection>
            {searchList && searchList?.length && searchList.map((v: any, i: number) => {
                return <Fragment key={i}>
                    <SearchSectionItem item={v} />
                    <StyledSectionGap />
                </Fragment>
            })}
        </StyledSection>
    </>
}
export default SearchContainer;