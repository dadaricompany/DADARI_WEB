// import { useRecoilValue } from "recoil";
// import { darkState } from "store/state";
// import { darkTheme, lightTheme } from "styles/Theme";
// 추후 다크 모드 지원시 재활성화

import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import { lightTheme } from "styles/Theme";

type Props = {
  children: JSX.Element | JSX.Element[]
};

const Root: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};
export default Root;
