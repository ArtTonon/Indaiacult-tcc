import express from 'express';
import { authenticateArtista } from '../controllers/Artista/authArtistaController';
import {
  createEvento,
  listEvento,
  getEvento,
  deleteEvento,
  updateEvento,
} from '../controllers/Evento/eventoControllers';

const router = express.Router();

router.post('/criarEvento', createEvento);
router.get('/todosEventos', listEvento);
router.get('/evento/:eventoId', getEvento);
router.delete('/deletarEvento/:eventoId', deleteEvento);
router.patch('/atualizarEvento/:id', updateEvento);

export default router;
