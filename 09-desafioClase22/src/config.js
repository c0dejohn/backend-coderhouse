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
		private_key:
			"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1YQsQ3zdeq4Hj\n93GPS1AMFk78SRJblJaPOrJZWl2/eYWbSwrpl8p7m6txygeTyPyB6k7rfBLGcPn3\negK1gKS4TO4ZrroYW+VTLsQzKFXCqX0jgacpR050RUAcXl6OCtZWKf+6xEDczose\n3CbURhaYuwYGjJFymdVgJ2NH9sfwoC50804AX2OxVRXg+YPn6e1BWWOq4xq0Nzuh\nKtzsMTiFxdgahvreF0Z1MRf+W7AtJnLlRwdKyf+TJO9hsrxg5NVBx4VAHc04YSs0\n7BQjB/65OFZjA7bH6cGtYVbHQTG1h7V9UbDEbYGgfgXWPobWZxJ27niNiJv1+sHd\ntkdhY4KpAgMBAAECggEAQK1RnlsSafo7b5h5UJEZAq5jzPebibeS9pEGLvGX02LY\nfzdDtWdQp0Ir4QAbMpotXIA6UyNjqIp5wEMsOx+b3TJlhxf0uSHvxPk8skdUSX1Z\np7MgcgpA0hotkdAe5IS9yGziiW1Y+cPW/RKg7/nsLdsm+2fdp6FuYoK5FtzLkCRb\nDtN791baKHIj3WMwDE8rRaLqHYjnfcX9zf/5LpHMLNfIvapV8hP2n2ViBC6rnUUk\nqqkrjsY0iblOoFXhm/M2iL1xrGwe6cke908zVONTaBG7LISwWixiZ2hZJFEThk1g\n6XzgUjQH/6baksktZk4VdYZfpkEggF1ShHpJ5Cm4nwKBgQD5LrpQWT4Ddbfmdg+k\neSLiJVcXc888GXAmfoYB6Bq+cF0htVaJy55ZrF8oXSB6JVC05FNQI+Cb1o7jP7EW\nV8csn6wDgdjkZ4h2kOxrSdW7ydaTowMJ4Nx3o02d0eerNJjeZtLxhqrsqfB9DhGS\n3HsmNZ3LfHB9IFJKf1NDO9uilwKBgQC6V2uvUGUhE8OQ80S8NAgqrUHoTj79z9dZ\nXBdufWGT8g85g93HOAlCMT5IMLogRS64bLDY2p3VVcfCpLLLKBdtAjjWmnSzNKyN\nC+km8ErE0VJEu5bpX2OxC9wfZanNJQ236x+PeTeLuftbDRIj1iDKqBpCBiMBoVBt\nOiEypK7svwKBgAibrKQJ8TJ9ZpT3jyLHbIUTdSbCQW56En3B8S8vrXzWtODtOsgX\n2KiQY9kpHm4Zy+fz20zxcFjx2I3RLXTwI1lPSsn0OmHpkbVG3GP4cQHDvz3qa7hz\npCod4hiJn88ySfWk57SgSldSp5QqYEEKjNaNE55r9hbcfvtD2sR/1N6RAoGBAIPI\nwcqp8+uRu7Sup0TnE4ODJuJxPBFqxWVYQOYOXE0yWtwVS2rSUZHzm5WYiHm8E8+w\nZt3mtssisHUS37PX9cFNWf9EGxaGQSY7bzfvpyFM3H7poFAJ+0pCFfpKfu0rsGkL\nKzXfx43VCVQaiWK41FYezvs0tds4R9YHz2SunVunAoGAItr81BwJzPADqtUBP1Uc\ntLplPOTVA82e9wddYR9xokbwUTqIiWnRujzNUL+blBW9+UkxTCRIBUJzr6V5LTlk\nZcSBTkXXpxM0TKmLjpskhmxVahL5NXIjYSezkQVa1RzCtQuLdxTj85wQ6YtSuW87\nX9sGn5Ll0Xp6I1sA8/Mqbqw=\n-----END PRIVATE KEY-----\n",
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
