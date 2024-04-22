const showMessageToReferredUser = require("./showMessageToReferredUser");

const handleReferral = async (ctx, linkOwnerData, idOfNewUser) => {
  try {
    linkOwnerData.referralsCount = linkOwnerData.referralsCount + 1;
    linkOwnerData.balance + 1000;
    linkOwnerData.referredUsers = [...linkOwnerData.referredUsers, idOfNewUser];
    await linkOwnerData.save();

    showMessageToReferredUser(linkOwnerData.username, ctx);
  } catch (error) {
    ctx.reply("An error occured. Please try again");
    console.log(error);
  }
};

module.exports = handleReferral;
