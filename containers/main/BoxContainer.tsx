import { MouseEvent, useCallback } from "react";

import Box from "components/main/Box";
import { MainConvertInterface } from "utils/data/modules/main/MainInterface";
import { useRouter } from "next/dist/client/router";

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
