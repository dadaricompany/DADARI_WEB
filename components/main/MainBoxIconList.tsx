import { Fragment } from "react";
import styled from "styled-components";
import MainBoxIcon from "./MainBoxIcon";

const StyledMainBoxIconList = styled.div`
  display: flex;
  margin-right: 12px;
  div + div {
    margin-left: -15px;
  }
`;
const MainBoxIconList = ({ item }: { item: any }) => {
  return (
    <StyledMainBoxIconList>
      {item && item.length ? (
        item.map((value: any, index: number) => {
          return index < 3 ? (
            <Fragment key={index}>
              <MainBoxIcon type="icon" item={value} />
            </Fragment>
          ) : (
            <Fragment>
              <MainBoxIcon type="plus" item={item.length} />
            </Fragment>
          );
        })
      ) : (
        <Fragment></Fragment>
      )}
    </StyledMainBoxIconList>
  );
};
export default MainBoxIconList;
