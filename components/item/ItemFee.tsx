import styled from "styled-components";

const StyledItemFee = styled.div<{ height: number }>`
  background-color: rgba(255, 0, 255, 0);
  height: ${(props) => props.height}px;
`;
const ItemFee = ({ height }: { height: number }) => {
  return <StyledItemFee height={height}></StyledItemFee>;
};
export default ItemFee;
