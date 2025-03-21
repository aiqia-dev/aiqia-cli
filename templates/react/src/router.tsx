import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppStateProvider from '@/contexts/AppStateContext';
import { AppLayout } from '@/components';
import { HomePage } from '@/pages/home';
import { Toaster } from '@aiqiabr/aiqia-ui';
import '@aiqiabr/aiqia-ui/styles.css';
import './globals.css';

export default function AppRouter() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AppStateProvider>
        <Router basename={process.env.NODE_ENV === 'production' ? "/PROJECT_NAME" : "/"}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </Router>
        <Toaster />
      </AppStateProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
