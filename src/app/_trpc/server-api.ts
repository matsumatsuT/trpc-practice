import { httpBatchLink } from "@trpc/client"

import { router } from "@/server/trpc"
import { createServerSideHelpers } from "@trpc/react-query/server"

// https://trpc.io/docs/server/context
// server側うまく動かない

//　必要なさそう（ よくわからん）

// export const serverApi = createServerSideHelpers({
//   router: appRouter,
//   ctx: {},
// });
