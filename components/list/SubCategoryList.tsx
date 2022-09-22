import { MouseEvent } from "react";
import styled from "styled-components";

import { HashtagConvertInterface } from "utils/data/modules/list/ListInterface";

import SubCategoryItem from "./SubCategoryItem";

const StyledSubCategoryHeight = styled.div`
  height: 58px;
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

interface Props {
  data: HashtagConvertInterface[];
  onClickHashtags: (e: MouseEvent<HTMLElement>) => void;
}

const SubCategoryList = ({
  data,
  onClickHashtags,
}: Props) => {
  return (
    <StyledSubCategoryHeight>
      <StyledSubCategoryList>
        <StyledScrollSubCategoryList>
          {data && data.map((v: HashtagConvertInterface, i: number) => <SubCategoryItem
            key={i}
            data={v}
            id={i}
            onClickHashtags={onClickHashtags}
          />)}
        </StyledScrollSubCategoryList>
      </StyledSubCategoryList>
    </StyledSubCategoryHeight>
  );
};
export default SubCategoryList;
