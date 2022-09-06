import { Fragment } from "react";
import styled from "styled-components";
import BoxIcon from "./BoxIcon";

const StyledBoxIconList = styled.div`
  display: flex;
  div + div {
    margin-left: -13px !important;
  }
`;

const BoxIconList = ({ item }: any) => {
  return (
    <StyledBoxIconList>
      {item && item.length ? (
        item.map((value: any, index: number) => {
          return index < 3 ? (
            <Fragment key={index}>
              <BoxIcon type="icon" item={value} />
            </Fragment>
          ) : (
            <Fragment>
              <BoxIcon type="plus" item={item.length} />
            </Fragment>
          );
        })
      ) : (
        <Fragment></Fragment>
      )}
    </StyledBoxIconList>
  );
};
export default BoxIconList;
