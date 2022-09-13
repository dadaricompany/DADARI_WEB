import styled from "styled-components";
import { ItemFeeNumber, ItemFeeText, ItemFeeDoughnut } from "./";

const StyledItemFee = styled.div<{ height: number; len: number }>`
  display: flex;
  background-color: rgba(255, 0, 255, 0);
  height: ${(props) => props.height}px;
  div {
    width: ${(props) => 100 / props.len}%;
  }
`;
const ItemFee = ({
  type,
  item,
  value,
}: {
  type: string;
  item: any;
  value: any;
}) => {
  const ItemFeeType = () => {
    switch (type) {
      case "NUMBER":
        return (
          <StyledItemFee height={107} len={item.length}>
            <ItemFeeNumber item={value.value}></ItemFeeNumber>
          </StyledItemFee>
        );
      case "TEXT":
        return item.length == 1 ? (
          <StyledItemFee height={202} len={item.length}>
            <ItemFeeText item={value.value}></ItemFeeText>
          </StyledItemFee>
        ) : (
          <StyledItemFee height={202} len={item.length}>
            <ItemFeeText item={value.value}></ItemFeeText>
            <ItemFeeText item={value.value}></ItemFeeText>
          </StyledItemFee>
        );
      case "BARCHART":
        return <StyledItemFee height={268} len={item.length}></StyledItemFee>;
      case "DOUGHNUTCHART":
        return (
          <StyledItemFee height={281} len={item.length}>
            <ItemFeeDoughnut />
          </StyledItemFee>
        );
      default:
        return <></>;
    }
  };
  return <ItemFeeType />;
};
export default ItemFee;
