import express from "express";
import {
  authenticateArtista,
  logoutArtista,
  registerArtista,
} from "../controllers/Artista/authArtistaController";
import {
  deleteArtista,
  listArtista,
  updateArtista,
  getArtistaById,
} from "../controllers/Artista/artistaControllers";

const router = express.Router();

router.post("/registrar", registerArtista);
router.get("/logout", logoutArtista);
router.get("/listar", listArtista);
router.get("/listarId/:id", getArtistaById);
router.delete("/deleteArtista/:artistaId", deleteArtista);
router.patch("/atualizaArtista/:id", updateArtista);

export default router;
