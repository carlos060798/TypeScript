import Task from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

function Card({ task, deleteTask }: Props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.name}</p>
          <button className="btn btn-danger" onClick={()=>task.id && deleteTask(task.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
