import { MouseEvent, useCallback } from "react";
import { useRouter } from "next/router";

import Box from "components/main/Box";

type Props = {
  item: any
};

const BoxContainer: React.FC<Props> = ({ item }) => {

  const router = useRouter();

  const onClickLink = useCallback((e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(`/list?id=${item.id}`);
  }, []);

  return <Box onClickLink={onClickLink} item={item} />;
};
export default BoxContainer;
