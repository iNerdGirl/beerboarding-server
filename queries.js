const database = require('./database_connection');

module.exports = {
  list(table) {
    return database(table).select();
  },
  read(table, id) {
    return database(table).select().where('id', id).first();
  },
  create(table, item) {
    return database(table).insert(item).returning('*').then(record => record[0]);
  },
  update(table, id, question) {
    return database(table).update(question).where('id', id).returning('*').then(record => record[0]);
  },
  delete(table, id) {
    return database(question).delete().where('id', id);
  },
  solvedBy(questionID) {
    return database(table).join('question_solver', 'solvers_id', '=', 'question_solvers.solver_id').join('questions', 'questions.id', '=', 'question_solvers.questions_id').select('solvers.solvers_name').where('questions.id', questionID);
  }
};
