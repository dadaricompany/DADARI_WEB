import { ListPopup, SectionGridTemplate, SectionItem } from "components/list";
import { useRouter } from "next/router";
import { Fragment, MouseEvent, useCallback } from "react";
import { useRecoilState } from "recoil";
import { compareState } from "store/state";

type Props = {
  item: any
}
const SectionContainer: React.FC<Props> = ({ item }) => {
  const [compare, setCompare] = useRecoilState<any>(compareState);
  const router = useRouter();

  const compareDetail = () => {
    if (compare.length != 2) return;
    router.push(`/compare/${compare[0].id},${compare[1].id}`);
  };

  const moveDetail = useCallback((item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(`/service/${item}`);
  }, [router]);

  const selectDetail = (item: any) => (e: MouseEvent<HTMLElement>) => {
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
  };

  const deleteDetail = (item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCompare(compare.filter((v: any) => v.id != item.id));
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
        <ListPopup item={compare} compareDetail={compareDetail} deleteDetail={deleteDetail} />
      )}
    </>
  );
};
export default SectionContainer;
