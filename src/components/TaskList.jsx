import { Trash } from "lucide-react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskList() {
  const { task, toggleComplete, search, DeleteTask, dark } =
    useContext(TaskContext);
  const filteredTasks = task.filter((ts) =>
    ts.taskname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-black rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Task List
      </h2>
      {filteredTasks.length > 0 ? (
        <ul className="space-y-3">
          {filteredTasks.map((ts) => (
            <li
              key={ts.id}
              className="flex items-center justify-between gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
              <span
                className={`flex-1 ${
                  ts.completed ? "line-through text-gray-400" : ""
                }`}>
                {ts.taskname}
              </span>
              <span> {ts.Priority}</span>
              <input
                type="checkbox"
                checked={ts.completed}
                onChange={() => toggleComplete(ts.id)}
                className="mr-2"
              />
              <button
                className="hover:cursor-pointer"
                onClick={() => DeleteTask(ts.id)}>
                <Trash color="red" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-12">
          <span className="text-gray-500 text-lg">No tasks Found</span>
          <p className="text-gray-400 text-sm mt-1">
            Try searching something else!
          </p>
        </div>
      )}
    </div>
  );
}

export default TaskList;
