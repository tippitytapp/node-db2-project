
exports.up = function(knex) {
  return knex.schema.table('cars', table=>{
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.table('cars', table => {
      table.dropColumn('created_at', 'updated_at');
  })
};
