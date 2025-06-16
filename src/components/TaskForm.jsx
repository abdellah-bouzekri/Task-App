import { useRef } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import { useEffect } from "react";
import { MessageSquare } from "lucide-react";

function TaskForm() {
  const { addTask, editingTask, updateTask, setEditingTask, setMsg, msg } =
    useContext(TaskContext);
  const taskname = useRef(null);
  const Priority = useRef(null);
  const category = useRef(null);
  const handelForm = (e) => {
    e.preventDefault();
    if (!taskname.current.value.trim()) {
      setMsg("you have to type a taskname");
      taskname.current.focus();
      setTimeout(() => {
        setMsg("");
      }, 2500);
      return;
    }
    const newTask = {
      id: editingTask ? editingTask.id : Date.now(),
      taskname: taskname.current.value,
      Priority: Priority.current.value,
      category: category.current.value,
      completed: editingTask ? editingTask.completed : false,
    };
    // addTask(newTask);

    if (editingTask) {
      updateTask(newTask);
      setEditingTask(null);
    } else {
      addTask(newTask);
    }

    // Clear form inputs
    taskname.current.value = "";
    Priority.current.value = "";
    category.current.value = "";
  };
  useEffect(() => {
    if (editingTask) {
      taskname.current.value = editingTask.taskname;
      Priority.current.value = editingTask.Priority;
      category.current.value = editingTask.category;
      taskname.current.focus();
    }
  }, [editingTask]);
  return (
    <>
      <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">
        <div className="flex items-center">
          {msg && <p className="text-red-500 text-lg mt-2 font-bold">{msg}</p>}
        </div>
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
              className="w-full px-4 py-3 rounded-lg border dark:text-white text-black font-semibold dark:placeholder:text-white placeholder:text-gray-950  border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
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
            <label
              htmlFor="Priority"
              className="block text-gray-800 dark:text-white font-semibold text-lg mb-1">
              Category
            </label>
            <select
              defaultValue=""
              name="category"
              id="category"
              ref={category}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="" disabled>
                Select Category
              </option>
              <option value="Health">Health</option>
              <option value="Chill">Chill</option>
              <option value="Work">Work</option>
            </select>
          </div>

          <button
            type="submit"
            className="py-3 px-6 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all">
            {editingTask ? "Update Task" : "addTask"}
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;
