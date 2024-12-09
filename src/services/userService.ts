import mongoose from 'mongoose';
import User from '../models/User';
import RewardHistory from '../models/RewardHistory';

class UserService {
    async createUser(name: string) {
        const user = new User({name}); 
        return await user.save();
    }

    async getUser(_id: string) {
        return await User.findById(_id); 
    }

    async getRewardHistory(userId: string) {
        try {
            const rewardHistory = await RewardHistory.find({ givenTo: userId }).sort({ date: -1 }); // Sort by date descending
            return rewardHistory;
        } catch (error) {
            throw new Error('Error fetching reward history');
        }
    }

    async getp5History(userId: string) {
        try {
            const rewardHistory = await RewardHistory.find({ givenBy: userId }).sort({ date: -1 }); // Sort by date descending
            return rewardHistory;
        } catch (error) {
            throw new Error('Error fetching reward history');
        }
    }


    async getAllUsers() {
        return await User.find(); 
    }

    async updateUser(_id: string, name: string) {
        return await User.findByIdAndUpdate(_id, { name }, { new: true }); 
    }
}

export default new UserService();
