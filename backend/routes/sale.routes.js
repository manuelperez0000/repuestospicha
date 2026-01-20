import express from 'express';
import { getSales, getSale, getSalesByUserId, createSale, updateSale, deleteSale, createCheckout } from '../controllers/sale.controller.js';
import responser from '../controllers/responser.js';
import { uploadMidelware } from '../midelwares/uploadMidelware.js';

const router = express.Router();

router.get('/', getSales);
router.get('/user/:userId', getSalesByUserId);
router.get('/:id', getSale);
router.post('/', createSale);
router.post('/checkout', uploadMidelware.single('receiptImage'), createCheckout);
router.put('/:id', updateSale);
router.delete('/:id', deleteSale);

export default router;
