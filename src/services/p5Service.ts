import User from '../models/User';
import RewardHistory from '../models/RewardHistory';

class P5Service {
    async createP5({ givenBy, givenTo, points }: { givenBy: string; givenTo: string; points: number }) {
        const giver = await User.findById(givenBy);
        const receiver = await User.findById(givenTo);

        if (!giver || !receiver) throw new Error('User not found');
        if (giver.p5Balance < points) throw new Error('Insufficient P5 balance');

        giver.p5Balance -= points;
        receiver.rewardBalance += points;

        await giver.save();
        await receiver.save();

        const transaction = new RewardHistory({ points, givenBy, givenTo });
        return await transaction.save();
    }

    async deleteP5(transactionId: string) {
        const transaction = await RewardHistory.findById(transactionId);
        if (!transaction) throw new Error('Transaction not found');

        const giver = await User.findById(transaction.givenBy);
        const receiver = await User.findById(transaction.givenTo);

        if (!giver || !receiver) throw new Error('User not found');

        giver.p5Balance += transaction.points;
        receiver.rewardBalance -= transaction.points;

        await giver.save();
        await receiver.save();

        await RewardHistory.findByIdAndDelete(transactionId);
    }

    async getP5History(userId: string) {
        return await RewardHistory.find({ givenBy: userId });
    }
}

export default new P5Service();
