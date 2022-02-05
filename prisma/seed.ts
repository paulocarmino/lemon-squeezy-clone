import faker from '@faker-js/faker'
import prisma from '../src/utils/prisma'

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
  const desiredUsers = 15

  for (let i = 0; i < desiredUsers; i++) {
    users.push(await createUser())
  }

  console.log('#### Example User #### =>', users[0])
}

const main = async () => {
  await createUsersBatch()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
