import { BoxScrollTemplate } from "components/main";
import BoxContainer from "./BoxContainer";

type Props = {
  item: any
};

const BoxListContainer: React.FC<Props> = ({ item }) => {
  return (
    <BoxScrollTemplate>
      {item && item.length ? (
        item.map((value: any, index: number) => {
          return (
            <BoxContainer item={value} key={index} />
          );
        })
      ) : (
        <BoxContainer item={item} />
      )}
    </BoxScrollTemplate>
  );
};
export default BoxListContainer;
