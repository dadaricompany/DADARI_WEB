import { Fragment, useEffect, useState } from "react";
import Router from "next/router";
import { MouseEvent } from "react";
import ServiceInfo from "components/service/ServiceInfo";
import ServiceInfoDivider from "components/service/ServiceInfoDivider";
import ServiceInfoMemberShip from "components/service/ServiceInfoMemberShip";
import ServiceInfoSectionBar from "components/service/ServiceInfoSectionBar";
import ServiceInfoDoubleT from "components/service/ServiceInfoDoubleT";
import ServiceInfoSectionDoughnut from "components/service/ServiceInfoSectionDoughnut";
import ServiceInfoBump from "components/service/ServiceInfoBump";
import ServiceInfoBottom from "components/service/ServiceInfoBottom";
import ServiceInfoOneT from "components/service/ServiceInfoOneT";
import ServiceFooterContainer from "./ServiceFooterContainer";

const ServiceContainer = ({ item }: any) => {
  const [selected, setSelected] = useState([]);
  const changeMemberShip = (e: any) => {
    setSelected(
      item.memberships[e.currentTarget.control.id.slice(6)].comparisonValues
    );
  };

  const goToURL = (url: string) => (e: MouseEvent<HTMLElement>) => {
    Router.push(url);
  };

  useEffect(() => {
    if (
      item.length == 0 ||
      !item.memberships[0] ||
      !item.memberships[0].comparisonValues
    )
      return;
    setSelected(item.memberships[0].comparisonValues);
  }, [item]);

  return (
    <>
      <ServiceInfo
        titleKr={item.nameKr}
        titleEng={item.nameEng}
        desc={item.description}
        image={item.detailLogoPath}
      />
      <ServiceInfoDivider />
      <ServiceInfoMemberShip
        item={item.memberships}
        goToURL={goToURL}
        url={item.policyUrl}
        changeMemberShip={changeMemberShip}
      />
      {selected &&
        selected.length &&
        selected.map((v: any, i: number) => {
          return v.length == 2 ? (
            <Fragment key={i}>
              <ServiceInfoDoubleT item={v} />
            </Fragment>
          ) : (
            <Fragment key={i}>
              {v[0].comparisonItem.type === "BARCHART" ? (
                <ServiceInfoSectionBar item={v[0]} />
              ) : v[0].comparisonItem.type === "DOUGHNUTCHART" ? (
                <ServiceInfoSectionDoughnut item={v[0]} />
              ) : (
                <ServiceInfoOneT item={v[0]} />
              )}
            </Fragment>
          );
        })}
      <ServiceInfoBump />
      <ServiceInfoBottom />
      <ServiceFooterContainer
        url={item.mainUrl}
        goToURL={goToURL}
        item={item}
      />
    </>
  );
};
export default ServiceContainer;
