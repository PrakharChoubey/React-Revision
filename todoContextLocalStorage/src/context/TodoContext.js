import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    removeTodo: (id) => { },
    toggleComplete: (id) => { },
})

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);