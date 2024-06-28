import { z } from "zod";

import { callerFactory, procedure, router } from "./trpc";

// routerを使用してエンドポイントを定義
// procedureを使用して処理を実装する
export const appRouter = router({
  greeting1: procedure.query((opts) => {
    return { msg: "Hello World TEST" };
  }),
  greeting2: procedure.input(z.object({ name: z.string() })).query((opts) => {
    return { msg: `Hello ${opts.input.name ?? "World"}` };
  }),
  getPosts: procedure.query(async () => {
    const env = process.env.ENDPOINT;
    const res = await fetch(`${env}/posts`);
    return res.json();
  }),
});

const getPosts = async () => {};

export type AppRouter = typeof appRouter;

export const createCaller = callerFactory(appRouter);
