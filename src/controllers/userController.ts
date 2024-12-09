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
            const user = await UserService.getUser(req.params._id);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.json(user);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ error: message });
        }
    }

    async getp5History(req: Request, res: Response) {
      try {
          const { _id } = req.params; 
          const user = await UserService.getUser(_id); 

          if (!user) {
              return res.status(404).json({ error: 'User not found' });
          }

          const rewardHistory = await UserService.getp5History(_id);

          res.json(rewardHistory);
      } catch (error) {
          const message = error instanceof Error ? error.message : 'An unexpected error occurred';
          res.status(500).json({ error: message });
      }
  }

    async getRewardHistory(req: Request, res: Response) {
      try {
          const { _id } = req.params; 
          const user = await UserService.getUser(_id); 

          if (!user) {
              return res.status(404).json({ error: 'User not found' });
          }

          const rewardHistory = await UserService.getRewardHistory(_id);

          res.json(rewardHistory);
      } catch (error) {
          const message = error instanceof Error ? error.message : 'An unexpected error occurred';
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
            const user = await UserService.updateUser(req.params._id, req.body.name);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.json(user);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ error: message });
        }
    }
}

export default new UserController();
