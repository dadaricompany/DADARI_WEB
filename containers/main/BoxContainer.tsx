import { MouseEvent, useCallback } from "react";
import { useRouter } from "next/router";

import Box from "components/main/Box";
import { MainConvertInterface } from "utils/data/modules/main/MainInterface";

interface Props {
  data: MainConvertInterface
};

const BoxContainer = ({ data }: Props) => {
  const router = useRouter();

  const onClickLink = useCallback((e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(`/list?id=${data.id}`);
  }, []);

  return <Box onClickLink={onClickLink} data={data} />;
};
export default BoxContainer;
