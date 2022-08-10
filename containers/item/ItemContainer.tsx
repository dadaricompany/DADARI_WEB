import {
  Description,
  Divider,
  ItemFee,
  ItemTitle,
  Membership,
} from "components/item";
import ItemFooterContainer from "./ItemFooterContainer";

const ItemContainer = () => {
  return (
    <>
      <Description />
      <Divider />
      <Membership />
      <ItemTitle title={["월 구독료"]} />
      <ItemFee height={268} />
      <ItemTitle title={["결제단위", "이용범위"]} />
      <ItemFee height={202} />
      <ItemTitle title={["무료기간", "제휴혜택"]} />
      <ItemFee height={202} />
      <ItemTitle title={["부가기능"]} />
      <ItemFee height={107} />
      <ItemTitle title={["컨텐츠수"]} />
      <ItemFee height={221} />
      <ItemFooterContainer />
    </>
  );
};
export default ItemContainer;
