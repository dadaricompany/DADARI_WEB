import { HeaderMain } from "components/base";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
const HeaderMainContainer = () => {
  const router = useRouter();
  const moveHome = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.reload();
  };
  const moveSearch = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push("/search");
  };
  return <HeaderMain moveHome={moveHome} moveSearch={moveSearch} />;
};
export default HeaderMainContainer;
