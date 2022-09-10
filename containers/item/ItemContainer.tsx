import {
  Description,
  Divider,
  ItemFee,
  ItemTitle,
  Membership,
} from "components/item";
import { Fragment, useEffect, useState } from "react";
import ItemFooterContainer from "./ItemFooterContainer";

const ItemContainer = ({ item }: any) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (item.length == 0) return;
    setSelected(item.memberships[0].comparisonValues);
  }, [item]);

  return (
    <>
      <Description
        titleKr={item.nameKr}
        titleEng={item.nameEng}
        desc={item.description}
        image={item.bigLogoPath}
      />
      <Divider />
      <Membership item={item.memberships} />
      {selected &&
        selected.map((v: any, i: number) => {
          return v.length == 2 ? (
            <Fragment key={i}>
              <ItemTitle
                title={[v[0].comparisonItem.name, v[1].comparisonItem.name]}
              />
              <ItemFee
                type={v[0].comparisonItem.type}
                item={[v[0].comparisonItem, v[1].comparisonItem]}
                value={v[0]}
              />
            </Fragment>
          ) : (
            <Fragment key={i}>
              <ItemTitle title={[v[0].comparisonItem.name]} />
              <ItemFee
                type={v[0].comparisonItem.type}
                item={[v[0].comparisonItem]}
                value={v[0]}
              />
            </Fragment>
          );
        })}
      <ItemFooterContainer />
    </>
  );
};
export default ItemContainer;
