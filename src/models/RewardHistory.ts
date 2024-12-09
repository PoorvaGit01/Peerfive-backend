import mongoose from 'mongoose';

const RewardHistorySchema = new mongoose.Schema({
  dateTime: { type: Date, default: Date.now },
  givenBy: { type: String, required: true },
  givenTo: { type: String, required: true },
  points: { type: Number, required: true },
});

const RewardHistory = mongoose.model('RewardHistory', RewardHistorySchema);
export default RewardHistory;