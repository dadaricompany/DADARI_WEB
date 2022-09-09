import { selectDetail } from "api/modules/detail";
import Meta from "components/common/Meta";
import BaseTemplate from "components/template/ItemTemplate";
import ItemContainer from "containers/item/ItemContainer";
import type { GetServerSideProps, NextPage } from "next";

const Item: NextPage = ({ data }: any) => {
  return (
    <>
      <Meta title={"다다리 - 아이템"} />
      <BaseTemplate>
        <ItemContainer item={data} />
      </BaseTemplate>
    </>
  );
};

export default Item;

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { id } = props.query;
  const { data } = await selectDetail(id);
  return {
    props: {
      data: data,
    },
  };
};
