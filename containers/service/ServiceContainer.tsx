import {
    Description,
    Divider,
    ItemFee,
    ItemTitle,
    Membership,
} from "components/item";
import { Fragment, useEffect, useState } from "react";
//   import ItemFooterContainer from "./ItemFooterContainer";
import Router from "next/router";
import { MouseEvent } from "react";
import ServiceInfo from "components/service/ServiceInfo";
import ServiceInfoDivider from "components/service/ServiceInfoDivider";
import ServiceInfoMemberShip from "components/service/ServiceInfoMemberShip";
import ServiceInfoSectionBar from "components/service/ServiceInfoSectionBar";

const ServiceContainer = ({ item }: any) => {
    const [selected, setSelected] = useState([]);
    const changeMemberShip = (e: any) => {
        setSelected(
            item.memberships[e.currentTarget.control.id.slice(6)].comparisonValues
        );
        console.log(item.memberships[e.currentTarget.control.id.slice(6)].comparisonValues)
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
                image={item.bigLogoPath}
            />
            <ServiceInfoDivider />
            <ServiceInfoMemberShip
                item={item.memberships}
                goToURL={goToURL}
                url={item.policyUrl}
                changeMemberShip={changeMemberShip}
            />
            <ServiceInfoSectionBar title={"월 구독료"}/>
            {/* {selected && selected.length &&
          selected.map((v: any, i: number) => {
            return v.length == 2
              ? v[0] && v[0].comparisonItem && (
                <Fragment key={i}>
                  <ItemTitle
                    title={[v[0].comparisonItem.name, v[1].comparisonItem.name]}
                  />
                  <ItemFee
                    type={v[0].comparisonItem.type}
                    item={[v[0].comparisonItem, v[1].comparisonItem]}
                    value={[v[0], v[1]]}
                  />
                </Fragment>
              )
              : v.length == 1 ? v[0] && v[0].comparisonItem && (
                <Fragment key={i}>
                  <ItemTitle title={[v[0].comparisonItem.name]} />
                  <ItemFee
                    type={v[0].comparisonItem.type}
                    item={[v[0].comparisonItem]}
                    value={v[0]}
                  />
                </Fragment>
              ) : <Fragment key={i}>
                <div style={{ flexGrow: 1 }}></div>
              </Fragment>
          })}
        {
          item && (
            <ItemFooterContainer url={item.mainUrl} goToURL={goToURL} item={item} />
          )
        } */}
        </>
    );
};
export default ServiceContainer;
