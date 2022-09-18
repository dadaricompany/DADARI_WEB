import SearchItem from "components/search/SearchItem";
import { useRecoilState } from "recoil";
import { compareState } from "store/state";
import { MouseEvent } from "react";
import { useRouter } from "next/router";

const SearchItemContainer = ({ item }: any) => {
  const [compare, setCompare] = useRecoilState<any>(compareState);
  const Router = useRouter();
  const onClickSearchItem = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    Router.push(`/service/${item.id}`);
  };

  const onClickPlusBtn = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (compare.length > 1) return;
    if (compare.filter((v: any) => v.id == item.id).length) return;
    setCompare([
      ...compare,
      {
        id: item.id,
        categoryId: 9999,//TODO바꿔야된다
        defaultLogoPath: item.defaultLogoPath,
        nameKr: item.nameKr,
      },
    ]);
    Router.back();
  };
  return (
    <SearchItem
      item={item}
      onClickSearchItem={onClickSearchItem}
      onClickPlusBtn={onClickPlusBtn}
    />
  );
};
export default SearchItemContainer;
