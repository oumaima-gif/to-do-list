import React, { useContext } from "react";
import data from "./data";
import { tdd } from "./Mycontext";
import Task from "./Task";
export default function Ccontent() {
  const {
    task,
    setTask,
    tasks,
    settasks,
    addTask,
    deleteTask,
    donef
  } = useContext(tdd);
  return (
    <div className="container  ">
      <div className=" col-md-12  d-flex justify-content-center align-items-center">
        <div className="card w-75  ">
          <div className="card-body ">
            <h3 className="card-title">Todo Liste</h3>
            <div className="d-flex justify-content-center align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="entrer tache"
                value={task}
                onChange={(e) => {
                  setTask(e.target.value);
                }}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={addTask}
              >
                Add
              </button>
            </div>
          </div>
          <div className="liste ">
            <ul className="">
              {tasks.map((t) => {
                return (
                  <li key={t.id}>
                    <Task
                      donef={() => donef(t.id)}
                      done={t.done}
                      delf={() => deleteTask(t.id)}
                      txt={t.nom}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
