import styled from "styled-components";
import Image from "next/image";
import IconSearchPlus from "components/icons/IconSearchPlus";
const StyledSearchItem = styled.div`
  display: flex;
  padding: 14px 24px;
  height: 76px;
  align-items: center;
  justify-content: space-between;
`;
const StyledSearchItemFront = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSearchContent = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;
const StyledSearchTitle = styled.p`
  margin: 3px 0 0 0;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: #fff;
`;
const StyledSearchSub = styled.p`
  margin: 2px 0 6px 0;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.25px;
  text-align: left;
  color: #bcc2d6;

`;
const StyledSearchBtn = styled.div`
  width: 32px;
  height: 32px;
  border: solid 1px #69708d;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchItem = ({ item }: any) => {
  return (
    <StyledSearchItem>
      <StyledSearchItemFront>
        <Image src={`http://52.79.72.35:4000/${item.bigLogoPath}`}
          width={48}
          height={48} loading="lazy" alt="" />
        <StyledSearchContent>
          <StyledSearchTitle>{item.nameKr}</StyledSearchTitle>
          <StyledSearchSub>{item.description.substr(0, 25)}{item.description.length > 24 && ' ..'}</StyledSearchSub>
        </StyledSearchContent>
      </StyledSearchItemFront>
      <StyledSearchBtn>
        <IconSearchPlus iWidth={24} iHeight={24} />
      </StyledSearchBtn>
    </StyledSearchItem>
  );
};
export default SearchItem;
