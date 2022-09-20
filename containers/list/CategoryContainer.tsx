import { selectListList } from "api/modules/list";
import { Footer } from "components/base";
import { CategoryList, SubCategoryList } from "components/list";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { MouseEvent } from "react";
import SectionContainer from "./SectionContainer";

const CategoryContainer = () => {
  const router = useRouter();
  const queries = router.query;

  const [id, setId] = useState("");
  const [list, setList] = useState({
    categories: [],
    hashtags: [],
    subscriptionServices: [],
  });

  const getList = useCallback(async (id: any) => {
    const { data } = await selectListList(id);
    let result = {
      categories: [],
      hashtags: [],
      subscriptionServices: [],
    };
    result["categories"] = data.categories ?? [];
    result["hashtags"] =
      data.hashtags.map((v: any) => {
        return {
          name: v.name,
          id: v.id,
          checked: false,
        };
      }) ?? [];
    result["subscriptionServices"] = data.subscriptionServices ?? [];
    setList(result);
  }, []);

  const moveList = useCallback((item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setId(String(item));
  }, []);

  const onClickHashtags = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!e.currentTarget.children) return;
    let num = Number(e.currentTarget.children[0].id.slice(9));
    let hashs: any = list.hashtags;
    hashs[num].checked
      ? (hashs[num].checked = false)
      : (hashs[num].checked = true);

    const { data } = await selectListList(
      id,
      hashs
        .reduce(
          (acc: string, cur: any) => (cur.checked ? acc + cur.id : acc),
          ""
        )
        .split("")
        .join(",")
    );
    setList({
      categories: data.categories,
      hashtags: hashs,
      subscriptionServices: data.subscriptionServices,
    });
  };

  useEffect(() => {
    if (!router.isReady) return;
    setId(String(queries.id));
  }, [queries.id, router.isReady]);

  useEffect(() => {
    if (!id) return;
    getList(id);
  }, [id]);

  return (
    <>
      <CategoryList item={list.categories} moveList={moveList} id={id} />
      {list.hashtags && list.hashtags.length && (
        <SubCategoryList
          item={list.hashtags}
          onClickHashtags={onClickHashtags}
        />
      )}
      <SectionContainer item={list.subscriptionServices} />
      <Footer />
    </>
  );
};
export default CategoryContainer;
