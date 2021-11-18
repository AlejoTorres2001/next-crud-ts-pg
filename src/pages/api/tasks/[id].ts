import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "src/utils/database";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { id } = query;
  switch (method) {
    case "GET":
      try {
        const query = `SELECT *  FROM tasks WHERE id = $1`;
        const result = await conn.query(query, [id]);

        if (result.rows.length === 0) {
          return res.status(400).json({ message: "Task not found" });
        }
        return res.status(200).json(result.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ error: error.message });
      }

    case "PUT":
      try {
        const query = `UPDATE tasks SET title=$1,description=$2 WHERE id = $3 RETURNING *`;
        const values = [req.body.title, req.body.description, id];
        const result = await conn.query(query, values);

        if (result.rows.length === 0) {
          return res.status(400).json({ message: "Task not found" });
        }
        return res.status(200).json(result.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ error: error.message });
      }

    case "DELETE":
      try {
        const query = `DELETE FROM tasks WHERE id = $1 RETURNING *`;
        const result = await conn.query(query, [id]);
        if (result.rowCount  === 0) {
          return res.status(400).json({ message: "Task not found" });
        }
        return res.status(200).json(result.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ error: error.message });
      }
    default:
      return res.status(400).json("method not allowed");
  }
};
