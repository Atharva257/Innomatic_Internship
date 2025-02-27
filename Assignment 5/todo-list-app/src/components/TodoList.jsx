import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdDelete, MdEdit, MdCheck } from "react-icons/md";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEdit = (id, text) => {
    setEditTaskId(id);
    setNewTask(text);
  };

  const saveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTaskId ? { ...task, text: newTask } : task
      )
    );
    setEditTaskId(null);
    setNewTask("");
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <h1>Todo List</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={editTaskId ? saveEdit : addTask}>
          {editTaskId ? "Save" : "Add"}
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              <AnimatePresence>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided) => (
                      <motion.li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={task.completed ? "completed" : ""}
                      >
                        <span>{task.text}</span>
                        <div className="actions">
                          <MdCheck onClick={() => toggleComplete(task.id)} />
                          <MdEdit onClick={() => startEdit(task.id, task.text)} />
                          <MdDelete onClick={() => deleteTask(task.id)} />
                        </div>
                      </motion.li>
                    )}
                  </Draggable>
                ))}
              </AnimatePresence>
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;