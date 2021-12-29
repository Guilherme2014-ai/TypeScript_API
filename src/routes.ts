import { Router } from "express";
import LoginUserController from "./controllers/LoginUserController";
import ComplimentsReceivedsController from "./controllers/ComplimentsReceivedsController";
import CreateUserController from "./controllers/CreateUserController";
import CreateTagController from "./controllers/CreateTagController";
import CreateComplimentController from "./controllers/CreateComplimentController";
import TokenHandlerMiddleware from "./middlewares/TokenHandlerMiddleware";
import ComplimentsSentsController from "./controllers/ComplimentsSentsController";
import AllUsersControllers from "./controllers/AllUsersControllers";
const { TokenVerification, AdminVerification, SetPayloadToTheRequest } =
	TokenHandlerMiddleware;

const router = Router();

router.get(
	"/users",
	TokenVerification,
	AdminVerification,
	AllUsersControllers.execute,
);
router.post("/users/create", CreateUserController.execute);
router.post("/users/login", LoginUserController.execute);
router.get(
	"/users/compliments/receiveds",
	TokenVerification,
	SetPayloadToTheRequest,
	// Controller
	ComplimentsReceivedsController.execute,
);
router.get(
	"/users/compliments/sents",
	TokenVerification,
	SetPayloadToTheRequest,
	ComplimentsSentsController.execute,
);

router.post(
	"/compliments/create",
	TokenVerification,
	SetPayloadToTheRequest,
	// Controller
	CreateComplimentController.execute,
);
router.post(
	"/tags/create",
	// Middlewares
	TokenVerification,
	AdminVerification,
	// Controller
	CreateTagController.execute,
);

export default router;
