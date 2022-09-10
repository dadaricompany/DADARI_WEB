import styled from "styled-components";
//그냥내용용
const StyledItemFeeText = styled.div`
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledItemFeeImg = styled.img``;

const StyledItemContent = styled.p`
  margin: 20px 0 0 0;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  text-align: center;
  color: #fff;
`;
const ItemFeeText = ({ item }: any) => {
  return (
    <StyledItemFeeText>
      <StyledItemFeeImg width={32} height={32}></StyledItemFeeImg>
      <StyledItemContent>
        {item &&
          item.split("\n").map((v: any) => {
            return (
              <span>
                {v}
                <br />
              </span>
            );
          })}
      </StyledItemContent>
    </StyledItemFeeText>
  );
};
export default ItemFeeText;
