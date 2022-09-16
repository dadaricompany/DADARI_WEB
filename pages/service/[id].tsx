import { selectDetail } from "api/modules/detail";
import Meta from "components/common/Meta";
import BaseTemplate from "components/template/ItemTemplate";
import ServiceContainer from "containers/service/ServiceContainer";
import type { GetServerSideProps, NextPage } from "next";

const Item: NextPage = ({ data }: any) => {
  return (
    <>
      <Meta title={`다다리 - ${data.nameKr}에 관한 모든 정보는 다다리`} />
      <BaseTemplate>
        <ServiceContainer item={data} />
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
