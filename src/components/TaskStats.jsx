import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ListTodo, Flame, CheckCircle2 } from "lucide-react";

function TaskStats() {
  const { task } = useContext(TaskContext);
  const total = task.length;
  const highPriorityTask = task.filter((t) => t.Priority === "High").length;
  const completed = task.filter((t) => t.completed).length;

  return (
    <div className="bg-white p-12 rounded-2xl shadow-md w-full max-w-sm mx-auto space-y-4 text-gray-800">
      <h2 className="text-xl font-semibold dark:text-amber-950">
        Task Summary
      </h2>
      <div className="flex justify-between">
        <span>Total Tasks:</span>
        <ListTodo className="animate-bounce" size={32} />
        <span className="font-bold">{total}</span>
      </div>
      <div className="flex justify-between">
        <span>High Priority:</span>
        <Flame size={32} />
        <span className="font-bold text-red-600">{highPriorityTask}</span>
      </div>
      <div className="flex justify-between">
        <span>Completed Tasks:</span>
        <CheckCircle2 size={32} />
        <span className="font-bold text-green-600">{completed}</span>
      </div>
    </div>
  );
}

export default TaskStats;
