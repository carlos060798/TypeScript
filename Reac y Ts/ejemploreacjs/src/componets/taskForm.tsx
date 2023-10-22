import { v4 } from "uuid";
import { useState } from "react";
import Task from "../interfaces/Task";

interface Props {
  addTask: (task:Task) => void;
}

function Form({addTask}: Props ) {
  const inicalState = {
    
    title: "",
    name: "",
  }
  const [task, setTask] = useState(inicalState);

  const changeTask = (e:any) =>  setTask({ ...task, [e.target.name]: e.target.value });
 const handleSubmit = (e:any) => {
    e.preventDefault();

    addTask(task);
    setTask({
      title: "",
      name: "",
    });

 }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Task Form</h1>
        <div className="mb-3">
          <label className="form-label">Titulo</label>
          <input type="text" className="form-control" name="title" onChange={changeTask} value={task.title} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input type="text" className="form-control" name="name" onChange={changeTask} value={task.name} />
        </div>

        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    </>
  );
}

export default Form;
