import { httpBatchLink } from "@trpc/client";

import { appRouter } from "@/server";

export const serverApi = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://localhost:3003/api/trpc",
    }),
  ],
});
