import { initTRPC } from "@trpc/server";

// trpcの初期化（一つのプロダクトに一度だけ実行）
const t = initTRPC.create();

// 使用しやすいようにexportしてる
export const router = t.router;
export const procedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;
