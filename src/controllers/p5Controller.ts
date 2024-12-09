import { Request, Response } from 'express';
import P5Service from '../services/p5Service';

class P5Controller {
    async createP5(req: Request, res: Response) {
        try {
            const transaction = await P5Service.createP5(req.body);
            res.status(201).json(transaction);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(400).json({ error: message });
        }
    }

    async deleteP5(req: Request, res: Response) {
        try {
            await P5Service.deleteP5(req.params.transactionId);
            res.sendStatus(200);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(400).json({ error: message });
        }
    }

    async getP5History(req: Request, res: Response) {
        try {
            const history = await P5Service.getP5History(req.params.id);
            res.json(history);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unexpected error occurred';
            res.status(500).json({ error: message });
        }
    }
}

export default new P5Controller();
