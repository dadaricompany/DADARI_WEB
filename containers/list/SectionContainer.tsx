import { ListPopup, SectionGridTemplate, SectionItem } from "components/list";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
const SectionContainer = () => {
  const router = useRouter();
  const moveDetail = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push("/item/1");
  };
  return (
    <>
      <SectionGridTemplate>
        <SectionItem moveDetail={moveDetail} />{" "}
        <SectionItem moveDetail={moveDetail} />{" "}
        <SectionItem moveDetail={moveDetail} />{" "}
        <SectionItem moveDetail={moveDetail} />
        <SectionItem moveDetail={moveDetail} />{" "}
        <SectionItem moveDetail={moveDetail} />{" "}
        <SectionItem moveDetail={moveDetail} />
      </SectionGridTemplate>
      <ListPopup />
    </>
  );
};
export default SectionContainer;
