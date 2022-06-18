// import { mobiliarioControllers } from '../controllers/mobiliario.controllers';
import { Router } from "express";
const router = Router();

import * as mobiliarioController from "../controllers/mobiliario.controllers";

router.post('/mobiliario', mobiliarioController.createMobiliario)
router.get('/mobiliario', mobiliarioController.getMobiliarios)
router.get('/mobiliario/:id', mobiliarioController.getMobiliario)
router.delete('/mobiliario/:id', mobiliarioController.deleteMobiliario)
router.put('/mobiliario/:id', mobiliarioController.updateMobiliario)

export default router