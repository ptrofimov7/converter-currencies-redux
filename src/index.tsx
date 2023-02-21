import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import AppRouter from './components/AppRouter';
import { fetchCurrencies } from './features/converter/converterSlice';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

store.dispatch(fetchCurrencies())

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

