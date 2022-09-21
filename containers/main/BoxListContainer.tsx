import { BoxScrollTemplate } from "components/main";
import { MainConvertInterface } from "utils/data/modules/main/MainInterface";
import BoxContainer from "./BoxContainer";

interface Props {
  data: MainConvertInterface[]
};

const BoxListContainer = ({ data }: Props) => {
  return (
    <BoxScrollTemplate>
      {data.map((value: MainConvertInterface, index: number) => {
        return (
          <BoxContainer data={value} key={index} />
        );
      })}
    </BoxScrollTemplate>
  );
};
export default BoxListContainer;
