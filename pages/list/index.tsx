import Meta from "components/common/Meta";
import ListTemplate from "components/template/ListTemplate";
import CategoryContainer from "containers/list/CategoryContainer";
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
