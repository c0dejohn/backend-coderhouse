require("dotenv").config();

export default {
	fileSystem: {
		path: "./DB"
	},
	mongodb: {
		cnxStr: "mongodb://localhost/ecommerce",
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			serverSelectionTimeoutMS: 5000
		}
	},
	firebase: {
		type: "service_account",
		project_id: "practical-bolt-311921",
		private_key_id: "9ece4d6b798c7215e148182e866a9e4e3412e36e",
		private_key: process.env.KEY.replace(/\\n/g, "\n"),

		client_email:
			"firebase-adminsdk-un2y3@practical-bolt-311921.iam.gserviceaccount.com",
		client_id: "108441593184596700430",
		auth_uri: "https://accounts.google.com/o/oauth2/auth",
		token_uri: "https://oauth2.googleapis.com/token",
		auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
		client_x509_cert_url:
			"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-un2y3%40practical-bolt-311921.iam.gserviceaccount.com"
	},
	sqlite3: {
		client: "sqlite3",
		connection: {
			filename: `./DB/ecommerce.sqlite`
		},
		useNullAsDefault: true
	},
	mariaDb: {
		client: "mysql",
		connection: {
			host: "localhost",
			user: "coderhouse",
			password: "coderhouse",
			database: "coderhouse"
		}
	}
};
