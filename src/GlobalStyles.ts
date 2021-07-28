import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  *:focus {
    outline: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }
  body {
    background-color: #F6F6F6;
    font-family: 'Noto Sans KR', sans-serif;
  }
  html {
    height: -webkit-fill-available;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  input {
    font-family: 'Noto Sans KR', sans-serif;
  }
  @font-face {
    font-family: 'NanumBarunpen';
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap') format('woff');
    font-style: normal;
  }
`;
