import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;

}
body {
  color:${(props) => props.theme.Base};
background-color: ${(props) => props.theme.Base_07};
}

a {
  color: inherit;
  text-decoration: none;
}



`;
