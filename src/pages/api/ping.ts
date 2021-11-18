import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "src/utils/database";
type Pong = {
  message: string;
  timestamp: string;
};
export default async function index(
  req: NextApiRequest,
  res: NextApiResponse<Pong>
) {
  const response = await conn.query("SELECT NOW()");
  return res.json({ message: "Pong", timestamp: response.rows[0].now });
}
