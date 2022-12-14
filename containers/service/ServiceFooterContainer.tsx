import ServiceInfoFloat from "components/service/ServiceInfoFloat";
import { MouseEvent, useState } from "react";
import { compareState } from "store/state";
import { useRecoilState } from "recoil";
import Router from "next/router";
import ServiceInfoPopup from "components/service/ServiceInfoPopup";
import Popup from "components/base/core/Popup";

const ServiceFooterContainer = ({
  item,
  url,
  goToURL,
}: {
  item: any;
  url: string;
  goToURL: (url: string) => (e: MouseEvent<HTMLElement>) => void;
}) => {
  const [compare, setCompare] = useRecoilState<any>(compareState);
  const [temp, setTemp] = useState<any>(null);
  const openPopup = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const _itemPopup = document.getElementById("ServiceInfoPopup");
    if (_itemPopup && _itemPopup.style) {
      _itemPopup.style.display = "flex";
    }
  };
  const selectCmpare = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (compare.length > 1) return;
    if (compare.filter((v: any) => v.id == item.id).length) return;
    setCompare([
      ...compare,
      {
        id: item.id,
        categoryId: item.categoryId,
        defaultLogoPath: item.defaultLogoPath,
        nameKr: item.nameKr,
      },
    ]);
    Router.back();
  };

  const closePopup = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const _itemPopup = document.getElementById("ServiceInfoPopup");
    if (_itemPopup && _itemPopup.style) {
      _itemPopup.style.display = "none";
    }
  };
  return (
    <>
      <ServiceInfoFloat openPopup={openPopup} selectCmpare={selectCmpare} />
      <ServiceInfoPopup closePopup={closePopup} goToURL={goToURL} url={url} />
    </>
  );
};
export default ServiceFooterContainer;
