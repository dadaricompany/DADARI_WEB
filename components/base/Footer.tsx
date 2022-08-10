import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #000;
  height: 87px;
  padding: 24px 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTeamName = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  color: #ecf1fb;
`;

const StyledCopyright = styled.span`
  color: #9194a9;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  font-size: 12px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledTeamName>DADARI</StyledTeamName>
      <StyledCopyright>
        Copyright © 2022 toy 3 All Rights Reserved.
      </StyledCopyright>
    </StyledFooter>
  );
};
export default Footer;
