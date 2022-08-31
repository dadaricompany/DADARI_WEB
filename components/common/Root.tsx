// import { useRecoilValue } from "recoil";
// import { darkState } from "store/state";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
// import { darkTheme, lightTheme } from "styles/Theme";
import { lightTheme } from "styles/Theme";
const Root = ({ children }: any) => {
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
