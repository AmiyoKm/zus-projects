import React, { useState } from 'react'
import { useTodoStore } from '../store/useTodoStore'

const TodoList = () => {
   const {todos , addTodo , toggleTodo , removeTodo} =  useTodoStore()
   const [inputValue , setInputValue] = useState('')
    const handleAddTodo =() =>{
        if(inputValue.trim()==='') return


        addTodo({id : Date.now() , text : inputValue , completed : false})
        setInputValue('')
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className="bg-white p-6 rounded-lg w-full max-w-md ">
            <h1>To-Do List</h1>
            <div className="flex item0center mb-4">
                <input className='flex-grow px-4 py-2 border rounded-l-lg border-gray-300 focus:outline-none focus:ring-2   focus:ring-blue-500' type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder='Add a new to-do'/>

                <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg" onClick={handleAddTodo}>Add</button>
            </div>
            <ul className="space-y-3">
                {
                    todos.map((todo ,index)=>(
                        <li className='flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm' key={index}>
                            <div className="flex items-center mr-3">
                                <input  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'   checked={todo.completed} onChange={()=> toggleTodo(todo.id)}   type="checkbox" />
                                <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700' }`}>{todo.text}</span>
                            </div>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={()=> removeTodo(todo.id)}>Delete</button>
                        </li>
                    )

                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default TodoList