import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
const tasks = [
  { id: 1, taskname: "Fix login bug", Priority: "High" },
  { id: 2, taskname: "Update landing page UI", Priority: "Medium" },
  { id: 3, taskname: "Write unit tests", Priority: "Low" },
  { id: 4, taskname: "Optimize images", Priority: "Medium" },
];
export const TaskContext = createContext();
function TaskProvider({ children }) {
  const [task, setTask] = useState(tasks);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
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
    setTask((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };
  // Delete task by id
  const DeleteTask = (id) => {
    setTask((perv) => perv.filter((t) => t.id !== id));
  };
  // Add new task
  const addTask = (newTask) => {
    setTask((prev) => [...prev, newTask]);
  };
  return (
    <TaskContext.Provider
      value={{
        task,
        setSearch,
        search,
        setTask,
        toggleComplete,
        DeleteTask,
        addTask,
        dark,
        handleToggle,
      }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
