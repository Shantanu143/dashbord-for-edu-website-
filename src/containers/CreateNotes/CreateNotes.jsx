// import React from 'react'
import { useState } from "react";

const CreateNotes = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center ">
            <div className=" p-9 ">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Put Your Every Day Tasks
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4  ">
                <label htmlFor="email-address" className="sr-only">
                  Email Tasks
                </label>
                <input
                  value={newTask}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setNewTask(e.target.value);
                  }}
                  name="New Task"
                  type="text"
                  autoComplete="text"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter Your Tasks"
                />
                <button
                  type="submit"
                  onClick={addTask}
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Add Task
                </button>
              </div>
            </div>
            <div className=" p-9">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {tasks.map((task, index) => (
                    <>
                      <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                          <div className="p-6">
                            <h1 className="title-font text-lg font-medium  mb-3 text-white">
                              Task Number : {index + 1}
                            </h1>
                            <p
                              className="leading-relaxed mb-  text-gray-300"
                              key={index}
                            >
                              {task}
                            </p>

                            <button
                              type="submit"
                              onClick={() => deleteTask(index)}
                              className="flex-none rounded-md mt-2 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                              Delete Task
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CreateNotes;
