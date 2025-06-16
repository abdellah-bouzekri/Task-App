import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
const Tasks = [
  { id: 1, taskname: "Fix login bug", Priority: "High", category: "Work" },
  {
    id: 2,
    taskname: "Update landing page UI",
    Priority: "Medium",
    category: "Chill",
  },
  { id: 3, taskname: "Write unit tests", Priority: "Low", category: "Work" },
];
export const TaskContext = createContext();
function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(Tasks);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");
  const [dark, setDark] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDark(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);
  //  toggle for dark mode
  const handleToggle = () => {
    const newtheme = !dark ? "dark" : "light";
    setDark(!dark);
    document.documentElement.setAttribute("data-theme", newtheme);
    localStorage.setItem("theme", newtheme);
  };
  // Toggle completed state of task by id
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // Delete task by id
  const DeleteTask = (id) => {
    setTasks((perv) => perv.filter((task) => task.id !== id));
  };
  // Add new task
  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };
  const updateTask = (updatedTask) => {
    setTasks((perv) =>
      perv.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        setSearch,
        search,
        setTasks,
        toggleComplete,
        DeleteTask,
        addTask,
        dark,
        handleToggle,
        editingTask,
        setEditingTask,
        updateTask,
        setMsg,
        msg,
      }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
