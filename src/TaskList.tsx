import { useEffect, useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=100")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="relative flex-1 pr-3 pl-1 overflow-y-auto select-none overscroll-contain soft-scrollbar scroll-smooth [mask-image:linear-gradient(to_bottom,_transparent_0,_black_16px,_black_calc(100%_-_16px),_transparent_100%)]">
      <div className="space-y-2 snap-y">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="group px-3.5 first:mt-3 scroll-mt-2.5 py-2 backdrop-blur-2xl bg-white/70 shadow rounded capitalize snap-start hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <input
              type="checkbox"
              checked={task.completed}
              readOnly
              className="me-2 peer"
            />
            <span className="group-has-[:checked]:line-through peer-checked:text-slate-400">
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
