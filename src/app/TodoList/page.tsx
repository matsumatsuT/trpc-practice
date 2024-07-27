"use client"
import { clientApi } from "@/app/_trpc/client-api"
import { CreateForm } from "@/components/todo/createForm"
import { QueryObserverResult } from "@tanstack/react-query"
import { TRPCClientErrorLike } from "@trpc/client"
import { DefaultErrorShape } from "@trpc/server/unstable-core-do-not-import"
import { useForm } from "react-hook-form"
import styled from "styled-components"

type Todo = {
  title: string
  content: string | null
  id: number
  isDone: boolean
}

const TodoList = () => {
  const { data, refetch } = clientApi.todoList.getAll.useQuery()

  return (
    <Wrapper>
      <Title>TODOリスト</Title>

      <CreateForm refetch={refetch as QueryObserverResult["refetch"]} />
      <ul>
        {data?.map((todo) => (
          <Item key={todo.id}>
            <Text16>{todo.title}</Text16>
            <Text12>{todo.content}</Text12>

            {/* isDoneの実装をする */}
            <input type="checkbox" checked={todo.isDone} />
          </Item>
        ))}
      </ul>
    </Wrapper>
  )
}

export default TodoList

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: 8,
})
const Title = styled.div({
  fontSize: 16,
  fontWeight: "bold",
})
const Text16 = styled.div({
  fontSize: 16,
})
const Text12 = styled.div({
  fontSize: 12,
})

const Item = styled.li({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
})
