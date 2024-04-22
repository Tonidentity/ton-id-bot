const validateWalletAddress = (address) => {
  const MIN_LENGTH = 30; // Adjust based on your specific wallet address format

  if (
    !address ||
    typeof address !== "string" ||
    address.trim().length < MIN_LENGTH
  ) {
    return false;
  }

  return true;
};

module.exports = validateWalletAddress