import { selectMainList } from "api/modules/main";
import Meta from "components/base/core/Meta";
import HomeTemplate from "components/template/base/HomeTemplate";
import SectionContainer from "containers/main/SectionContainer";
import type { GetServerSideProps, NextPage } from "next";

const Home: NextPage = ({ main, list }: any) => {
  return (
    <>
      <Meta title={"다다리 - 다다리 나가는 구독 서비스 비교 플랫폼"} />
      <HomeTemplate>
        <SectionContainer main={main} list={list} />
      </HomeTemplate>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { data } = await selectMainList();

  const list = data.main;
  const main = list && list.length && list.shift();
  return {
    props: {
      main: main,
      list: list,
    },
  };
};
