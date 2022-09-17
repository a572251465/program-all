function makePromise(type, timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`此时是${type}灯...`);
      resolve();
    }, timer);
  });
}

async function run() {
  await makePromise("red", 1000);
  await makePromise("yellow", 2000);
  await makePromise("green", 3000);
  await run();
}

run().then((r) => {});
