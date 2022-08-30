import { createContext, useState,useEffect } from "react";



export const TaskContext = createContext()

export const TaskProvaider = ({children}) =>{
    
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const dataTask = JSON.parse(sessionStorage.getItem("task"))
        if(dataTask){
            setTasks(dataTask)
        }
    }, [])

    useEffect(() => {
      sessionStorage.setItem("task",JSON.stringify(tasks))

    }, [tasks])

    const createTask = ({title,description}) => {
        setTasks([...tasks, {
            id: tasks.length,
            title,
            description
        }])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    
    
    
    return(
        <TaskContext.Provider value={{tasks, createTask, deleteTask}}>
            {children} 
        </TaskContext.Provider>
    )
}