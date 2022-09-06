import { MainBox } from "components/main";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const BoxMainContaier = ({ item }: { item: any }) => {
  const router = useRouter();
  const moveList = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push("/list");
  };
  
  return <MainBox item={item} moveList={moveList} />;
};
export default BoxMainContaier;
