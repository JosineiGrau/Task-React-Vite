import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskList = () => {

    const { tasks } = useContext(TaskContext)

    if(tasks.length === 0){
        return(
          <h1 className="text-center text-white text-4xl font-bold">No hay tareas</h1>
        )
    }

    return (
        <div className="grid grid-cols-4  gap-3">
            {
                tasks.map(({title,description,id}) => {
                    return(
                        <TaskCard 
                        key={id} 
                        title={title} 
                        description={description}
                        id={id}
                        />
                    )
                })
            }
        </div>
    )
}
export default TaskList
