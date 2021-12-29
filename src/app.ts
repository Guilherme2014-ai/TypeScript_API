import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import router from "./routes";
import errorHandler from "./middlewares/errorHandlerMiddleware";
import config from "./config/typeorm";

class App {
	app: express.Application = express();

	constructor() {
		// Inicialização
		this.Database();
		this.Middleware();
		this.Routes();
	}

	private Database() {
		createConnection({ type: "mysql", ...config }).catch((e) =>
			console.error(e),
		);
	}
	private Middleware() {
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
		this.app.use(cors());
	}

	private Routes() {
		this.app.use("/", router);
		//------------------------
		this.app.use(errorHandler); // Necessita vir dps das rotas
	}
}

export default new App().app;
