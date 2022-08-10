import HeaderBase from "components/base/HeaderBase";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const HeaderBaseContainer = () => {
  const router = useRouter();
  const moveBack = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.back();
  };
  return <HeaderBase moveBack={moveBack} />;
};
export default HeaderBaseContainer;
