import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppLayout } from '@/components';
import { HomePage } from '@/pages/home';
import { Toaster } from '@aiqiabr/aiqia-ui';
import './globals.css';

export default function AppRouter() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router basename={process.env.NODE_ENV === 'production' ? "/PROJECT_ROUTE" : "/"}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
