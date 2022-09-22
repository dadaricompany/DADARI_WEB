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

const BoxIconList = ({ item }: Props) => {
  return (
    <StyledBoxIconList>
      {
        item.map((value: any, index: number) => index < 4 && <BoxIconListItem type={index < 3 ? "icon" : "plus"} item={index < 3 ? value : item.length - 3} key={index} />)
      }
    </StyledBoxIconList>
  );
};
export default BoxIconList;
