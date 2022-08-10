import { IconArrowL, IconSearch } from "components/icons";
import styled from "styled-components";
import { MouseEvent } from "react";
const StyledHeaderBase = styled.header`
  background-color: #111320;
  height: 60px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  div {
    display: flex;
    align-items: center;
  }
`;

const HeaderBase = ({
  moveBack,
}: {
  moveBack: (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <StyledHeaderBase>
      <div onClick={moveBack}>
        <IconArrowL iWidth={32} iHeight={32} />
      </div>
    </StyledHeaderBase>
  );
};
export default HeaderBase;
