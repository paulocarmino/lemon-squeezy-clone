import faker from '@faker-js/faker'
import fetch from 'cross-fetch'
import prisma from '../src/utils/prisma'

const desiredUsers = 4
const desiredProducts = 12

// Users
const createUser = async () => {
  const email = faker.internet.email().toLowerCase()
  const name = faker.name.findName()

  return await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      name
    }
  })
}

const createUsersBatch = async () => {
  const users = []

  for (let i = 0; i < desiredUsers; i++) {
    users.push(await createUser())
  }

  // Create my example user
  const myUser = await prisma.user.upsert({
    where: { email: 'contato@paulocarmino.com' },
    update: {},
    create: {
      email: 'contato@paulocarmino.com',
      name: 'Paulo Carmino'
    }
  })

  users.push(myUser)

  console.log('#### Example User #### =>', myUser)
}

// End Users

// Products
const createProduct = async () => {
  const singlePhoto = await fetch('https://loremflickr.com/320/240/product').then(
    (photo) => photo.url
  )
  const name = faker.commerce.productName()
  const description = faker.commerce.productDescription()
  const price = faker.commerce.price()
  const status = Math.random() < 0.1 ? 'DRAFT' : 'PUBLISHED' // 10% de chance de ser DRAFT
  const photos = [singlePhoto]

  return await prisma.product.create({
    data: {
      name,
      description,
      price,
      status,
      photos
    }
  })
}

const createProductsBatch = async () => {
  const products = []

  for (let i = 0; i < desiredProducts; i++) {
    products.push(await createProduct())
  }

  console.log('#### Example Product #### =>', products[0])
}
// End Products

const main = async () => {
  await createUsersBatch()
  await createProductsBatch()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
