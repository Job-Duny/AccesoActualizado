// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { pool } from '@/config/DB'
import { DataUserRowData } from '@/types/types'


type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const [rows] = await pool.query<DataUserRowData[]>('SELECT NOW()')
  return res.status(200).json(rows[0]['NOW()'])
}
