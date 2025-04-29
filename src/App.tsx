import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MessagingForeground from "./lib/firebase/messaging/foreground";

function App() {
  const [client] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={routers} />
      <ReactQueryDevtools initialIsOpen={false} />
      <MessagingForeground />
    </QueryClientProvider>
  );
}

export default App;
