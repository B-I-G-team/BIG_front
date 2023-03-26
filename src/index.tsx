import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initPersister, setBaseUrl } from 'api/axios-client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyle from './styles';
import { theme } from './styles/theme';

const queryClient = new QueryClient();
initPersister();

setBaseUrl('http://rasp.jaejun.me:8000');

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
