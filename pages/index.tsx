import { selectMainList } from "api/modules/get";
import Meta from "components/common/Meta";
import HomeTemplate from "components/template/HomeTemplate";
import SectionContainer from "containers/main/SectionContainer";
import type { GetServerSideProps, NextPage } from "next";

const Home: NextPage = ({ main }: any) => {
  return (
    <>
      <Meta title={"다다리 - 다다리 나가는 구독 서비스 비교 플랫폼"} />
      <HomeTemplate>
        <SectionContainer />
      </HomeTemplate>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { data } = await selectMainList();
  return {
    props: {
      main: data,
    },
  };
};
