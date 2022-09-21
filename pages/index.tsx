import type { GetServerSideProps, NextPage } from "next";
import { selectMainList } from "api/modules/main";

import Meta from "components/base/core/Meta";
import HomeTemplate from "components/template/base/HomeTemplate";
import SectionContainer from "containers/main/SectionContainer";

import { MainConverter } from "utils/data/DataUtils";
import { MainResInterface } from "utils/data/modules/main/MainInterface";

const Home: NextPage<MainResInterface> = ({ top, list, baseURL }) => {
  return (
    <>
      <Meta title={"다다리 - 다다리 나가는 구독 서비스 비교 플랫폼"} />
      <HomeTemplate baseURL={baseURL}>
        <SectionContainer top={top} list={list} />
      </HomeTemplate>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { data } = await selectMainList();
  const { top, list } = MainConverter(data.main)
  console.log(props.req.headers)
  return {
    props: {
      top: top,
      list: list,
      baseURL: props.req.headers.referer,
    },
  };
};
