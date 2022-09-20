import Meta from "components/base/core/Meta";
import SearchTemplate from "components/template/base/SearchTemplate";
import SearchContainer from "containers/search/SearchContainer";
import type { NextPage } from "next";

const Search: NextPage = () => {
  return (
    <>
      <Meta title={"다다리 - 검색"} />
      <SearchTemplate >
        <SearchContainer />
      </SearchTemplate>
    </>
  );
};

export default Search;
