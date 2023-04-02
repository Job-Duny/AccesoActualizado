import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "@/config/DB";
import { OkPacket, RowDataPacket } from "mysql2";
import { DataUserRowData } from "@/types/types";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  switch (req.method) {
    case "GET":
      console.log('getting students');
      const [result2] = await pool.query<DataUserRowData[]>('SELECT * FROM user');
      return res.status(200).json(result2)
      break;

    case "POST":
      const { name, appPat, appMat, email, role, ticket } = req.body.data;

      const result = await pool.query<OkPacket>('INSERT INTO user SET ?', {
        usuUsername: name,
        usuAppPat: appPat,
        usuAppMat: appMat,
        usuEmail: email,
        usuRole: role,
        usuTicket: ticket
      });

      console.log(result[0]);
      

      return res.status(200).json({ name, appPat, appMat, email, role, ticket, id: result[0][ 'insertId'] })
      break;

      default:
        res.status(405).end(); // method not allowed
        break;
  }


}