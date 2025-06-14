import { Search } from "lucide-react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const { search, setSearch } = useContext(TaskContext);
  return (
    <div className="w-full max-w-md mx-auto bg-white p-3 rounded-2xl shadow-md flex items-center gap-3">
      <Search size={24} className="text-gray-500" />
      <input
        value={search}
        type="text"
        placeholder="Search task name..."
        className="flex-1 outline-none border-none bg-transparent text-gray-800 placeholder-gray-400"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
