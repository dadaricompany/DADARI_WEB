import styled from "styled-components";
import ServiceInfoT from "./ServiceInfoT";

const StyledServiceInfoDoubleT = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  width: 100%;
  padding: 0 20px;
`;

const ServiceInfoDoubleT = ({ item }: { item: any[] }) => {
  return (
    <StyledServiceInfoDoubleT>
      <ServiceInfoT item={item[0]} />
      <ServiceInfoT item={item[1]} />
    </StyledServiceInfoDoubleT>
  );
};
export default ServiceInfoDoubleT;
