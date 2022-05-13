import { createRequire } from 'https://deno.land/std/node/module.ts'
const require = createRequire(import.meta.url)

const { PrismaClient } = require('@prisma/client')

const client = new PrismaClient()

async function main() {
  await client.$connect()
  const result = await client.user.create({
    data: {
      username: 'John'
    }
  })
  
  console.log(result)
}

main().catch(console.error).finally(() => client.$disconnect())