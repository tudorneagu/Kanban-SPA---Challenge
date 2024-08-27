import { Router } from "express";
import boardController from "../controllers/boardController.js";
import controllerWrapper from "../middlewares/controller.wrapper.js";

const router = Router();

router.route("/boards").get(controllerWrapper(boardController.getAll));

export default router;
