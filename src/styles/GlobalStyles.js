import { createGlobalStyle } from "styled-components";

// bg #352F44
//  conainer #5C5470
// small container #B9B4C7
// text #FAF0E6
const GlobalStyles = createGlobalStyle`
:root {
  --color-bg: #F3EEEA;
  --color-container: #EBE3D5;
  --color-block: #B0A695;
  --color-text: #776B5D;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-text);
  background-color: var(--color-bg);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}
*{  margin: 0;
  padding: 0;
  box-sizing: border-box;}
*:disabled {
  cursor: not-allowed;

}

select:disabled,
input:disabled {
  background-color: var(--color-block);
  color: var(--color-text);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-block);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
