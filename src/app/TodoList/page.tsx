"use client"
import { clientApi } from "@/app/_trpc/client-api"
import { CreateForm } from "@/components/todo/createForm"
import { useForm } from "react-hook-form"
import styled from "styled-components"

const TodoList = () => {
  const { data } = clientApi.todoList.getAll.useQuery()

  return (
    <Wrapper>
      <Title>TODOリスト</Title>

      <CreateForm />
      <ul>
        {data?.map((todo) => (
          <Item key={todo.id}>
            <Text16>{todo.title}</Text16>
            <Text12>{todo.content}</Text12>

            {/* isDoneの実装をする */}
            <input type="checkbox" />
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
