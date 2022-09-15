import { ItemFooter } from "components/item";
import ItemPopup from "components/item/ItemPopup";
import { MouseEvent } from "react";
import { compareState } from "store/state";
import { useRecoilState } from "recoil";
import { selectListList } from "api/modules/list";
import Router from "next/router";

const ItemFooterContainer = ({ item, url, goToURL }: { item: any, url: string, goToURL: (url: string) => (e: MouseEvent<HTMLElement>) => void; }) => {
  const [compare, setCompare] = useRecoilState<any>(compareState)

  const openPopup = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const _itemPopup = document.getElementById("ItemPopup");
    if (_itemPopup && _itemPopup.style) {
      _itemPopup.style.display = "flex";
    }
  };
  const selectCmpare = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (compare.length > 1) return;
    const { data } = await selectListList(item.categoryId);
    const select = data.subscriptionServices.filter((v: any) => v.id == item.id);
    if (select && select.length && compare.filter((v: any) => v.id == select[0].id).length) return;
    setCompare([...compare, ...select])
    Router.back();
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
