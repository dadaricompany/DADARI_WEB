import {
  Description,
  Divider,
  ItemFee,
  ItemTitle,
  Membership,
} from "components/item";
import ItemFooterContainer from "./ItemFooterContainer";

const ItemContainer = ({ item }: any) => {
  return (
    <>
      <Description
        titleKr={item.nameKr}
        titleEng={item.nameEng}
        desc={item.description}
        image={item.bigLogoPath}
      />
      <Divider />
      <Membership item={item.memberships} />
      <ItemTitle title={["월 구독료"]} />
      <ItemFee height={268} type="A" />
      <ItemTitle title={["결제단위", "이용범위"]} />
      <ItemFee height={202} type="B" />
      <ItemTitle title={["무료기간", "제휴혜택"]} />
      <ItemFee height={202} type="B" />
      <ItemTitle title={["부가기능"]} />
      <ItemFee height={107} type="C" />
      <ItemTitle title={["컨텐츠수"]} />
      <ItemFee height={281} type="D" />
      <ItemFooterContainer />
    </>
  );
};
export default ItemContainer;
