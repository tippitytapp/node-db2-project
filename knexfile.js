require('dotenv').config()

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/cars.db3'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'./data/migrations'
    },
    seeds:{
      directory: "./data/seeds"
    }
  }

};
