import styled from "styled-components";
//그냥내용용
const StyledItemFeeNumber = styled.div`
  margin-top: 38px;
  display: flex;
  justify-content: center;

  span {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: -0.5px;
    text-align: center;
    color: #fff;
  }
`;

const ItemFeeNumber = ({ item }: any) => {
  return (
    <StyledItemFeeNumber>
      <span>{item}</span>
    </StyledItemFeeNumber>
  );
};
export default ItemFeeNumber;
