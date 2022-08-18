import styled from "styled-components";
import { ItemFeeContent, ItemFeeDoughnut } from "./";

const StyledItemFee = styled.div<{ height: number }>`
  background-color: rgba(255, 0, 255, 0);
  height: ${(props) => props.height}px;
`;
const ItemFee = ({ height, type }: { height: number; type: string }) => {
  const ItemFeeType = () => {
    switch (type) {
      case "A":
        return <></>;
      case "B":
        return <></>;
      case "C":
        return <></>;
      case "D":
        return <ItemFeeDoughnut />;
      default:
        return <></>;
    }
  };
  return (
    <StyledItemFee height={height}>
      <ItemFeeType />
    </StyledItemFee>
  );
};
export default ItemFee;
