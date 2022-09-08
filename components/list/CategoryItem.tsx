import styled from "styled-components";
import { MouseEvent } from "react";
const StyledCategoryItem = styled.div<{ selected: boolean }>`
  width: 70px;
  height: 112px;
  padding: 8px;
  border-radius: 35px;
  background-color: #2d344b;
  ${(props) => {
    return props.selected && 'background-image: linear-gradient(135deg, #ac66ff, #7435ff); box-shadow: 0 10px 20px 0 rgba(126, 37, 255, 0.6), inset 1px 1px 3px 0 rgba(248, 213, 255, 0.2);'
  }}
  
`;
const StyledCategoryIcon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 52px;
  border-radius: 50%;
  background: #fff;
`;
const StyledCategoryTitle = styled.div<{ selected: boolean }>`
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 !important;
  span {
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: -0.25px;
    text-align: center;
    color: #afb9da;
    ${(props) => {
    return props.selected && 'color:#fff !important; font-weight:500 !important; '
  }}
  }
`;
const CategoryItem = ({ id, item, moveList }: { id: any, item: any, moveList: (item: any) => (e: MouseEvent<HTMLElement>) => void; }) => {
  return (
    <StyledCategoryItem onClick={moveList(item.id)} selected={item.id == id}>
      <StyledCategoryIcon>
        <img src={`http://52.79.72.35:4000/${item.bigLogoPath}`}
          width={30}
          height={30} />
      </StyledCategoryIcon>
      <StyledCategoryTitle selected={item.id == id}>
        <span>{item.nameKr}</span>
      </StyledCategoryTitle>
    </StyledCategoryItem >
  );
};
export default CategoryItem;
