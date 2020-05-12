
exports.up = function(knex) {
    return knex.schema.table('sale', table => {
        table.string('car')
    })
};

exports.down = function(knex) {
  return knex.schema.table('sale', table => {
      table.dropColumn('car');
  })
};
