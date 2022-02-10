require("dotenv").config();

// Update with your config settings.

module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./src/database/mensajes.sqlite3"
		},
		useNullAsDefault: false
	},

	production: {
		client: "mysql",
		connection: {
			database: process.env.DB,
			user: "root",
			password: process.env.PASS || "",
			host: "127.0.0.1",
			port: process.env.PORT || "3306"
		},
		pool: {
			min: 0,
			max: 7
		},
		migrations: {
			tableName: "knex_migrations"
		}
	}
};
