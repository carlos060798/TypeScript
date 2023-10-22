import Task from "../interfaces/Task";
import Card from "./taskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

function List({ tasks, deleteTask }: Props) {
  return (
    <>
      <div className="container">
        {tasks.map((task: Task) => (
          <Card task={task} key={task.id}  deleteTask={deleteTask}/>
        ))}
      </div>
    </>
  );
}

export default List;
