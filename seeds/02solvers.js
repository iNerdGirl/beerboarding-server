
exports.seed = function(knex, Promise) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        {id: 1, solver_name: 'Autumn Raine'},
        {id: 2, solver_name: 'Davia DeNisco'}
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE solver_id_seq RESTART WITH 3;');
    });
};
