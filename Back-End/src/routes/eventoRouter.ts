import express from "express";
import { getEvento } from "../controllers/Evento/eventoControllers";

const router = express.Router();

router.get("/:id", getEvento);

export default router;
