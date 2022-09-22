import Meta from "components/base/core/Meta";
import ListTemplate from "components/template/base/ListTemplate";
import CategoryContainer from "containers/list/ListContainer";
import type { NextPage } from "next";

const List: NextPage = () => {
  return (
    <>
      <Meta title={"다다리 - 목록"} />
      <ListTemplate>
        <CategoryContainer />
      </ListTemplate>
    </>
  );
};

export default List;
