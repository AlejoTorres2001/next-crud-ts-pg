import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Card, Form, Icon } from "semantic-ui-react";
import { Task } from "src/interfaces/task";
const NewPage = () => {
  const router = useRouter();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
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
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      createTask(task).then(() => {
        router.push("/");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Card>
        <Card.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                placeholder="write your title"
                name="title"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="description">description:</label>
              <textarea
                placeholder="write your description"
                name="description"
                rows={2}
                onChange={handleChange}
              />
            </Form.Field>
            <Button>
              <Icon name="save" />
              Save
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default NewPage;
