import { useRecoilValue } from "recoil";
import { darkState } from "store/state";
import { ThemeProvider } from "styled-components";
import GlobalFonts from "styles/GlobalFonts";
import GlobalStyles from "styles/GlobalStyles";
import { darkTheme, lightTheme } from "styles/Theme";
const Root = ({ children }: any) => {
  const darkMode = useRecoilValue(darkState);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalFonts />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};
export default Root;
