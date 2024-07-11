/**
 * This file contains the root router of your tRPC-backend
 */

import { callerFactory, router } from "@/server/trpc"
import { greetingRouter } from "@/server/router/greeting"
import { todoListRouter } from "@/server/router/todoList"

export const appRouter = router({
  greeting: greetingRouter,
  todoList: todoListRouter,
})

export const createCaller = callerFactory(appRouter)

export type AppRouter = typeof appRouter
