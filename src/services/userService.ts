import mongoose from 'mongoose';
import User from '../models/User';

class UserService {
    async createUser(name: string) {
        const user = new User({name}); 
        return await user.save();
    }

    async getUser(_id: string) {
        return await User.findById(_id); 
    }

    async getAllUsers() {
        return await User.find(); 
    }

    async updateUser(_id: string, name: string) {
        return await User.findByIdAndUpdate(_id, { name }, { new: true }); 
    }
}

export default new UserService();
