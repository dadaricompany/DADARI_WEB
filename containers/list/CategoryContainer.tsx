import { Footer } from "components/base";
import { CategoryList, SubCategoryList } from "components/list";
// import ListPopup from "components/list/ListPopup";
import SectionContainer from "./SectionContainer";

const CategoryContainer = () => {
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
