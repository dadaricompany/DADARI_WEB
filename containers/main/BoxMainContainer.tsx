import { MouseEvent, useCallback } from "react"
import { useRouter } from "next/router";

import { MainBox } from "components/main";

type Props = {
  item: any
}

const BoxMainContaier: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  const moveList = useCallback((e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(`/list?id=${item.id}`);
  }, []);

  return <MainBox item={item} moveList={moveList} />;
};
export default BoxMainContaier;
