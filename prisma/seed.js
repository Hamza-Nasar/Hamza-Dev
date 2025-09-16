import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // example: ek dummy message insert karna
    await prisma.message.create({
        data: {
            name: 'Hamza',
            email: 'test@example.com',
            content: 'Hello from seed!',
        },
    })
}

main()
    .then(() => {
        console.log('Seeding finished.')
    })
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
