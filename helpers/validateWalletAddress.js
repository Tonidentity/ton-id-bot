function isURL(str) {
  // Regular expression to match URLs with http:// or https://
  const urlRegex =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

  // Test the string against the regular expression
  return urlRegex.test(str);
}

const validateWalletAddress = (address) => {
  const MIN_LENGTH = 30; // Adjust based on your specific wallet address format

  if (
    !address ||
    typeof address !== "string" ||
    address.trim().length < MIN_LENGTH ||
    address.toLowerCase().includes("t.me/tonfantoken_bot") ||
    isURL(address)
  ) {
    return false;
  }

  return true;
};

module.exports = validateWalletAddress;
