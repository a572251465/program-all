function makePromise(type, timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(type);
    }, timer);
  });
}

const myAsyncIterable = Object.create(null);
myAsyncIterable[Symbol.asyncIterator] = async function* () {
  yield makePromise("red", 1000);
  yield makePromise("yellow", 1000);
  yield makePromise("green", 1000);
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(`此时是${x}灯...`);
  }
})();
