import styled from "styled-components";

import MainBoxIconListItem from "./MainBoxIconListItem";

const StyledMainBoxIconList = styled.div`
  display: flex;
  margin-right: 12px;
  div + div {
    margin-left: -15px;
  }
`;

type Props = {
  item: any
};

const MainBoxIconList: React.FC<Props> = ({ item }) => {
  return (
    <StyledMainBoxIconList>
      {item &&
        item.map((value: any, index: number) => <MainBoxIconListItem type={index < 3 ? "icon" : "plus"} item={index < 3 ? value : item.length} key={index} />)}
    </StyledMainBoxIconList>
  );
};
export default MainBoxIconList;
