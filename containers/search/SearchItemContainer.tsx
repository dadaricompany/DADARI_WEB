import SearchItem from "components/search/SearchItem";
import { useRecoilState } from "recoil";
import { compareState } from "store/state";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import Popup from "components/base/core/Popup";

const SearchItemContainer = ({ item }: any) => {
  const [compare, setCompare] = useRecoilState<any>(compareState);
  const [temp, setTemp] = useState<any>(null);
  const Router = useRouter();
  const onClickSearchItem = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    Router.push(`/service/${item.id}`);
  };
  const cacncelCompare = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const _itemPopup = document.getElementById("ComparePopup");
    if (_itemPopup && _itemPopup.style) {
      _itemPopup.style.display = "none";
    }
    setTemp(null)
  }
  const confirmCompare = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const _itemPopup = document.getElementById("ComparePopup");
    if (_itemPopup && _itemPopup.style) {
      _itemPopup.style.display = "none";
    }
    setCompare([
      temp
    ]);
    Router.back();
  }
  const onClickPlusBtn = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (compare.length > 1) return;
    if (compare.filter((v: any) => v.id == item.id).length) return;
    if (compare.filter((v: any) => v.categoryId != 99999).length) {
      console.log(item)
      const _itemPopup = document.getElementById("ComparePopup");
      setTemp({
        id: item.id,
        categoryId: 99999,
        defaultLogoPath: item.defaultLogoPath,
        nameKr: item.nameKr,
      })
      if (_itemPopup && _itemPopup.style) {
        _itemPopup.style.display = "flex";
      }
    } else {
      setCompare([
        ...compare,
        {
          id: item.id,
          categoryId: 99999,//TODO바꿔야된다
          defaultLogoPath: item.defaultLogoPath,
          nameKr: item.nameKr,
        },
      ]);
      Router.back();
    }
  };
  return (
    <>
      <SearchItem
        item={item}
        onClickSearchItem={onClickSearchItem}
        onClickPlusBtn={onClickPlusBtn}
      />
      <Popup onClickCancel={cacncelCompare} onClickConfirm={confirmCompare} />
    </>
  );
};
export default SearchItemContainer;
