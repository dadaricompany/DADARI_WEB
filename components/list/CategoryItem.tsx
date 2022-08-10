import styled from "styled-components";

const StyledCategoryItem = styled.div`
  width: 70px;
  height: 112px;
  padding: 8px;
  border-radius: 35px;
  background-color: #2d344b;
`;
const StyledCategoryIcon = styled.div`
  height: 52px;
  border-radius: 50%;
  background: #fff;
`;
const StyledCategoryTitle = styled.div`
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
  }
`;
const CategoryItem = () => {
  return (
    <StyledCategoryItem>
      <StyledCategoryIcon></StyledCategoryIcon>
      <StyledCategoryTitle>
        <span>음악</span>
      </StyledCategoryTitle>
    </StyledCategoryItem>
  );
};
export default CategoryItem;
