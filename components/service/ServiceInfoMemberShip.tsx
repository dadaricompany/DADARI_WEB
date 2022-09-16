import styled from "styled-components";
import ServiceInfoMemberShipSlider from "./ServiceInfoMemberShipSlider";
import { MouseEvent } from "react";

const StyeldServiceInfoMemberShip = styled.div`
  height: 190px;
  background-color: rgba(255, 0, 255, 0);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const StyeldServiceInfoMemberShipTitle = styled.p`
  margin: 34px 0 20px 0;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  text-align: center;
  color: #fff;
`;

const StyeldServiceInfoMemberShipDetail = styled.p`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.25px;
  color: #9194a9;
  margin: 22px 0 0 0;
  text-align: center;
  text-decoration: underline;
`;
const ServiceInfoMemberShip = ({ item, goToURL, url, changeMemberShip }: {
    item: any,
    url: string,
    goToURL: (url: string) => (e: MouseEvent<HTMLElement>) => void;
    changeMemberShip: (e: MouseEvent<HTMLElement>) => void;
}) => {
    return (
        <StyeldServiceInfoMemberShip>
            <StyeldServiceInfoMemberShipTitle>멤버십</StyeldServiceInfoMemberShipTitle>
            <ServiceInfoMemberShipSlider item={item} changeMemberShip={changeMemberShip} />
            <StyeldServiceInfoMemberShipDetail onClick={goToURL(url)}>정책 자세히보기</StyeldServiceInfoMemberShipDetail>
        </StyeldServiceInfoMemberShip>
    );
};
export default ServiceInfoMemberShip;
