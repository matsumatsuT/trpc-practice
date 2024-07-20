import { clientApi } from "@/app/_trpc/client-api"
import { AddTodoInput } from "@/server/router/todoList"
import { FormProvider, useForm } from "react-hook-form"

type createFormValues = AddTodoInput

export const CreateForm = () => {
  const methods = useForm<createFormValues>({
    defaultValues: {
      title: "",
      content: "",
    },
  })
  const { register, handleSubmit } = methods

  const { mutate } = clientApi.todoList.add.useMutation()

  // 登録処理
  const onClick = (values: createFormValues) => {
    console.log("values", values)
    return
    mutate({
      title: values.title,
      content: values.content,
    })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onClick)}>
        <input
          type="text"
          placeholder="タイトル"
          {...register("title", { required: true, max: 20 })}
        />
        <div>
          <input
            type="text"
            placeholder="備考"
            {...register("content", { max: 100 })}
          />
        </div>
        <button type="submit">登録</button>
      </form>
    </FormProvider>
  )
}
