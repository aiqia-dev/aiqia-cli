import './globals.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppLayout } from '@/shared/layouts';
import { HomePage } from '@/pages/HomePage';
import { ExamplesListPage } from '@/pages/ExamplesListPage';
import { ExampleEditPage } from '@/pages/ExampleEditPage';
import { Toaster } from '@aiqiabr/aiqia-ui';

export default function AppRouter() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router basename="/PROJECT_ROUTE">
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/examples" element={<ExamplesListPage />} />
            <Route path="/examples/:id/edit" element={<ExampleEditPage />} />
            <Route path="/examples/new" element={<ExampleEditPage />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
