import express from "express"
import { paginaPpal } from "../controllers/usuarioController.js"

const router = express.Router()

router.get('/', paginaPpal);

export default router