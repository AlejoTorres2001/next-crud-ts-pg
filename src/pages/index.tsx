import React, { useEffect } from "react";
import { Task } from "src/interfaces/task";
import { Grid, Button, GridRow } from "semantic-ui-react";
import { useRouter } from "next/router";
import TaskList from "src/components/tasks/TaskList";
import Layout from "src/components/Layout";
import { Toaster,toast } from "react-hot-toast";
interface Props {
  tasks: Task[];
}

const IndexPage = (props: Props) => {
  const router = useRouter();
  const previousPath=globalThis.sessionStorage?.getItem("currentPath")
  const isTaskCreated=previousPath === "/tasks/new";
  useEffect(() => {
    if(isTaskCreated)toast("tasks Successfully Created!", {type: "success"})
    else toast("Task Succesfully Updated", {type: "success"})
  },[])
  return (
     
    <Layout>
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
      <Toaster position="top-right"/>
    </Layout>
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
