import styled from "styled-components";
import { MouseEvent } from "react";
import { IconArrowL } from "components/icons";

const StyledHeader = styled.header`
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
const StyledHeaderLogo = styled.div`
`;

type Props = {
  moveLogo: (e: MouseEvent<HTMLElement>) => void;
  children: JSX.Element | JSX.Element[]
};

const Header: React.FC<Props> = ({ moveLogo, children }) => {
  return <StyledHeader>
    <StyledHeaderLogo onClick={moveLogo}>
      <IconArrowL iWidth={32} iHeight={32} />
    </StyledHeaderLogo>
    {children}
  </StyledHeader>
};

export default Header;