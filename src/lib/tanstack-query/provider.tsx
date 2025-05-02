import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'

const QueryProvider: React.FC<React.PropsWithChildren<{ untest?: boolean }>> = ({ children, untest }) => {
  const [client] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: !!untest,
      },
    }
  }));
  return (<QueryClientProvider {...{ client, children }} />)
}

export default QueryProvider
