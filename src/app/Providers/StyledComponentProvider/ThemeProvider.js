"use client";
import { useEffect } from "react";
import { getColor } from "../../../Config/GetColor";
import { useColorTheme } from "../../../Hooks/useColorTheme";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getCookie } from "cookies-next";
import { setTheme } from "../../../Redux/slices/theme";

export function ThemeProviders({ children }) {
  const theme = useSelector((state) => state.theme.theme);
  const [themeColor] = useColorTheme(theme);
  const dispatch = useDispatch();
  useEffect(() => {
    const theme = getCookie("theme");

   
    if (theme != undefined) {
      dispatch(setTheme({theme:theme}))
    }
  }, []);

  return <ThemeProvider theme={getColor(themeColor)}>{children}</ThemeProvider>;
}
