import styled from "styled-components";
import ServiceInfoItem from "./ServiceInfoItem";
import { MouseEvent } from "react";
const StyledServiceInfo = styled.div`
  display: flex;
`;
const ServiceInfo = ({
  compare,
  changeMemberShip,
}: {
  compare: any;
  changeMemberShip: (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <StyledServiceInfo>
      <ServiceInfoItem
        item={compare[0]}
        changeMemberShip={changeMemberShip}
        index={0}
      />
      <ServiceInfoItem
        item={compare[1]}
        changeMemberShip={changeMemberShip}
        index={1}
      />
    </StyledServiceInfo>
  );
};
export default ServiceInfo;
