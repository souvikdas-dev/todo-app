export default function AddTaskForm() {
  return (
    <form className="relative w-full my-4" onSubmit={() => alert(1)}>
      <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 text-gray-500"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        id="voice-search"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-medium ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Add something to get done..."
        required
        autoComplete="off"
      />
      <button
        type="button"
        className="absolute inset-y-0 flex items-center end-0 pe-3"
      >
        <svg
          className="w-4 h-4 text-gray-500 hover:text-gray-900"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
          />
        </svg>
      </button>
    </form>
  );
}
