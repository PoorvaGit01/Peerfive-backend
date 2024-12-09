import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    p5Balance: number;
    rewardBalance: number;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    p5Balance: { type: Number, default: 100 },
    rewardBalance: { type: Number, default: 0 },
});

export default mongoose.model<IUser>('User', UserSchema);
