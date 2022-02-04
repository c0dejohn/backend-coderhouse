const db = require("../database/db");

class Producto {
	async nuevoProducto(producto) {
		//
		try {
			const payload = {
				title: producto.title,
				price: producto.price,
				thumbnail: producto.thumbnail
			};
			console.log(payload);
			const id = db("products").insert(payload).returning("id");
			//return id;
			return '{success: "Producto agregado."}';
		} catch (err) {
			console.log("[falla al guardar]", err);
		}
	}

	async mostrarProducto(id) {
		try {
			return await db("product")
				.select("id", "title", "price", "thumbnail")
				.whereIn("id", id);
		} catch (error) {
			console.log(error);
		}
	}

	async listarProducto() {
		try {
			return await db("product").select("id", "title", "price", "thumbnail");
		} catch (error) {
			console.log(error);
			return "[]";
		}
	}

	async actualizarProducto(cambios, id) {
		try {
			const { title, thumbnail, price } = cambios;
			const timestamp = db.fn.now();
			const [products] = await db("product").where("id", id).update({
				title: title,
				thumbnail: thumbnail,
				price: price,
				updated_at_utc: timestamp
			});
			return products;
		} catch (error) {
			console.log(error);
		}
	}

	async eliminarProducto(id) {
		try {
			const [products] = await db("product").whereIn("id", id).del();
			return products;
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new Producto();
