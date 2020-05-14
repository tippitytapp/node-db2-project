
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: "12345678910111213", make: "honda", model:"cbr600rr", mileage: 111111},
        {vin: "14151617181920212", make: "ford", model:"f150", mileage: 111111},
        {vin: "22324252627282930", make: "chevy", model:"silverado", mileage: 111111}
      ]);
    });
};
