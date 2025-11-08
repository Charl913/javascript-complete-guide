function double(value) {
  return value + value;
}

function transform(number, fn) {
  return fn(number);
}

transform(10, double);