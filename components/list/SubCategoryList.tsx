import styled from "styled-components";
import SubCategoryItem from "./SubCategoryItem";

const StyledSubCategoryHeight = styled.div`
  height: 58px; ;
  display: flex;
  align-items: center;
  background: #000;
`;

const StyledSubCategoryList = styled.div`
  overflow-x: scroll;
  padding: 13px 20px;
  display: flex;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const StyledScrollSubCategoryList = styled.div`
  display: inline-flex;
  div + div {
    margin-left: 7px;
  }
`;
const SubCategoryList = () => {
  return (
    <StyledSubCategoryHeight>
      <StyledSubCategoryList>
        <StyledScrollSubCategoryList>
          <SubCategoryItem />
          <SubCategoryItem />
          <SubCategoryItem />
          <SubCategoryItem />
          <SubCategoryItem />
          <SubCategoryItem />
          <SubCategoryItem />
        </StyledScrollSubCategoryList>
      </StyledSubCategoryList>
    </StyledSubCategoryHeight>
  );
};
export default SubCategoryList;
