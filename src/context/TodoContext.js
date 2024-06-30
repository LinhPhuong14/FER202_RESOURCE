import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const TodoContext = createContext()

const TodoProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    const [filterUsers, setFilterUsers] = useState([])
    const [filterCompleted, setFilterCompleted] = useState("")

    useEffect(() => {
        axios.get("http://localhost:9999/user").then((res) => {
            setUsers(res.data)
            setFilterUsers(res.data.map((user) => user.id.toString()))
        })
        axios
            .get("http://localhost:9999/todo")
            .then((res) => setTodos(res.data))
    }, [])

    const changeStatus = (id) => {
        const todo = todos.find((todo) => todo.id === id)
        todo.completed = !todo.completed
        axios.put(`http://localhost:9999/todo/${id}`, todo).then(() => {
            setTodos(todos.map((t) => (t.id === id ? todo : t)))
            setMessage(`Change success `)
        })
    }

    const clear = () => setMessage(null)

    return (
        <TodoContext.Provider
            value={{
                users,
                todos,
                changeStatus,
                message,
                clear,
                filterUsers,
                setFilterUsers,
                filterCompleted,
                setFilterCompleted,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider
