import styled from "styled-components";
import ServiceInfoItem from "./ServiceInfoItem";
import { MouseEvent } from "react";
const StyledServiceInfo = styled.div`
  display: flex;
`;
const ServiceInfo = ({
  compare,
  changeMemberShip,
  removeCompare,
}: {
  compare: any;
  changeMemberShip: (index: number) => (e: MouseEvent<HTMLElement>) => void;
  removeCompare: (id: any) => void;
}) => {
  return (
    <StyledServiceInfo>
      <ServiceInfoItem
        item={compare[0]}
        changeMemberShip={changeMemberShip}
        removeCompare={removeCompare}
        index={0}
      />
      <ServiceInfoItem
        item={compare[1]}
        changeMemberShip={changeMemberShip}
        removeCompare={removeCompare}
        index={1}
      />
    </StyledServiceInfo>
  );
};
export default ServiceInfo;
