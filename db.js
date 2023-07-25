const Pool = require("pg").Pool;

const pool = new Pool({
    user: "nyluwekg",
    password: "QtkgppCP-gmFAnr6H20Mp4fTxywybzBr",
    host: "stampy.db.elephantsql.com",
    port: 5432,
    database: "nyluwekg"
});

module.exports = pool;