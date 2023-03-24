export const toPersianDigits = (n) => {
  const farsDigit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return n.toString().replace(/\d/g, (x) => farsDigit[parseInt(x)]);
};
