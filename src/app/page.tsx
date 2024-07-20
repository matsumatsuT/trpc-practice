import TodoList from "@/app/TodoList/page"
import Greeting1 from "./greeting/page"
import Greeting2 from "./greeting2/page"

export default function Home() {
  return (
    <>
      <Greeting1 />
      <hr />
      <Greeting2 />
      <hr />
      <TodoList />
    </>
  )
}
