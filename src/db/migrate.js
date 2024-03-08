const { migrate } = require("drizzle-orm/mysql2/migrator");
const { db, connection } = require("./database");

(async () => {
    try {
        console.log("Start Connection Migrate");
        await migrate(db, { migrationsFolder: "./migrations" });
        console.log("End Migrate");
    } catch (e) {
        console.log(e);
    } finally {
        console.log("Start Connection End");
        await connection.end();
        console.log("End");
    }
})();