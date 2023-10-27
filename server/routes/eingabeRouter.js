import { Router } from 'express';
import * as eingabeController from '../controllers/eingabeController.js';

const eingabeRouter = Router();

eingabeRouter
  .route('/')
  .get(eingabeController.getAllPosts)
  .post(eingabeController.createEingabe);

  eingabeRouter
  .route('/:id')
  .get(eingabeController.getSingleEingabe)
  .put(eingabeController.updateEingabe)
  .delete(eingabeController.deleteEingabe);

export default eingabeRouter;