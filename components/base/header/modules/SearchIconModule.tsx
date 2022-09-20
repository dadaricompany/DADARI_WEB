import { IconSearch } from "components/icons";
import { MouseEvent } from "react";

type Props = {
    onClickLink: (e: MouseEvent<HTMLElement>) => void;
};

const SearchIconModule: React.FC<Props> = ({ onClickLink }) => {
    return <div onClick={onClickLink}>
        <IconSearch iWidth={32} iHeight={32} />
    </div>
};

export default SearchIconModule;