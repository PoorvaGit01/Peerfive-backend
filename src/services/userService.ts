import mongoose from 'mongoose';
import User from '../models/User';

class UserService {
    async createUser(name: string) {
        const user = new User({ id: new mongoose.Types.ObjectId().toString(), name });
        return await user.save();
    }

    async getUser(id: string){
        return await User.findById(id)
    }

    async getAllUsers() {
        return await User.find();
    }

    async updateUser(id: string, name: string) {
        return await User.findOneAndUpdate({ id }, { name }, { new: true });
    }
}

export default new UserService();
