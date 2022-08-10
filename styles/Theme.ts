import { DefaultTheme } from "styled-components";
import BgMain from "assets/background/bg_main.png";
const light = {};
const dark = {};

const defaultTheme: DefaultTheme = {
  colors: {
    primary: "",
    secondary: "",
   
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
