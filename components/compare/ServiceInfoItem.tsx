import Image from "next/image";
import IconX32 from "components/icons/IconX32";
import styled from "styled-components";
import MembershipChart from "./MembershipChart";
import ServiceInfoDetailBtn from "./ServiceInfoDetailBtn";
import { MouseEvent } from "react";
import MembershipChart2 from "./MembershipChart2";
const StyledServiceInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
const StyledServiceInfoItemLogo = styled.div`
  margin-top: 40px;
  width: 140px;
  height: 140px;
  position:relative;
  
`;
const StyledDeleteItemLogo = styled.div`
  position: absolute;
  right: 0;
  z-index:9999;
  top: -10px;
`;
const StyledServiceInfoTitle = styled.p`
  margin: -20px 0 0 0;
  font-size: 19px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: -0.5px;
  color: #fff;
  z-index:999;
`;

const StyledServiceInfoEngTitle = styled.p`
  margin: 8px 0 34px 0;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.25px;
  color: #fff;
`;
const ServiceInfoItem = ({
  item,
  index,
  changeMemberShip,
  removeCompare
}: {
  item: any;
  index: number;
  changeMemberShip: (index: number) => (e: MouseEvent<HTMLElement>) => void;
  removeCompare: (id: any) => void;
}) => {
  return item && (
    <StyledServiceInfoItem>
      <StyledServiceInfoItemLogo>
        <StyledDeleteItemLogo  onClick={() => removeCompare(item.id)}>
          <IconX32 />
        </StyledDeleteItemLogo>
        <Image
          src={`https://dadari-api.com${item.detailLogoPath}`}
          width={140}
          height={140}
          alt={"logo"}
        />
      </StyledServiceInfoItemLogo>
      <StyledServiceInfoTitle>{item.nameKr}</StyledServiceInfoTitle>
      <StyledServiceInfoEngTitle>{item.nameEng}</StyledServiceInfoEngTitle>
      {index == 0 ? (
        <MembershipChart
          item={item.memberships}
          id={item.id}
          changeMemberShip={changeMemberShip(index)}
        />
      ) : (
        <MembershipChart2
          item={item.memberships}
          id={item.id}
          changeMemberShip={changeMemberShip(index)}
        />
      )}
      <ServiceInfoDetailBtn id={item.id} />
    </StyledServiceInfoItem>
  );
};
export default ServiceInfoItem;
