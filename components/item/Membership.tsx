import styled from "styled-components";
import MembershipChart from "./MembershipChart";
import { ChangeEvent, MouseEvent } from "react";

const StyeldMemberShip = styled.div`
  height: 202px;
  background-color: rgba(255, 0, 255, 0);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const StyledMemberShipTitle = styled.p`
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

const StyledMembershipDetail = styled.p`
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
const Membership = ({ item, goToURL, url, changeMemberShip }: {
  item: any,
  url: string,
  goToURL: (url: string) => (e: MouseEvent<HTMLElement>) => void;
  changeMemberShip: (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <StyeldMemberShip>
      <StyledMemberShipTitle>멤버십</StyledMemberShipTitle>
      <MembershipChart item={item} changeMemberShip={changeMemberShip} />
      <StyledMembershipDetail onClick={goToURL(url)}>정책 자세히보기</StyledMembershipDetail>
    </StyeldMemberShip>
  );
};
export default Membership;
