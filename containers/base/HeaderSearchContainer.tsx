import HeaderSearch from "components/base/HeaderSearch";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const HeaderSearchContainer = () => {
  const router = useRouter();
  const moveBack = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.back();
  };
  return <HeaderSearch moveBack={moveBack} />;
};
export default HeaderSearchContainer;
