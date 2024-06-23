"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

import { clientApi } from "./client-api";

export default function Provider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({});
  const trpcClient = clientApi.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:3000/api/trpc",
      }),
    ],
  });
  return (
    <clientApi.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </clientApi.Provider>
  );
}
