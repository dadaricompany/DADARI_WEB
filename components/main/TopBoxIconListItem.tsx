import styled from "styled-components";

const StyledTopBoxIcon = styled.div<{ src: any | null }>`
  width: 30px;
  height: 30px;
  margin: 0 5px 0 0;
  border-radius: 50%;
  padding: 1px;
  border: solid 2px #8246fa;
  background-color: #2d344b;
  display: flex;
  justify-content: center;
  z-index: 999;
  background-image: url(${(props) => props.src});
  background-size: 28px;
  background-repeat: no-repeat;
  background-position: center;
`;
const StyledTopBoxCount = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 5px 0 0;
  border-radius: 50%;
  padding: 1px;
  border: solid 2px #8246fa;
  background-color: #2d344b;
  display: flex;
  justify-content: center;
  z-index: 999;
  background-image: url(favicon.png);
  background-size: 300px;
`;
const StyledTopBoxCountText = styled.span`
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.25px;
  text-align: center;
  color: #bcc2d6;
`;

interface Props {
  type: string,
  item: any
}

const TopBoxIconListItem = ({ type, item }: Props) => {
  return type == "icon" ? (
    <StyledTopBoxIcon src={`http://52.79.72.35:4000${item.defaultLogoPath}`} />
  ) : (
    <StyledTopBoxCount>
      <StyledTopBoxCountText>+{item}</StyledTopBoxCountText>
    </StyledTopBoxCount>
  );
};
export default TopBoxIconListItem;
