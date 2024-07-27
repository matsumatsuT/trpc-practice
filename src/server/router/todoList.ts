import { prisma } from "@/server/prisma"
import { procedure, router } from "@/server/trpc"
import { z } from "zod"

const addTodoInput = z.object({
  title: z.string().max(20),
  content: z.string().optional(),
})
const updateDoneInput = z.object({
  id: z.number(),
  isDone: z.boolean(),
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
  updateDone: procedure.input(updateDoneInput).mutation(async ({ input }) => {
    const update = await prisma.todoList.update({
      where: {
        id: input.id,
      },
      data: {
        isDone: input.isDone,
      },
    })
    return update
  }),
})
export type AddTodoInput = z.infer<typeof addTodoInput>
export type UpdateDoneInput = z.infer<typeof updateDoneInput>
