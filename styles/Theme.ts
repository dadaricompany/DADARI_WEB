import { DefaultTheme } from "styled-components";

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
