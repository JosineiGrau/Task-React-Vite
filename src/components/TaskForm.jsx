import { useState } from "react"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskForm = () => {

    const {createTask} = useContext(TaskContext)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        createTask({
            title,
            description
        })
        setTitle("")
        setDescription("")

    }

    return (
        <div className="bg-slate-800 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className=" bg-slate-800 p-10 mb-4">
                <input type="text" 
                value={title}
                placeholder="Escribe el titulo" 
                onChange={(e) => setTitle(e.target.value)}
                className="outline-none bg-transparent text-white border border-slate-500 px-3 py-2 mb-3 w-auto"
                />
                <textarea  rows="3" 
                value={description}
                placeholder="Escribe la tarea a realizar" 
                onChange={(e)=> setDescription(e.target.value)}
                className="outline-none bg-transparent text-white border border-slate-500 px-3 py-2 mb-3 w-full"
                />
                <button className="rounded bg-white px-4 py-2 text-base font-semibold text-slate-900 hover:text-white hover:bg-slate-500 transition-all">Guardar</button>
            </form>
        </div>
    )
}
export default TaskForm
