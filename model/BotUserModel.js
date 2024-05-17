const { Schema, model } = require("mongoose");

const BotUserSchema = new Schema({
  chatId: String,
  userId: String,
  username: String,
  name: String,
  referralsCount: Number,
  balance: Number,
  genesisPoints:Number,
  walletAddress: String,
  referralLink: String,
  ipAddress: String,
  userVersion:String,
  referredUsers: [],
});

const BotUser = model("BotUser", BotUserSchema);
module.exports = BotUser
