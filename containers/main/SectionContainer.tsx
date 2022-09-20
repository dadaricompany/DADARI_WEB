import { Catchphrase, SubTitle } from "components/main";
import { BoxListContainer, BoxMainContainer } from ".";

const SectionContainer = ({ main, list }: { main: any; list: any }) => {
  return (
    <>
      <Catchphrase />
      <SubTitle context={"지금 바로 비교해보세요"} />
      <BoxMainContainer item={main} />
      <SubTitle context={"이런 구독도 있어요"} />
      <BoxListContainer item={list} />
    </>
  );
};
export default SectionContainer;
