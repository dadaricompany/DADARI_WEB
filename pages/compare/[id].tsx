import { selectCompare } from "api/modules/compare";
import Meta from "components/base/core/Meta";
import BaseTemplate from "components/template/base/ItemTemplate";
import CompareConatiner from "containers/compare/CompareContainer";
import type { GetServerSideProps, NextPage } from "next";

const Item: NextPage = ({ data }: any) => {
  return (
    <>
      <Meta title={"다다리 - 비교"} />
      <BaseTemplate>
        <CompareConatiner item={data} />
      </BaseTemplate>
    </>
  );
};

export default Item;

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { id } = props.query;
  const [id1, id2] = String(id).split(",");
  const { data } = await selectCompare(id1, id2);
  return {
    props: {
      data: data,
    },
  };
};
