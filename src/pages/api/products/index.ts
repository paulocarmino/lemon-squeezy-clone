import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@/utils/prisma'

// GET /api/products
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (session) {
    const products = await prisma.product.findMany({})

    res.json(products)
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
