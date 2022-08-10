import { MainBox } from "components/main";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const BoxMainContaier = () => {
  const router = useRouter();
  const moveList = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push("/list");
  };
  return <MainBox moveList={moveList} />;
};
export default BoxMainContaier;
