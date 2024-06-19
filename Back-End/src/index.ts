import express, { Router } from "express";
import authRouter from "./routes/authRouter";
import connectUserDB from "./connections/userDB";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter";
import { authenticate } from "./middleware/authMiddleware";
import { errorHandler } from "./middleware/errorMiddleware";
import eventoRouter from "./routes/eventoAuthRouter";
import obrasRouter from "./routes/obraAuthRouter";
import artistaRouter from "./routes/authRouter";

import {
  authenticateArtista,
  registerArtista,
} from "./controllers/Artista/authArtistaController";
import {
  authenticateUsuario,
  registerUsuario,
} from "./controllers/Usuario/authUsuarioController";
import { listArtista } from "./controllers/Artista/artistaControllers";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/evento", eventoRouter);
app.use("/obras", obrasRouter);

app.use("/usuario", userRouter);
app.use("/registrarUsuario", registerUsuario);

app.use("/loginUsuario", authenticateUsuario);
app.use("/artista", artistaRouter);

app.use("/loginArtista", authenticateArtista);

app.use(errorHandler);

connectUserDB();
