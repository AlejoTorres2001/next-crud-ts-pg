import {NextApiRequest,NextApiResponse} from "next"

export default function index(req:NextApiRequest,res:NextApiResponse){
    return res.send('Hello World');

}
