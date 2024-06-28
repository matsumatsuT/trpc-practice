import { initTRPC } from "@trpc/server";
import { appRouter } from ".";

// trpcの初期化（一つのプロダクトに一度だけ実行）
const t = initTRPC.create();

// 使用しやすいようにexportしてる
export const router = t.router;
export const procedure = t.procedure;

// サーバーサイドで実行するメソッド
export const callerFactory = t.createCallerFactory;
