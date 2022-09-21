import { MouseEvent, useCallback } from "react"
import { useRouter } from "next/router";

import { TopBox } from "components/main";
import { MainConvertInterface } from "utils/data/modules/main/MainInterface";

interface Props {
  data: MainConvertInterface
}

const BoxMainContaier = ({ data }: Props) => {
  const router = useRouter();
  
  const onClickLink = useCallback((e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(`/list?id=${data.id}`);
  }, []);

  return <TopBox data={data} onClickLink={onClickLink} />;
};
export default BoxMainContaier;
