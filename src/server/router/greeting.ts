import { z } from "zod"
import { router, procedure } from "@/server/trpc"

export const greetingRouter = router({
  greeting1: procedure.query((opts) => {
    return { msg: "Hello World TEST" }
  }),
  greeting2: procedure.input(z.object({ name: z.string() })).query((opts) => {
    return { msg: `Hello ${opts.input.name ?? "World"}` }
  }),
})
