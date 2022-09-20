import { MouseEvent } from "react";
import styled from "styled-components";

import { IconArrowD } from "components/icons";

const StyledSearchItemBtn = styled.div`
    height:46px;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    .up {
        transform: rotate(-180deg); 
        transition: all .5s;
    }
    .down {
        transform: rotate(0deg); 
        transition: all .5s;
    }
`;
type Props = {
    onClickMore: (e: MouseEvent<HTMLElement>) => void;
    sectionState: boolean;
}
const SearchItemBtn: React.FC<Props> = ({ onClickMore, sectionState }) => {
    return <StyledSearchItemBtn onClick={onClickMore}>
        <IconArrowD iWidth={26} iHeight={26} className={sectionState ? 'up' : 'down'} />
    </StyledSearchItemBtn>
}
export default SearchItemBtn;