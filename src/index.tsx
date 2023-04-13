import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initPersister, setAxiosFactory } from 'api/axios-client';
import { setMeGETDefaultOptions } from 'api/axios-client/Query';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyle from './styles';
import { theme } from './styles/theme';

const queryClient = new QueryClient();
initPersister();

setAxiosFactory(() => {
  const access_token = localStorage.getItem('access_token');
  const instance = axios.create({
    baseURL: 'http://rasp.jaejun.me:8000',
    timeout: 1000,
    headers: {
      'X-Custom-Header': 'foobar',
      Authorization: access_token ? `Bearer ${access_token}` : '',
    },
  });

  return instance;
});

setMeGETDefaultOptions({
  staleTime: Infinity,
  retry: false,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
