import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import './Multilanguages2/task.css'
export const tdd = createContext();

export default function Mycontext({ children }) {
  const [task, setTask] = useState("");
  const [tasks, settasks] = useState([
    { id: uuidv4(), nom: "sport", done: false },
    { id: uuidv4(), nom: "film", done: false },
    { id: uuidv4(), nom: "coding", done: false },
  ]);
  const addTask = () => {
    let ntasks = [...tasks];
    let ntask = {};
    ntask.id = uuidv4();
    ntask.nom = task;
    ntasks.push(ntask);
    settasks(ntasks);
    setTask("");
  };
  const deleteTask = (idp) => {
    let ntasks = tasks.filter((t) => {
      return t.id !== idp;
    });
    settasks(ntasks);
  };
  const donef = (id) => {
    settasks(
      tasks.map((task) =>
        task.id === id ? { id: task.id, nom: task.nom, done: true } : task
      )
    );
  };

  return (
    
    <tdd.Provider
      value={{
        task,
        setTask,
        tasks,
        settasks,
        addTask,
        deleteTask,
        donef,
      }}
    >
      {children}
    </tdd.Provider>
  );
}
