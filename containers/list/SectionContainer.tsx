import { ListPopup, SectionGridTemplate, SectionItem } from "components/list";
import { useRouter } from "next/router";
import { Fragment, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { compareState } from "store/state";
const SectionContainer = ({ item }: any) => {

  const [compare, setCompare] = useRecoilState<any>(compareState);
  const router = useRouter();

  const moveDetail = (item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(`/item/${item}`);
  };
  const selectDetail = (item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (compare.length > 1) return;
    setCompare([...compare, item])
  };
  const deleteDetail = (item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCompare(compare.filter((v: any) => v.id != item.id))
  };

  return (
    <>
      <SectionGridTemplate>
        {item &&
          item.map((v: any, i: number) => {
            return (
              <Fragment key={i}>
                <SectionItem
                  moveDetail={moveDetail}
                  selectDetail={selectDetail}
                  item={v}
                />
              </Fragment>
            );
          })}
      </SectionGridTemplate>

      {compare.length > 0 && (
        <ListPopup item={compare} deleteDetail={deleteDetail} />
      )}
    </>
  );
};
export default SectionContainer;
