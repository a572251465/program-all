/**
 * @author lihh
 * @description promise中断方法
 * @param userPromise 用户自己promise
 */
Promise.abort = function (userPromise) {
  let abort;
  // 创建一个内嵌的promise
  const innerPromise = new Promise((_, reject) => {
    abort = reject;
  });

  // 利用谁快返回谁的特性 来中断promise
  const racePromise = Promise.race([userPromise, innerPromise]);
  racePromise.abort = abort;
  return racePromise;
};
