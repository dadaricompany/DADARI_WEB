import styled from "styled-components";
import { MouseEvent } from "react";
import { HashtagConvertInterface } from "utils/data/modules/list/ListInterface";

const StyledSubCategoryItem = styled.div`
  border-radius: 25px;
  border: solid 1px #68708d;
  padding: 7px 16px 6px 16px;
  color: #fff;
  word-break: keep-all;
  display: flex;
  align-items: center;

  &.hash-check {
    border: 1px solid #ac66ff;
    span {
      color: #fff;
    }
  }

  span {
    color: #afb9da;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: -0.5px;
    text-align: center;
    &.hash-check {
      color: #fff;
    }
  }
`;

interface Props {
  data: HashtagConvertInterface;
  id: number;
  onClickHashtags: (e: MouseEvent<HTMLElement>) => void;
}

const SubCategoryItem = ({
  data,
  id,
  onClickHashtags,
}: Props) => {
  return (
    <StyledSubCategoryItem
      onClick={onClickHashtags}
      className={data.checked ? "hash-check" : ""}
    >
      <span id={`hashtags_${id}`}>{data.name}</span>
    </StyledSubCategoryItem>
  );
};
export default SubCategoryItem;
