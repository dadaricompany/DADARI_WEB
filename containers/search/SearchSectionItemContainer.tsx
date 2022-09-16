import SearchSectionItem from "components/search/SearchSectionItem";
import { useState } from "react";
import { MouseEvent } from "react";
const SearchSectionItemContainer = ({ item }: any) => {
    const [sectionState, setSectionState] = useState(false);

    const onClickMore = (e: MouseEvent<HTMLElement>) => {
        setSectionState(!sectionState);
    }

    return <SearchSectionItem item={item} sectionState={sectionState} onClickMore={onClickMore} />
}
export default SearchSectionItemContainer;