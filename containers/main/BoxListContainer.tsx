import { BoxListTemplate } from "components/main";
import { Fragment } from "react";
import BoxContainer from "./BoxContainer";

const BoxListContainer = ({ item }: { item: any }) => {
  return (
    <BoxListTemplate>
      {item && item.length ? (
        item.map((value: any, index: number) => {
          return (
            <Fragment key={index}>
              <BoxContainer item={value} />
            </Fragment>
          );
        })
      ) : (
        <BoxContainer item={item} />
      )}
    </BoxListTemplate>
  );
};
export default BoxListContainer;
