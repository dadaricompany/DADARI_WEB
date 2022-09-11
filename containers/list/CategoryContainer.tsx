import { selectListList } from "api/modules/list";
import { Footer } from "components/base";
import { CategoryList, SubCategoryList } from "components/list";
import { useRouter } from "next/router";
import Item from "pages/item/[id]";
import { useEffect, useState } from "react";
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

  const getList = async (id: any) => {
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
          checked: false,
        };
      }) ?? [];

    result["subscriptionServices"] = data.subscriptionServices ?? [];

    setList(result);
  };

  const moveList = (item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setId(String(item));
  };

  const onClickHashtags = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!e.currentTarget.children) return;
    let num = Number(e.currentTarget.children[0].id.slice(9));
    let hashs: any = list.hashtags;
    hashs[num].checked
      ? (hashs[num].checked = false)
      : (hashs[num].checked = true);

    setList({
      categories: list.categories,
      hashtags: hashs,
      subscriptionServices: list.subscriptionServices,
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

  useEffect(() => {
    if (!list) return;
  }, [list]);

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
