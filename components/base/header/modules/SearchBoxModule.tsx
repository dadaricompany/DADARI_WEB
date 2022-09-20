import styled from "styled-components";
import { KeyboardEvent } from "react";

const StyledSearchBoxModule = styled.input`
  outline: none;
  border: 0;
  border-radius:6px;
  margin: 0 4px 0 11px;
  padding: 0 0 0 11px;
  flex-grow: 1;
  height: 44px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.5px;
  color: #fff;
  background-color: #2d344b;
`;

type Props = {
  onChangeSearchText: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const SearchBoxModule: React.FC<Props> = ({ onChangeSearchText }) => {
  return <StyledSearchBoxModule type={"text"} onKeyUp={onChangeSearchText} />
};

export default SearchBoxModule;