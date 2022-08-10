import Meta from "components/common/Meta";
import BaseTemplate from "components/template/ItemTemplate";
import ItemContainer from "containers/item/ItemContainer";
import type { NextPage } from "next";

const Item: NextPage = () => {
  return (
    <>
      <Meta title={"다다리 - 아이템"} />
      <BaseTemplate>
        <ItemContainer />
      </BaseTemplate>
    </>
  );
};

export default Item;
