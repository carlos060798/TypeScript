import { useState } from "react";
import Task from "../src/interfaces/Task";
import List from "./componets/tasklist";
import Form from "./componets/taskForm";
function App() {
  const [tasks, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "Tarea 1",
      name: "prueba 1",
      done: false,
    },
  ]);
const addTask = (task: Task) => {
    setTask([...tasks,{ ...task ,id:10,done:false}]);
}

const deleteTask = (id:number) => {
  setTask(tasks.filter(task => task.id !== id));
}
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Crear Task
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Form  addTask={addTask} />
          </div>
          <div className="col-12 col-md-6">
            <List tasks={tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
