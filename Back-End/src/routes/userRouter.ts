import express from "express";
import { logoutUsuario } from "../controllers/Usuario/authUsuarioController";
import {
  listUsuario,
  getUsuario,
  createUsuario,
  deleteUsuario,
} from "../controllers/Usuario/userController";

const router = express.Router();
router.get("/todosUsuarios", listUsuario);

router.get("/:id", getUsuario);

router.post("/registrarUsuario", createUsuario);
router.post("/logoutUsuario", logoutUsuario);
router.delete("/deletaUsuario/:usuarioId", deleteUsuario);
router.patch("atualizarUsuario/:usuarioId");

export default router;
