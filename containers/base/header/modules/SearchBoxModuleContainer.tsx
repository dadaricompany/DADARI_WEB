import { SearchBoxModule } from "components/base";
import { KeyboardEvent } from "react";

type Props = {
    onChangeSearchText: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const SearchBoxModuleContainer: React.FC<Props> = ({ onChangeSearchText }) => {
    return <SearchBoxModule onChangeSearchText={onChangeSearchText} />
};

export default SearchBoxModuleContainer;
