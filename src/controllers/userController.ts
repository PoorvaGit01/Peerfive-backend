import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const user = await UserService.createUser(req.body.name);
            res.status(201).json(user);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ error: message });
        }
    }

    async getUser(req: Request, res: Response) {
        try {
            const user = await UserService.getUser(req.params.id);
            res.json(user);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'No user found';
            res.status(500).json({ error: message });
        }
    }

    async getUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ error: message });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const user = await UserService.updateUser(req.params.id, req.body.name);
            res.json(user);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ error: message });
        }
    }
}

export default new UserController();
