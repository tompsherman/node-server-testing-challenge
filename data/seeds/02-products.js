
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('products').insert([
    {id: 1, name: 'mallard fillmore'},
    {id: 2, name: 'daffy'},
    {id: 3, name: 'donald'}
  ]);
};
