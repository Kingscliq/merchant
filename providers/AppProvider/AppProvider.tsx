import { AppStoreProvider } from './StoreProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { DefaultOptions } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@providers/ThemeProvider';
interface AppProviderProps {
  children: React.ReactNode;
}

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

const queryClient = new QueryClient({ defaultOptions: queryConfig });

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AppStoreProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>{children}</ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppStoreProvider>
  );
}
