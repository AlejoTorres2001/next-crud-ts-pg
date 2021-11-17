import { NextApiRequest, NextApiResponse } from "next";

export default function task(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case "GET":
        return res.status(200).json("getting task");

    case "PUT":
        return res.status(200).json("creating task");

    default:
        return res.status(400).json("method not allowed");
  }
}
