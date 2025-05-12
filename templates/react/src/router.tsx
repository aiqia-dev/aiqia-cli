import { ExampleEditPage } from '@/pages/ExampleEditPage';
import { ExamplesListPage } from '@/pages/ExamplesListPage';
import { HomePage } from '@/pages/HomePage';
import { AppLayout } from '@/shared/layouts';
import { Toaster } from '@aiqiabr/aiqia-ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import './globals.css';

export default function AppRouter() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ProductProvider>
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
      </ProductProvider>
    </QueryClientProvider>
  );
}
