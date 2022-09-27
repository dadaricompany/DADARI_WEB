import { SearchIconModule } from "components/base";
import { useRouter } from "next/dist/client/router";
import { MouseEvent, useCallback } from "react";

const SearchIconModuleContainer: React.FC = () => {
    const router = useRouter();

    const onClickLink = useCallback((e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        router.push("/search")
    }, [])

    return <SearchIconModule onClickLink={onClickLink} />
};

export default SearchIconModuleContainer;
