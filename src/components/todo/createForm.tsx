import { clientApi } from "@/app/_trpc/client-api"
import { AddTodoInput } from "@/server/router/todoList"
import { FormProvider, useForm } from "react-hook-form"

const getErrorMessage = (errorType: string, value?: number) => {
  switch (errorType) {
    case "maxLength":
      return `文字数は${value}文字までです`
    case "required":
      return "入力必須です"
    default:
      return ""
  }
}

type createFormValues = AddTodoInput

export const CreateForm = () => {
  const methods = useForm<createFormValues>({
    defaultValues: {
      title: "",
      content: "",
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

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
          {...register("title", { required: "入力必須です", max: 20 })}
        />
        {errors.title && getErrorMessage(errors.title.type)}
        <div>
          <input type="text" placeholder="備考" {...register("content")} />
        </div>
        <button type="submit">登録</button>
      </form>
    </FormProvider>
  )
}
