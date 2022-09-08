import { selectListList } from "api/modules/list";
import { Footer } from "components/base";
import { CategoryList, SubCategoryList } from "components/list";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MouseEvent } from "react";
import SectionContainer from "./SectionContainer";

const CategoryContainer = () => {
  const router = useRouter();
  const queries = router.query;
  const [id, setId] = useState("");
  const [list, setList] = useState({ categories: [], subcategories: [], subscriptionServices: [] });

  const getList = async (id: any) => {
    const { data } = await selectListList(id);
    let result = { categories: [], subcategories: [], subscriptionServices: [] }
    result['categories'] = data.categories ?? [];
    result['subcategories'] = data.subcategories ?? [];
    result['subscriptionServices'] = data.subscriptionServices ?? [];

    setList(result);
  }

  const moveList = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setId(String(e.currentTarget.dataset.id))
  }

  useEffect(() => {
    if (!router.isReady) return;
    setId(String(queries.id));
  }, [queries.id, router.isReady]);

  useEffect(() => {
    if (!id) return;
    getList(id);
  }, [id])

  useEffect(() => {
    if (!list) return;
    //TODO
    // console.log(list)
  }, [list])

  return (
    <>
      <CategoryList item={list.categories} moveList={moveList} />
      {/* <SubCategoryList /> */}
      <SectionContainer item={list.subscriptionServices} />
      <Footer />
    </>
  );
};
export default CategoryContainer;
