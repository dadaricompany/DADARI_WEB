import { Catchphrase, SubTitle } from "components/main";
import { BoxListContainer, BoxMainContainer } from ".";

const SectionContainer = ({ main, list }: { main: any; list: any }) => {
  return (
    <>
      <Catchphrase />
      <SubTitle sub={"지금 바로 비교해보세요"} />
      <BoxMainContainer item={main} />
      <SubTitle sub={"이런 구독도 있어요"} />
      <BoxListContainer item={list} />
    </>
  );
};
export default SectionContainer;
