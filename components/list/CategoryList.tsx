import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const StyledCategoryHeight = styled.div`
  height: 152px;
  display: flex;
  align-items: center;
`;

const StyledCategoryList = styled.div`
  overflow-x: scroll;
  padding: 12px 20px 28px 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const StyledScrollCategoryList = styled.div`
  display: inline-flex;
  div + div {
    margin-left: 8px;
  }
`;
const CategoryList = () => {
  return (
    <StyledCategoryHeight>
      <StyledCategoryList>
        <StyledScrollCategoryList>
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </StyledScrollCategoryList>
      </StyledCategoryList>
    </StyledCategoryHeight>
  );
};

export default CategoryList;
