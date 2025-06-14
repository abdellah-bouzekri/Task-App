import { useRef } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const taskname = useRef(null);
  const Priority = useRef(null);
  const handelForm = (e) => {
    e.preventDefault();
    if (!taskname.current.value.trim()) {
      alert("you have to type a task");
      return;
    }
    const newTask = {
      id: Date.now(),
      taskname: taskname.current.value,
      Priority: Priority.current.value,
      completed: false, // 🔥 new property
    };
    addTask(newTask);
    taskname.current.value = "";
    Priority.current.value = "";
  };
  return (
    <>
      <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">
        <form onSubmit={handelForm} className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="taskname"
              className="block text-gray-800 dark:text-white  font-semibold text-lg mb-1">
              Task Name
            </label>
            <input
              type="text"
              name="taskname"
              ref={taskname}
              placeholder="Type your task..."
              className="w-full px-4 py-3 rounded-lg border placeholder:text-gray-950  border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="Priority"
              className="block text-gray-800 dark:text-white font-semibold text-lg mb-1">
              Priority
            </label>
            <select
              defaultValue=""
              name="Priority"
              id="Priority"
              ref={Priority}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="" disabled>
                Select priority
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="py-3 px-6 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all">
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;
