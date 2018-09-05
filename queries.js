const database = require('./database_connection');

module.exports = {
  list(table) {
    return database(table).select();
  }
}