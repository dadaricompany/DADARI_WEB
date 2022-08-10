import Box from "components/main/Box";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const BoxContainer = () => {
  const router = useRouter();
  const moveList = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push("/list");
  };
  return <Box moveList={moveList} />;
};
export default BoxContainer;
