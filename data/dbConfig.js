const knex = require('knex');
const knexfile = require('../knexfile.js')
const NODE_ENV = process.env.NODE_ENV;

module.exports = knex(knexfile[NODE_ENV]);