const idenArr = ["红", "黄", "绿"];

const promiseAll = idenArr.map((item, index) => {
  return function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`此时是${item}灯中...`);
        resolve();
      }, (index + 1) * 1000);
    });
  };
});

function run() {
  promiseAll
    .reduce((pre, cur) => {
      return pre.then(() => {
        return new Promise((resolve) => {
          cur().then(() => {
            resolve();
          });
        });
      });
    }, Promise.resolve())
    .then((r) => {
      console.log("一轮结束");
      run();
    });
}

run();
