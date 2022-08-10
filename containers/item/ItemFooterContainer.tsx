import { ItemFooter } from "components/item";
import ItemPopup from "components/item/ItemPopup";
import { MouseEvent } from "react";
const ItemFooterContainer = () => {
  const openPopup = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const _itemPopup = document.getElementById("ItemPopup");
    if (_itemPopup && _itemPopup.style) {
      _itemPopup.style.display = "flex";
    }
  };
  const closePopup = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const _itemPopup = document.getElementById("ItemPopup");
    if (_itemPopup && _itemPopup.style) {
      _itemPopup.style.display = "none";
    }
  };
  return (
    <>
      <ItemFooter openPopup={openPopup} />
      <ItemPopup closePopup={closePopup} />
    </>
  );
};
export default ItemFooterContainer;
