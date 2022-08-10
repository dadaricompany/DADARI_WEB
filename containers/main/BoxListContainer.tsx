import { BoxListTemplate } from "components/main";
import BoxContainer from "./BoxContainer";

const BoxListContainer = () => {
  return (
    <BoxListTemplate>
      <BoxContainer />
      <BoxContainer />
      <BoxContainer />
      <BoxContainer />
      <BoxContainer />
    </BoxListTemplate>
  );
};
export default BoxListContainer;
