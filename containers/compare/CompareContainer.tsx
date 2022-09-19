import { Footer } from "components/base";
import ServiceInfo from "components/compare/ServiceInfo";
import ServiceInfoBump from "components/compare/ServiceInfoBump";
import ServiceInfoSectionBar from "components/compare/ServiceInfoSectionBar";
import ServiceInfoSectionDoughnut from "components/compare/ServiceInfoSectionDoughnut";
import ServiceInfoSectionText from "components/compare/ServiceInfoSectionText";
import Router from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { compareState } from "store/state";
const CompareConatiner = ({ item }: any) => {
  const [compareItem, setCompareItem] = useState();
  const [selected, setSelected] = useState<any>();
  const [compare, setCompare] = useRecoilState<any>(compareState);
  useEffect(() => {
    if (!item) return;
    setCompareItem(item);
    setSelected([item[0].memberships[0], item[1].memberships[0]]);
  }, [item]);

  const removeCompare = (id: any) => {
    setCompare(compare.filter((v: any) => v.id != id));
    Router.back();
  }
  const changeMemberShip = (index: number) => (e: any) => {
    if (index == 0) {
      setSelected([item[0].memberships[Number(e.currentTarget.control.id.split("toggle")[1])], selected[1]])
    } else {
      setSelected([selected[0], item[1].memberships[Number(e.currentTarget.control.id.split("toggle")[1])]])
    }
  };
  return compareItem ? (
    <>
      <ServiceInfo compare={compareItem} removeCompare={removeCompare} changeMemberShip={changeMemberShip} />
      {selected &&
        selected[0].comparisonValues.map((v: any, i: number) => {
          return (
            <Fragment key={i}>
              {v.comparisonItem.type == "BARCHART" ? (
                <ServiceInfoSectionBar
                  title={selected[0].comparisonValues[i].comparisonItem.name}
                  items={[
                    selected[0].comparisonValues[i].value,
                    selected[1].comparisonValues[i].value,
                  ]}
                  path={selected[0].comparisonValues[i].comparisonItem.imgPath}
                />
              ) : v.comparisonItem.type == "DOUGHNUTCHART" ? (
                <ServiceInfoSectionDoughnut
                  title={selected[0].comparisonValues[i].comparisonItem.name}
                  items={[
                    selected[0].comparisonValues[i].value,
                    selected[1].comparisonValues[i].value,
                  ]}
                  path={selected[0].comparisonValues[i].comparisonItem.imgPath}
                />
              ) : (
                <ServiceInfoSectionText
                  title={selected[0].comparisonValues[i].comparisonItem.name}
                  items={[
                    selected[0].comparisonValues[i].value,
                    selected[1].comparisonValues[i].value,
                  ]}
                  path={selected[0].comparisonValues[i].comparisonItem.imgPath}
                />
              )}
            </Fragment>
          );
        })}
      <ServiceInfoBump />
      <Footer />
    </>
  ) : (
    <></>
  );
};
export default CompareConatiner;
