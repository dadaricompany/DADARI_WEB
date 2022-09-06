import { selectListList } from "api/modules/list";
import { Footer } from "components/base";
import { CategoryList, SubCategoryList } from "components/list";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import ListPopup from "components/list/ListPopup";
import SectionContainer from "./SectionContainer";

const CategoryContainer = () => {
  const router = useRouter();
  const queries = router.query;
  const [category, setCategory] = useState(null);

  const getCategory = async (id: any) => {
    const { data } = await selectListList(id);
    setCategory(data);
  };
  useEffect(() => {
    if (!router.isReady) return;
    getCategory(queries.id);
  }, [router.isReady]);
  useEffect(()=>{
    if(!category) return;
    console.log(category)
  },[category])
  return (
    <>
      <CategoryList />
      <SubCategoryList />
      <SectionContainer />
      <Footer />
    </>
  );
};
export default CategoryContainer;
