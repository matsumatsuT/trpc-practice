"use client"
import { clientApi } from "@/app/_trpc/client-api"

const TodoList = () => {
  const { data } = clientApi.todoList.getAll.useQuery()

  return (
    <div>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>
            <div>タイトル：{todo.title}</div>
            <div>コンテント：{todo.content}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
