
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments();
      table.string('vin', 17).notNullable().unique();
      table.string('make', 64).notNullable();
      table.string('model', 64).notNullable();
      table.integer('mileage', 6).notNullable();
      table.string('transmission');
      table.string('title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableifExists('cars');
};
