import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, settodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res) {
    const data = await res.json();
    // console.log(data.allTodos);
    settodos(data.allTodos);
  })
  return (
    <>
    <CreateTodo />
    <Todos todos = {todos}></Todos>
    </>
  )
}

export default App
