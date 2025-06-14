import { useContext } from "react";
import SearchBar from "./components/SearchBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";
import { TaskContext } from "./context/TaskContext";
import { Moon, Sun } from "lucide-react";

function App() {
  const { dark, handleToggle } = useContext(TaskContext);
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black p-6 space-y-6 w-full">
        <button
          onClick={handleToggle}
          className="p-2 m-4 bg-gray-300 dark:bg-gray-900 rounded-lg absolute top-0 right-0">
          {dark ? <Moon color="white" /> : <Sun />}
        </button>
        <h1 className="text-3xl font-bold text-center text-blue-950 dark:text-white mb-4">
          Task Manager
        </h1>

        <TaskForm />
        <SearchBar />

        {/* ✅ Separate flex row just for TaskList + TaskStats */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* TaskList takes more space */}
          <div className="flex-1">
            <TaskList />
          </div>

          {/* TaskStats stays compact */}
          <div className="w-full md:max-w-xs">
            <TaskStats />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
