const arr = ["黄", "绿", "红", "红", "红", "绿", "黄", "红"];

// 按照红黄绿 排序
const redKey = "红";
const yellowKey = "黄";
const greenKey = "绿";
const sortCompare = { [redKey]: 0, [yellowKey]: 1, [greenKey]: 2 };

arr.sort((a, b) => sortCompare[a] - sortCompare[b]);

console.log(arr);
