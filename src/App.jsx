import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { TaskProvaider } from "./context/TaskContext"

const App = () => {
  return(
    <section className="bg-slate-600 h-screen">
      <div className="container mx-auto p-10">
        <TaskProvaider>
          <TaskForm />
          <TaskList />
        </TaskProvaider>
      </div>
    </section>
  )
}

export default App