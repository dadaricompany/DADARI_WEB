import { IconArrowL, IconSearch } from "components/icons";
import styled from "styled-components";
import { MouseEvent } from "react";

const StyledHeaderList = styled.header`
  background-color: #111320;
  height: 60px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`;

const HeaderList = ({
  moveBack,
  moveSearch
}: {
  moveBack: (e: MouseEvent<HTMLElement>) => void;
  moveSearch: (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <StyledHeaderList>
      <div onClick={moveBack}>
        <IconArrowL iWidth={32} iHeight={32} />
      </div>
      <div onClick={moveSearch}>
        <IconSearch iWidth={32} iHeight={32} />
      </div>
    </StyledHeaderList>
  );
};
export default HeaderList;
