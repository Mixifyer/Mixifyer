'use strict'

const db = require('../server/db')
const {User, Product, Cocktail} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      name: 'Cody',
      lastName: 'Banks',
      email: 'cody@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      name: 'Murphy',
      lastName: 'Addy',
      email: 'murphy@email.com',
      password: '123'
    })
  ])

  const product = await Promise.all([
    Product.create({
      name: 'Mixifyer Bitter',
      category: 'bitter',
      type: 'dark',
      flavor: 'rhubarb',
      price: 299,
      volume: 4,
      inStock: 50
    }),
    Product.create({
      name: 'Mixifyer Vodka',
      category: 'spirit',
      type: 'Vodka',
      flavor: 'plain',
      price: 2199,
      volume: 16,
      inStock: 100,
      image: 'https://cdn.mos.cms.futurecdn.net/iHHBqNXQN5B66Qf2oKDKjh.jpg'
    }),
    Product.create({
      name: 'Mixifyer Soda',
      category: 'soda',
      type: 'sparkling',
      flavor: 'lemon',
      price: 199,
      volume: 8,
      inStock: 100
    }),
    Product.create({
      name: 'Carona',
      category: 'spirit',
      type: 'beer',
      flavor: null,
      price: 199,
      volume: 16,
      inStock: 100,
      image:
        'https://imbibemagazine.com/wp-content/uploads/2015/03/cranberry-bitters-crdt-stu-mullenberg.jpg'
    }),
    Product.create({
      name: 'Modelo',
      category: 'spirit',
      type: 'beer',
      flavor: 'lemon',
      price: 199,
      volume: 2,
      inStock: 0,
      image:
        'https://dydza6t6xitx6.cloudfront.net/ci-corona-extra-2501fe5ca490cb1d.jpeg'
    }),
    Product.create({
      name: 'Cranberry Juice Cons',
      category: 'non-alcoholic',
      type: 'Juice',
      flavor: null,
      price: 299,
      volume: 16,
      inStock: 100,
      image:
        'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hb9/h7a/10987886280734.png'
    })
  ])

  const cocktail = await Promise.all([
    Cocktail.create({
      name: 'Mixifyer Cocktail'
    })
  ])

  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
