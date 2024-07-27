import { prisma } from "@/server/prisma"
import { procedure, router } from "@/server/trpc"
import { z } from "zod"

const addTodoInput = z.object({
  title: z.string().max(20),
  content: z.string().max(100).optional(),
})

export const todoListRouter = router({
  getAll: procedure.query(async () => {
    const todoList = await prisma.todoList.findMany({
      orderBy: {
        id: "asc",
      },
    })
    return todoList
  }),
  add: procedure.input(addTodoInput).mutation(async ({ input }) => {
    const post = await prisma.todoList.create({
      data: {
        title: input.title,
        content: input.content,
      },
    })
    return post
  }),
})

export type AddTodoInput = z.infer<typeof addTodoInput>
