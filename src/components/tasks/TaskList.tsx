import { Task } from "src/interfaces/task"

interface Props {
    tasks: Task[];
}

const TaskList = ({tasks}:Props) => {
    console.log(tasks)
    return (
        <div>
            
        </div>
    )
}

export default TaskList
