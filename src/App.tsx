import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import Sidebar from "./Sidebar";
import AddTaskForm from "./AddTaskForm";

function App() {
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
    <div className="relative w-full mx-auto overflow-hidden bg-zinc-900 h-dvh">
      <div className="absolute inset-0 flex gap-6 lg:px-6 lg:pt-10 flex-nowrap">
        {/* Sidebar */}
        <div className="hidden w-64 h-full text-gray-300 bg-zinc-900 lg:block">
          <Sidebar />
        </div>

        {/* Task grid */}
        <div className="flex relative flex-col flex-1 p-2 lg:p-6 overflow-hidden bg-opacity-0 bg-[url('/images/irham-setyaki-CQxj1R1hKts-unsplash.jpg')] bg-no-repeat bg-cover flex-nowrap lg:rounded-t-xl">
          {/* Your content */}

          <div className="flex items-center justify-between px-2 py-3 lg:px-3 lg:py-4">
            <h1 className="inline-flex items-center text-3xl font-bold tracking-tight text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block w-8 me-1"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              <span>Tasks</span>
            </h1>
            <div className="flex items-center">
              <Dropdown />
              <button
                type="button"
                className="p-2 ml-5 -m-2 text-gray-700 hover:text-gray-900 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="p-2 ml-4 -m-2 text-gray-700 hover:text-gray-900 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

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

          <AddTaskForm />
        </div>
      </div>
    </div>
  );
}

export default App;
