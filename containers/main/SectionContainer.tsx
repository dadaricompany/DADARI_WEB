import { Catchphrase, SubTitle } from "components/main";
import { BoxListContainer, BoxMainContainer } from ".";

const SectionContainer = ({ item }: { item: any }) => {
  return (
    <>
      <Catchphrase />
      <SubTitle sub={"지금 바로 비교해보세요"} />
      <BoxMainContainer item={item[0]}/>
      <SubTitle sub={"이런 구독도 있어요"} />
      <BoxListContainer item={item}/>
    </>
  );
};
export default SectionContainer;
