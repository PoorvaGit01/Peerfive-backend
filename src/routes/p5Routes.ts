import express from 'express';
import P5Controller from '../controllers/p5Controller';

const router = express.Router();

router.post('/', P5Controller.createP5);
router.get('/:id', P5Controller.getP5History);
router.delete('/:transactionId', P5Controller.deleteP5);

export default router;
