import { z } from "zod";

import { procedure, router } from "./trpc";

export const appRouter = router({
  greeting1: procedure.query((opts) => {
    return { msg: "Hello World TEST" };
  }),
  greeting2: procedure.input(z.object({ name: z.string() })).query((opts) => {
    return { msg: `Hello ${opts.input.name ?? "World"}` };
  }),
});

export type AppRouter = typeof appRouter;
