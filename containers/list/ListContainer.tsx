import { useCallback, useEffect, useState, MouseEvent } from "react";
import { useRouter } from "next/router";

import { ListConverter, ListConverterWithHash } from "utils/data/modules/list/ListConverter";
import { HashtagConvertInterface, ListResInterface } from "utils/data/modules/list/ListInterface";

import { selectListList } from "api/modules/list";

import { Footer } from "components/base";
import { CategoryList, SubCategoryList } from "components/list";
import SectionContainer from "./SectionContainer";



const ListContainer = () => {

  const router = useRouter();
  const queries = router.query;

  const [id, setId] = useState<string>("");
  const [list, setList] = useState<ListResInterface>({ category: [], hashtag: [], service: [] });

  const getList = useCallback(async (id: string) => {
    const { data } = await selectListList(id);
    setList(ListConverter(data));
  }, []);

  const moveList = useCallback((item: any) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setId(String(item));
  }, []);

  const onClickHashtags = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!e.currentTarget.children) return;

    const num = Number(e.currentTarget.children[0].id.slice(9));
    let hashs: HashtagConvertInterface[] = list.hashtag;
    hashs[num].checked ? (hashs[num].checked = false) : (hashs[num].checked = true);
    const mergeHash = hashs.reduce((acc: string, cur: any) => (cur.checked ? acc + cur.id : acc), "").split("").join(",");
    const { data } = await selectListList(id, mergeHash);
    data.hashtags = hashs;

    setList(ListConverterWithHash(data));
  };

  useEffect(() => {
    if (!router.isReady) return;
    setId(String(queries.id));
  }, [queries.id, router.isReady]);

  useEffect(() => {
    if (!id) return;
    getList(id);
  }, [getList, id]);

  return (
    <>
      <CategoryList data={list.category} onClickCategory={moveList} id={id} />
      {list.hashtag && list.hashtag.length && (
        <SubCategoryList
          data={list.hashtag}
          onClickHashtags={onClickHashtags}
        />
      )}
      <SectionContainer data={list.service} />
      <Footer />
    </>
  );
};
export default ListContainer;
