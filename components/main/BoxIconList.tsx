import styled from "styled-components";

import BoxIconListItem from "./BoxIconListItem";

const StyledBoxIconList = styled.div`
  display: flex;
  div + div {
    margin-left: -13px !important;
  }
`;

type Props = {
  item: any
};

const BoxIconList: React.FC<Props> = ({ item }) => {
  return (
    <StyledBoxIconList>
      {
        item.map((value: any, index: number) => <BoxIconListItem type={index < 3 ? "icon" : "plus"} item={index < 3 ? value : item.length} key={index} />)
      }
    </StyledBoxIconList>
  );
};
export default BoxIconList;
