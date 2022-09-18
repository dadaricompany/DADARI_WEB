import { Footer } from "components/base";
import ServiceInfo from "components/compare/ServiceInfo";
import ServiceInfoBump from "components/compare/ServiceInfoBump";
import ServiceInfoSectionBar from "components/compare/ServiceInfoSectionBar";
import ServiceInfoSectionDoughnut from "components/compare/ServiceInfoSectionDoughnut";
import ServiceInfoSectionText from "components/compare/ServiceInfoSectionText";
import { Fragment, useEffect, useState } from "react";

const CompareConatiner = ({ item }: any) => {
  const [compare, setCompare] = useState();
  const [selected, setSelected] = useState<any>();

  useEffect(() => {
    if (!item) return;
    setCompare(item);
    setSelected([item[0].memberships[0], item[1].memberships[0]]);
  }, [item]);

  const changeMemberShip = () => {};
  return compare ? (
    <>
      <ServiceInfo compare={compare} changeMemberShip={changeMemberShip} />
      {selected &&
        selected[0].comparisonValues.map((v: any, i: number) => {
          console.log(selected[1].comparisonValues[i].value);
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
      {/* <ServiceInfoSectionBar title={"월 구독료"} />
      <ServiceInfoSectionText title={"제공 서비스"} />
      <ServiceInfoSectionText title={"동시 접속 가능 인원"} />
      <ServiceInfoSectionText title={"결제단위"} />
      <ServiceInfoSectionText title={"이용범위"} />
      <ServiceInfoSectionText title={"무료기간"} />
      <ServiceInfoSectionText title={"부가기능 및 기타 강점"} />
      <ServiceInfoSectionDoughnut title={"컨텐츠 수"} /> */}
      <ServiceInfoBump />
      <Footer />
    </>
  ) : (
    <></>
  );
};
export default CompareConatiner;
