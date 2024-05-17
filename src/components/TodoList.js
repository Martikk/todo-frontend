import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [searchText, setSearchText] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [filterPriority, setFilterPriority] = useState('');

    const baseURL = 'https://to-do-martik-78cca75b2965.herokuapp.com';

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`${baseURL}/todos`);
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTodos();
    }, []);

    const addTodo = async () => {
        if (!newTodo.trim()) return;
        try {
            const response = await axios.post(`${baseURL}/todos`, { text: newTodo, due_date: dueDate, category, priority });
            setTodos([...todos, response.data]);
            setNewTodo('');
            setDueDate('');
            setCategory('');
            setPriority('Medium');
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    const toggleComplete = async (id, completed) => {
        try {
            const response = await axios.put(`${baseURL}/todos/${id}`, { completed: !completed });
            setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
        } catch (error) {
            console.error("Error toggling complete:", error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`${baseURL}/todos/${id}`);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(searchText.toLowerCase()) &&
        (!filterCategory || todo.category === filterCategory) &&
        (!filterPriority || todo.priority === filterPriority)
    );

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button className="add-btn" onClick={addTodo}>Add</button>

            <h2>Search and Filter</h2>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search tasks"
            />
            <input
                type="text"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                placeholder="Filter by category"
            />
            <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
                <option value="">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <div className="task-header">
                <span>Task</span>
                <span>Category</span>
                <span>Priority</span>
                <span>Due Date</span>
                <span>Action</span>
            </div>
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            onClick={() => toggleComplete(todo.id, todo.completed)}
                        >
                            {todo.text}
                        </span>
                        <span>{todo.category || 'None'}</span>
                        <span>{todo.priority || 'Medium'}</span>
                        <span>{todo.due_date ? new Date(todo.due_date).toLocaleDateString() : 'No due date'}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
