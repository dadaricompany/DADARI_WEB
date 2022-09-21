import { Catchphrase, SubTitle } from "components/main";
import { MainResInterface } from "utils/data/modules/main/MainInterface";
import { BoxListContainer, BoxMainContainer } from ".";

const SectionContainer = ({ top, list }: MainResInterface) => {
  return (
    <>
      <Catchphrase />
      <SubTitle context={"지금 바로 비교해보세요"} />
      <BoxMainContainer data={top} />
      <SubTitle context={"이런 구독도 있어요"} />
      <BoxListContainer data={list} />
    </>
  );
};
export default SectionContainer;
