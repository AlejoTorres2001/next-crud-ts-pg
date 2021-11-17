import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default  (req:NextApiRequest,res:NextApiResponse)=> {
    const { method } = req;
    switch (method) {
        case "GET":
            return res.status(200).json("getting task");
        case "PUT":
            return res.status(200).json("updating task");
        case "DELETE":
            return res.status(200).json("deleting task");            
        default:
            return res.status(400).json("method not allowed");
    }
}