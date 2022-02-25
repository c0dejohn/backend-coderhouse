import knex from "knex";
import config from "../src/config.js";

// opciones SQL: mariaDb, sqlite3

crearTablasProductos(knex(config.sqlite3));
crearTablasMensajes(knex(config.sqlite3));

//------------------------------------------

async function crearTablasProductos(sqlClient) {
	try {
		await sqlClient.schema.dropTableIfExists("product");

		await sqlClient.schema.createTable("productos", (table) => {
			table.increments("id").primary().unique(true).notNull();
			table.string("title").notNull();
			table.float("price");
			table.string("thumbnail");
			table.timestamp("created_at_utc").defaultTo(knex.fn.now());
			table.timestamp("updated_at_utc");
			table.index(["id", "title"], "index_product");
		});

		await sqlClient.destroy();

		console.log("tabla productos creada con éxito");
	} catch (error) {
		console.log("error al crear tabla productos");
		console.log(error);
	}
}

//------------------------------------------

async function crearTablasMensajes(sqlClient) {
	try {
		await sqlClient.schema.dropTableIfExists("message");

		await sqlClient.schema.createTable("carritos", (table) => {
			table.increments("id").primary().unique(true).notNull();
			table.string("user", 4).notNull();
			table.string("text");
			table.timestamp("created_at_utc").defaultTo(knex.fn.now());
			table.timestamp("updated_at_utc");
			table.index(["id", "user"], "index_message");
		});

		await sqlClient.destroy();

		console.log("tablas Mensajes creada con éxito");
	} catch (error) {
		console.log("error al crear tablas Mensajes");
	}
}
