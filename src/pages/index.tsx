import React from "react";
import { Task } from "src/interfaces/task";
import { Grid, Button, GridRow } from "semantic-ui-react";
import { useRouter } from "next/router";
import TaskList from "src/components/tasks/TaskList";
interface Props {
  tasks: Task[];
}

const IndexPage = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      {props.tasks.length === 0 ? (
        <Grid
          columns={3}
          centered
          verticalAlign="middle"
          style={{ height: "70%" }}
        >
          <Grid.Row>
            <Grid.Column>
              <h1>No tasks yet</h1>
              <Button onClick={() => router.push("/tasks/new")}>
                Create ONE
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ) : (
        <TaskList tasks={props.tasks}></TaskList>
      )}
    </div>
  );
};
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();
  return {
    props: {
      tasks,
    },
  };
};

export default IndexPage;
