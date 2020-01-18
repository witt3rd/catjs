export const identity = function(x) {
  return x;
};

// Contract: type - generic data type enforcement
export const type = t => v => {
  const res = typeof v;
  if (res !== t) {
    throw new TypeError(`Expected type: ${t}, actual type: ${res}`);
  }
  return v;
};

// Contract: primitive types
export const bool = type("boolean");
export const str = type("string");
export const obj = type("object");
export const num = type("number");
export const undef = type("undefined");
