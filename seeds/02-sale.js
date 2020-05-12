
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sale').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sale').insert([
        {customer_name: "Marc", phone: "786-757-2036", address: "217 Cart Path Way", city: "Bonaire", state:"Georgia", zipcode: "31005"},
        {customer_name: "Alan", phone: "786-757-2036", address: "217 Cart Path Way", city: "Bonaire", state:"Georgia", zipcode: "31005"}
      ]);
    });
};
