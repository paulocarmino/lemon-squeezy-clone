import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (1 > 2) {
    res.status(200).json({ name: 'John Doe' })
  }
}
