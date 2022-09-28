import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }
`;

export const theme = {
  moderateBlue: "hsl(238, 40%, 52%)",
  softRed: "hsl(358, 79%, 66%)",
  lightGrayishBlue: "hsl(239, 57%, 85%)",
  paleRed: "hsl(357, 100%, 86%)",
  darkBlue: "hsl(212, 24%, 26%)",
  grayishBlue: "hsl(211, 10%, 45%)",
  lightGray: "hsl(223, 19%, 93%)",
  veryLightGray: "hsl(228, 33%, 97%)",
  white: "hsl(0, 0%, 100%)",
};
