import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/:id', UserController.getUser);
router.get('/', UserController.getUsers);
router.put('/:id', UserController.updateUser);

export default router;
