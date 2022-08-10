import { IconLogo, IconSearch } from "components/icons";
import styled from "styled-components";
import { MouseEvent } from "react";
const StyledHeaderMain = styled.header`
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

const HeaderMain = ({
  moveHome,
  moveSearch,
}: {
  moveHome: (e: MouseEvent<HTMLElement>) => void;
  moveSearch: (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <StyledHeaderMain>
      <div onClick={moveHome}>
        <IconLogo iWidth={30} iHeight={30} />
      </div>
      <div onClick={moveSearch}>
        <IconSearch iWidth={32} iHeight={32} />
      </div>
    </StyledHeaderMain>
  );
};
export default HeaderMain;
