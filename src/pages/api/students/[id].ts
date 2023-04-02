import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '@/config/DB';
import { DataUserRowData } from '@/types/types';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const {
        query: { id },
    } = req;

    switch (req.method) {
        case 'GET': {
            console.log('getting students');
            const [result] = await pool.query<DataUserRowData[]>('SELECT * FROM user WHERE usuTicket = ?', [id]);
            // console.log(result + 'result');

            console.log(result);

            if (res.status(200)) {
                return res.status(200).json(
                    {
                        data: result[0]
                    }
                )
            } else {
                return res.status(404).json({ message: 'Not found' })
            }
        }
            break;

        case 'DELETE':
            return deleteUser(req, res);
            break;



    }
}

const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
    } = req;

    const [result] = await pool.query<DataUserRowData[]>('DELETE FROM user WHERE usuId = ?', [id]);
    // console.log(result + 'result');

    console.log(result);

    if (res.status(200)) {
        return res.status(200).json("")
    } else {
        return res.status(404).json({ message: 'Not found' })
    }
}