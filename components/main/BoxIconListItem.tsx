import styled from "styled-components";

const StyledBoxIcon = styled.div<{ src: any | null }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid 2.4px #21283f;
  background-color: #2d344b;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:999;
  background-image: url(${(props) => props.src});
  background-size: 28px;
  background-repeat: no-repeat;
  background-position: center;
`;
const StyledBoxNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid 2.4px #21283f;
  background-color: #2d344b;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:999;
`;
const StyledBoxText = styled.span`
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.25px;
  text-align: center;
  display: flex;
  align-items: center;
  margin-bottom: 1px;
  color: #bcc2d6;
`;

type Props = {
  type: string,
  item: any
};

const BoxIconListItem = ({ type, item }: Props) => {
  return type == "icon" ? (
    <StyledBoxIcon src={`https://dadari-api.com${item.defaultLogoPath}`} />
  ) : (
    <StyledBoxNumber>
      <StyledBoxText>+{item}</StyledBoxText>
    </StyledBoxNumber>
  );
};

export default BoxIconListItem;
