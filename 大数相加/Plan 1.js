const add = (str = "", str1 = "") => {
  const max = Math.max(str.length, str1.length);
  const arr1 = str.padStart(max, "0");
  const arr2 = str1.padStart(max, "0");
  let surplus = 0,
    ans = "";

  for (let i = max - 1; i >= 0; i -= 1) {
    const a = +arr1[i];
    const b = +arr2[i];

    const sum = a + b + surplus;
    surplus = (sum / 10) | 0;
    ans = (sum % 10) + ans;
  }

  if (surplus !== 0) ans = surplus + ans;

  return ans;
};

console.log(add("9007199254740991", "1234567899999999999"));

// 1234567899999999999
// 0009007199254740991
