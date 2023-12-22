import { createGlobalStyle } from "styled-components";

// bg #352F44
//  conainer #5C5470
// small container #B9B4C7
// text #FAF0E6
const GlobalStyles = createGlobalStyle`
:root {
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #d4f4ff;
  --color-blue-600: #0093ff;
  --color-blue-700: #007bff;

  --color-green-100: #ebffc5;
  --color-green-600: #5eb500;
  --color-green-700: #488902;
  --color-green-800: #3a6c08;

  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

    
  --color-sandstone-100: #e4e3dd;
  --color-sandstone-500:#877c6b;
  --color-sandstone-700: #5e534a;
 
  --color-sandstone-800: #514842;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;

  --color-bg: #F3EEEA;
  --color-container: #EBE3D5;
  --color-block: #B0A695;
  --color-text: #776B5D;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
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
