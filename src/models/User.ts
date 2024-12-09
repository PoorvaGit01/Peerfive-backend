import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    p5Balance: { type: Number, default: 100 },
    rewardBalance: { type: Number, default: 0 },
});

const User = mongoose.model('User', UserSchema);
export default User;
