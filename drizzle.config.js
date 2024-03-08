const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

module.exports = {
    "out": "./migrations",
    "schema": "./src/models/schema.js",
    //"breakpoints": true,
    "driver":"mysql2",
    "dbCredentials": {
        "host": DB_HOST,
        "port": 3306,
        "user": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_NAME,
      }
}