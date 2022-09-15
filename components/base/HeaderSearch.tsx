import { IconArrowL } from "components/icons";
import styled from "styled-components";
import { MouseEvent } from "react";

const StyledHeaderSearch = styled.header`
  background-color: #111320;
  height: 60px;
  padding: 9px 20px;
  display: flex;
  div {
    padding: 5px 0;
    display: flex;
    align-items: center;
  }
`;
const StyledHeaderSearchBox = styled.input`
  outline: none;
  border: 0;
  padding-left: 11px;
  margin-left: 11px;
  margin-right: 4px;
  flex-grow: 1;
  border-radius: 6px;
  background-color: #2d344b;
  height: 44px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  color: #fff;
`;
const HeaderSearch = ({
  onChangeSearchText,
  moveBack,
}: {
  onChangeSearchText: any
  moveBack: (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <StyledHeaderSearch>
      <div onClick={moveBack}>
        <IconArrowL iWidth={32} iHeight={32} />
      </div>
      <StyledHeaderSearchBox type={"text"} onKeyUp={onChangeSearchText} />
    </StyledHeaderSearch>
  );
};
export default HeaderSearch;
