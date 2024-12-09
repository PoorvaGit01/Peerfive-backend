import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/:_id', UserController.getUser);
router.get('/', UserController.getUsers);
router.put('/:_id', UserController.updateUser);

export default router;
