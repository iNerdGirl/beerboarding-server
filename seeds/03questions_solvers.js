
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, questions_id: 1, solvers_id: 2},
        {id: 2, questions_id: 2, solvers_id: 1},
        {id: 3, questions_id: 3, solvers_id: 2}
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE question_solvers_id_seq RESTARTS WITH 4;');
    });
};
