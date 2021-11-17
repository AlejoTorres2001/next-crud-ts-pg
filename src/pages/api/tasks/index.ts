import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/database";
export default async function task(req: NextApiRequest, res: NextApiResponse) {
  const { method,body } = req;
  switch (method) {
    case "GET":
        return res.status(200).json("getting task");

    case "POST":
        const { title, description } = body;

        const query = "INSERT INTO tasks(title,description) VALUES($1,$2)"
        const values = [title,description];
        const response = await conn.query(query,values);
        console.log(response)
        return res.status(200).json("creating task");

    default:
        return res.status(400).json("method not allowed");
  }
}
