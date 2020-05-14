
exports.up = function(knex) {
  return knex.schema.createTable('sale', table => {
      table.increments();
      table.timestamps(true, true);
      table.integer('car').unsigned().notNullable();
      table.foreign('car').references('id').inTable('cars')
      table.string('customer_name').notNullable();
      table.string('phone').notNullable();
      table.string('address').notNullable();
      table.string('city').notNullable();
      table.string('state').notNullable();
      table.string('zipcode').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sale')
};
