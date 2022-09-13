import { ItemFooter } from "components/item";
import ItemPopup from "components/item/ItemPopup";
import { MouseEvent } from "react";
import { compareState } from "store/state";
import { useRecoilState } from "recoil";
import { selectListList } from "api/modules/list";

const ItemFooterContainer = ({ url, goToURL }: { url: string, goToURL: (url: string) => (e: MouseEvent<HTMLElement>) => void; }) => {
  const [compare, setCompare] = useRecoilState(compareState)

  const openPopup = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const _itemPopup = document.getElementById("ItemPopup");
    if (_itemPopup && _itemPopup.style) {
      _itemPopup.style.display = "flex";
    }
  };
  const selectCmpare = (item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (compare.length > 1) return;
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
      <ItemFooter openPopup={openPopup} selectCmpare={selectCmpare} />
      <ItemPopup closePopup={closePopup} goToURL={goToURL} url={url} />
    </>
  );
};
export default ItemFooterContainer;
