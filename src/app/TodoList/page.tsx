"use client"
import { clientApi } from "@/app/_trpc/client-api"
import { CreateForm } from "@/components/todo/createForm"
import { UpdateDoneInput } from "@/server/router/todoList"
import { QueryObserverResult } from "@tanstack/react-query"
import styled from "styled-components"

const TodoList = () => {
  const { data, refetch } = clientApi.todoList.getAll.useQuery()

  const updateDoneMutation = clientApi.todoList.updateDone.useMutation()

  const onUpdateDone = (values: UpdateDoneInput) => {
    updateDoneMutation.mutate(
      {
        id: values.id,
        isDone: changeDone(values.isDone),
      },
      {
        onSettled: () => refetch(),
      }
    )
  }

  const changeDone = (currentDone: boolean) => {
    return !currentDone
  }

  return (
    <Wrapper>
      <Title>TODOリスト</Title>

      <CreateForm refetch={refetch as QueryObserverResult["refetch"]} />
      <ul>
        {data?.map((todo) => (
          <Item key={todo.id}>
            <Text16>{todo.title}</Text16>
            <Text12>{todo.content}</Text12>
            <input
              type="checkbox"
              defaultChecked={todo.isDone}
              onClick={() => onUpdateDone({ id: todo.id, isDone: todo.isDone })}
            />
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
