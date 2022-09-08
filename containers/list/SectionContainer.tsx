import { ListPopup, SectionGridTemplate, SectionItem } from "components/list";
import { useRouter } from "next/router";
import { Fragment, MouseEvent, useState } from "react";

const SectionContainer = ({ item }: any) => {
  const [selectedList, setSelectedList] = useState<any>([]);
  const router = useRouter();
  const moveDetail = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push("/item/1");
  };
  const selectDetail = (item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedList([...selectedList, item])
  };
  const deleteDetail = (item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedList(selectedList.filter((v: any) => v.id != item.id))
  }

  return (
    <>
      <SectionGridTemplate>
        {item && item.map((v: any, i: number) => {
          return <Fragment key={i}>
            <SectionItem moveDetail={moveDetail} selectDetail={selectDetail} item={v} />
          </Fragment>
        })}
      </SectionGridTemplate>

      {selectedList.length > 0 && <ListPopup item={selectedList} deleteDetail={deleteDetail} />}
    </>
  );
};
export default SectionContainer;
