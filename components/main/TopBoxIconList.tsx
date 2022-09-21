import styled from "styled-components";

import TopBoxIconListItem from "./TopBoxIconListItem";

const StyledTopBoxIconList = styled.div`
  display: flex;
  margin-right: 12px;
  div + div {
    margin-left: -15px;
  }
`;

interface Props {
  item: any
};

const TopBoxIconList = ({ item }: Props) => {
  return (
    <StyledTopBoxIconList>
      {
        item.map((value: any, index: number) => <TopBoxIconListItem type={index < 3 ? "icon" : "plus"} item={index < 3 ? value : item.length} key={index} />)
      }
    </StyledTopBoxIconList>
  );
};
export default TopBoxIconList;
