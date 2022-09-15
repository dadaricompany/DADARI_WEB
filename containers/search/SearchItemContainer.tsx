import SearchItem from "components/search/SearchItem";
import { useRecoilState } from "recoil";
import { compareState } from "store/state";
import { MouseEvent } from "react";
import { selectListList } from "api/modules/list";
import Router from "next/router";

const SearchItemContainer = ({ item }: any) => {
    const [compare, setCompare] = useRecoilState<any>(compareState)
    const onClickSearchItem = () => {

    }
    
    const onClickPlusBtn = async (e: MouseEvent<HTMLElement>) => {

    }
    return <SearchItem item={item} />
}
export default SearchItemContainer;