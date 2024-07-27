"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"

import { clientApi } from "./client-api"
import { useState } from "react"

const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
    : "http://localhost:3000/api/trpc"

export default function Provider({ children }: { children: React.ReactNode }) {
  // コンポーネントがレンダリングされる度にインスタンスを生成するとパフォーマンスが落ちるため、useStateで定義する
  const [queryClient] = useState(() => new QueryClient({}))
  const [trpcClient] = useState(() =>
    clientApi.createClient({
      links: [
        httpBatchLink({
          url: apiUrl,
        }),
      ],
    })
  )

  return (
    <clientApi.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </clientApi.Provider>
  )
}
