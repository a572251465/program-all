const arr = [1, 2, 3, 4, 5, 6, 7];

const disturb = (arr) => {
  const newArr = arr.slice();
  let length = newArr.length;

  while (length-- > 0) {
    const endIndex = length;
    const randomIndex = (Math.random() * endIndex) | 0;
    [newArr[randomIndex], newArr[endIndex]] = [
      newArr[endIndex],
      newArr[randomIndex],
    ];
  }

  return newArr;
};

console.log(disturb(arr));
