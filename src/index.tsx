import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.scss';
import { ThemeProvider } from 'styled-components';
import baseTheme from './theme/baseTheme';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store = {store}>
    <ThemeProvider theme = {baseTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);