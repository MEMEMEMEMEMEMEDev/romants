export default function romanConverter(num) {
  if (num % 1 !== 0) throw new Error('Only integers are allowed');
  if (num === '') throw new Error('Please enter a number');
  if (num === 0) throw new Error("0 is not a valid number");
  if (num < 0) throw new Error("Please enter a positive number");
  if (num >= 4000) throw new Error("Only numbers between 1 and 3999 are allowed");

  const romanNumbers = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = [];

  romanNumbers.forEach((romanNumber) => {
    while (num >= romanNumber.value) {
      result.push(romanNumber.symbol);
      num -= romanNumber.value;
    }
  });

  return result.join("");
}
