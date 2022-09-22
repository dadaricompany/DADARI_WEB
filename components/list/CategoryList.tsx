import { MouseEvent } from "react";
import styled from "styled-components";

import { CategoryConvertInterface } from "utils/data/modules/list/ListInterface";

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

interface Props {
  id: string,
  data: CategoryConvertInterface[],
  onClickCategory: (item: any) => (e: MouseEvent<HTMLElement>) => void;
}

const CategoryList = ({
  id,
  data,
  onClickCategory,
}: Props) => {
  return (
    <StyledCategoryHeight>
      <StyledCategoryList>
        <StyledScrollCategoryList>
          {
            data.map((v: CategoryConvertInterface, i: number) => <CategoryItem key={i} data={v} id={id} onClickCategory={onClickCategory} />)
          }
        </StyledScrollCategoryList>
      </StyledCategoryList>
    </StyledCategoryHeight>
  );
};

export default CategoryList;
