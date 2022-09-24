import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import styled, { createGlobalStyle } from "styled-components";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
  </>
);

