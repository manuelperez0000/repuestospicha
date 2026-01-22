import { Router } from 'express';
import advertisingController from '../controllers/advertising.controller.js';

const router = Router();

router.route('/')
  .get(advertisingController.getAdvertising)
  .post(advertisingController.createAdvertising);

router.route('/active')
  .get(advertisingController.getActiveAdvertising);

router.route('/:id')
  .get(advertisingController.getAdvertisingById)
  .put(advertisingController.updateAdvertising)
  .delete(advertisingController.deleteAdvertising);

export default router;
