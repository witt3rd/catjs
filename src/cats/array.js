import * as Base from "./base.js";

// Contract: array
export const arr = a => {
  if (!Array.isArray(a)) {
    throw new TypeError("Expected array");
  }
  return a;
};

// functor
export const map = function(c) {
  return function(a) {
    return arr(a).map(c);
  };
};

// unit
export const mapUnit = function(c) {
  return function(x) {
    return map(c)([x]);
  };
};

// flatten
export const flatMap = function(c) {
  if (c === undefined) {
    c = Base.identity;
  }
  return function(aax) {
    return map(c)(arr(aax).flat());
  };
};

// eslint-disable-next-line no-extend-native
Array.prototype.flatMap = function(c) {
  return flatMap(c)(this);
};
