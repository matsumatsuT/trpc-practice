import { z } from "zod";

import { procedure, router } from "./trpc";

// routerを使用してエンドポイントを定義
// procedureを使用して処理を実装する
export const appRouter = router({
  greeting1: procedure.query((opts) => {
    return { msg: "Hello World TEST" };
  }),
  greeting2: procedure.input(z.object({ name: z.string() })).query((opts) => {
    return { msg: `Hello ${opts.input.name ?? "World"}` };
  }),
});

export type AppRouter = typeof appRouter;
