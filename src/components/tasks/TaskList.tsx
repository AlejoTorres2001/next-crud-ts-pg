import { Card, CardGroup } from "semantic-ui-react";
import { Task } from "src/interfaces/task";

interface Props {
  tasks: Task[];
}

const TaskList = ({ tasks }: Props) => {
  return (
    <Card.Group itemsPerRow={4}>
      {tasks.map((task) => (
        <Card key={task.id}>
          <Card.Content>
            <Card.Header>{task.title}</Card.Header>
          </Card.Content>
          {task.created_on && (
            <Card.Meta>
              {new Date(task.created_on).toLocaleDateString()}
            </Card.Meta>
          )}
          <Card.Content>
            <Card.Description>{task.description}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default TaskList;