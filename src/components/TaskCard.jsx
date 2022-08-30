import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
const TaskCard = ({title,description,id}) => {

  const { deleteTask } = useContext(TaskContext)
  return (
    <div className="bg-slate-800 p-5 rounded-lg w-full">
        <div className="border-b border-b-slate-500 mb-2 pb-2">
          <h3 className="text-xl font-bold text-white ">{title}</h3>
        </div>
        <div>
          <span className="text-base text-white">{description}</span>

        </div>
        <button className="mt-5 rounded bg-white px-3 py-1 text-base font-semibold text-slate-900 hover:text-white hover:bg-slate-500 transition-all" onClick={()=>deleteTask(id)}>Borrar</button>
    </div>
  )
}

export default TaskCard