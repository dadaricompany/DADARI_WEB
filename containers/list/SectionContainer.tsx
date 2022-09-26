import Popup from "components/base/core/Popup";
import { ListPopup, SectionGridTemplate, SectionItem } from "components/list";
import { useRouter } from "next/router";
import { MouseEvent, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { compareState } from "store/state";
import { ServiceConvertInterface } from "utils/data/modules/list/ListInterface";

interface Props {
  data: ServiceConvertInterface[]
}
const SectionContainer = ({ data }: Props) => {
  const [compare, setCompare] = useRecoilState<any>(compareState);
  const [temp, setTemp] = useState<any>(null);
  const router = useRouter();

  const compareDetail = () => {
    if (compare.length != 2) return;
    router.push(`/compare/${compare[0].id},${compare[1].id}`);
  };

  const moveDetail = useCallback((item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(`/service/${item}`);
  }, [router]);

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
  }

  const selectDetail = (item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (compare.length > 1) return;
    if (compare.filter((v: any) => v.id == item.id).length) return;
    if (compare.filter((v: any) => v.categoryId != item.categoryId).length) {
      const _itemPopup = document.getElementById("ComparePopup");
      setTemp({
        id: item.id,
        categoryId: item.categoryId,
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
          categoryId: item.categoryId,
          defaultLogoPath: item.defaultLogoPath,
          nameKr: item.nameKr,
        },
      ]);
    }
  };

  const deleteDetail = (item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCompare(compare.filter((v: any) => v.id != item.id));
  };

  return (
    <>
      <SectionGridTemplate>
        {data && data.map((v: ServiceConvertInterface, i: number) => <SectionItem key={i}
          onClickSection={moveDetail}
          onClickPlusBtn={selectDetail}
          data={v}
        />)}
      </SectionGridTemplate>
      {compare.length > 0 && <ListPopup item={compare} compareDetail={compareDetail} deleteDetail={deleteDetail} />}
      <Popup onClickCancel={cacncelCompare} onClickConfirm={confirmCompare} />
    </>
  );
};
export default SectionContainer;
