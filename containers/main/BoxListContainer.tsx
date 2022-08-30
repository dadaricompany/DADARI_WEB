import { BoxListTemplate } from "components/main";
import BoxContainer from "./BoxContainer";

const BoxListContainer = ({item}:{item:any}) => {
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
