function add(...args) {
  add = function (...params) {
    args = args.concat(params);
    return add;
  };
  add.toString = () => args.reduce((memo, curr) => curr + memo, 0);
  return add;
}

const res = add(1, 2)(3)(4)(5);
console.log(res.toString());
