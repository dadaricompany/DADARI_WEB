import { HeaderList } from "components/base";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const HeaderListContainer = () => {
  const router = useRouter();
  const moveBack = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.replace('/')
  };
  const moveSearch = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push("/search");
  };
  return <HeaderList moveBack={moveBack} moveSearch={moveSearch} />;
};
export default HeaderListContainer;
