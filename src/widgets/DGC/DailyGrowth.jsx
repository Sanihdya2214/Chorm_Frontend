import React, { useState } from "react";

const DailyGrowthChecklist = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Read a chapter of a book", completed: false },
    { id: 2, text: "Exercise for 30 minutes", completed: false },
    { id: 3, text: "Meditate for 10 minutes", completed: false },
   
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    const newTaskObj = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-xl rounded-2xl overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <h2 className="text-3xl font-semibold mb-6 text-white text-center">
        Daily Growth Checklist
      </h2>
      <form onSubmit={handleAddTask} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="p-3 border border-gray-300 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 ease-in-out transform hover:scale-105"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Add
          </button>
        </div>
      </form>
      <ul className="space-y-4 max-h-64 overflow-y-auto">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-4 bg-white rounded-lg shadow-md transition-all duration-300 ${
              task.completed
                ? "line-through text-gray-400 bg-opacity-75"
                : "text-gray-800"
            }`}
          >
            <span
              onClick={() => toggleTaskCompletion(task.id)}
              className="cursor-pointer select-none"
            >
              {task.text}
            </span>
            {task.completed && (
              <button
                onClick={() => deleteTask(task.id)}
                className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-red-500 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyGrowthChecklist;
