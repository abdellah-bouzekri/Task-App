import { Trash } from "lucide-react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Edit2 } from "lucide-react";
function TaskList() {
  const { tasks, toggleComplete, search, DeleteTask, setEditingTask } =
    useContext(TaskContext);
  const filteredTasks = tasks.filter((task) =>
    task.taskname?.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-black rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Task List
      </h2>
      {filteredTasks.length > 0 ? (
        <ul className="space-y-3">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
              <div className="flex-1 min-w-0">
                <span
                  className={`text-lg font-semibold break-words ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}>
                  {task.taskname}
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    Priority: {task.Priority}
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    Category: {task.category}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-3 sm:mt-0">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
                />
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => DeleteTask(task.id)}
                  aria-label="Delete task">
                  <Trash color="red" size={24} />
                </button>
                <button
                  onClick={() => setEditingTask(task)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                  <Edit2 size={24} color="green" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-12">
          <span className="text-gray-500 text-lg font-medium">
            No tasks found
          </span>
          <p className="text-gray-400 text-sm mt-1">
            Try searching for something else or add a new task!
          </p>
        </div>
      )}
    </div>
  );
}

export default TaskList;
