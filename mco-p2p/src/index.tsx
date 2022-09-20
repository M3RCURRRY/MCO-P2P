import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyled />
    <App />
  </>
);

