import { Fragment } from "react";
import styled from "styled-components";
import SubCategoryItem from "./SubCategoryItem";
import { MouseEvent } from "react";

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
const SubCategoryList = ({
  item,
  onClickHashtags,
}: {
  item: any;
  onClickHashtags: (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <StyledSubCategoryHeight>
      <StyledSubCategoryList>
        <StyledScrollSubCategoryList>
          {item &&
            item.length &&
            item.map((v: any, i: number) => {
              return (
                <Fragment key={i}>
                  <SubCategoryItem
                    item={v}
                    id={i}
                    onClickHashtags={onClickHashtags}
                  />
                </Fragment>
              );
            })}
        </StyledScrollSubCategoryList>
      </StyledSubCategoryList>
    </StyledSubCategoryHeight>
  );
};
export default SubCategoryList;
