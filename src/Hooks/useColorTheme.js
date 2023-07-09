import { useState,useEffect } from "react";
import { CustomTheme } from "../Config/CustomTheme";

function useColorTheme(theme) {
  const [themeColor, setThemeColor] = useState(CustomTheme.Light);
  useEffect(() => {
    if (theme === "Dark") {
      setThemeColor(CustomTheme.Dark);
    }
    if (theme === "Light") {
      setThemeColor(CustomTheme.Light);
    }
  }, [theme]);

  

  return [themeColor];
}
export { useColorTheme };
