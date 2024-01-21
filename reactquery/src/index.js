
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
   
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
