import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, Card, Form, Grid, Icon,Confirm } from "semantic-ui-react";
import Layout from "src/components/Layout";
import { Task } from "src/interfaces/task";
const NewPage = () => {
  const router = useRouter();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const [openConfirm, setOpenConfirm] = useState(false);
  const getTaskData = async (id: string) => {
    const resp = await fetch(`http://localhost:3000/api/tasks/${id}`);
    const { title, description } = await resp.json();
    setTask({ title, description });
  };
  const updateTask= async(id:string,task:Task)=>{
    await fetch(
      `http://localhost:3000/api/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
  }
  useEffect(() => {
    if (typeof router.query.id === "string") getTaskData(router.query.id);
  }, [router.query.id]);
  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({ ...task, [name]: value });
  };
  const createTask = async (task: Task) => {
    await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
  };
  const handleDelete = async (id:string) => {
    await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    });
    setOpenConfirm(false);
    router.push("/");
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (router.query.id && typeof router.query.id === "string") {
        updateTask(router.query.id, task);
      } else {
      createTask(task).then(() => {
        
       
      });

    } 
    router.push("/");
    
  }
    catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <Grid centered columns={3} verticalAlign="middle" style={{height:'70%'}}>
        <Grid.Column>
        <Card>
        <Card.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label htmlFor="title">Title:</label>
              <input
                value={task.title}
                type="text"
                placeholder="write your title"
                name="title"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="description">description:</label>
              <textarea
                value={task.description}
                placeholder="write your description"
                name="description"
                rows={2}
                onChange={handleChange}
              />
            </Form.Field>
           {
             router.query.id ? (
              <Button color='teal'>
              <Icon name="save" />
              Update
            </Button>
             ):
             <Button primary>
             <Icon name="save" />
             Save
           </Button>
           }
           
          </Form>
        </Card.Content>
      </Card>
          {
            router.query.id && (

              <Button color="red"
              onClick={()=> setOpenConfirm(!openConfirm)}>
               delete
              </Button>

            ) 
          }
           

        </Grid.Column>
      </Grid>
      <Confirm
        header="delete a task"
        content={`Are you sure you want to delete task Number:${router.query.id}`}
        open={openConfirm}
        onCancel={()=>setOpenConfirm(!openConfirm)}
        onConfirm={()=>handleDelete(router.query.id as string)}
        />
    </Layout>
  );
};

export default NewPage;
