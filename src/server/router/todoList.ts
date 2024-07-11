import { prisma } from "@/server/prisma"
import { procedure, router } from "@/server/trpc"
import { z } from "zod"

export const todoListRouter = router({
  getAll: procedure.query(async () => {
    const todoList = await prisma.todoList.findMany()
    return todoList
  }),
  add: procedure
    .input(
      z.object({
        title: z.string().max(20),
        content: z.string().max(100).optional(),
      })
    )
    .mutation(async ({ input }) => {
      const post = await prisma.todoList.create({
        data: {
          title: input.title,
          content: input.content,
        },
      })
      return post
    }),
})
