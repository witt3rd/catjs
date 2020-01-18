import * as Base from "./base.js";

// Base type constructor
export const Maybe = function() {};

// Instance type constructor
export const None = function() {};
None.prototype = Object.create(Maybe.prototype);
None.prototype.toString = function() {
  return "None";
};
export const none = new None();

// Instance type constructor
export const Some = function(x) {
  this.x = x;
};
Some.prototype = Object.create(Maybe.prototype);
Some.prototype.toString = function() {
  return `Some(${this.x})`;
};
export const some = x => new Some(x);

// functor (map)
export const maybeMap = c => m => {
  switch (true) {
    case m instanceof None:
      return m;
    case m instanceof Some:
      return some(c(m.x));
    default:
      throw new TypeError(`Expected None or Some(value), actual: ${m}`);
  }
};

Maybe.prototype.map = function(c) {
  return maybeMap(c)(this);
};

// unit
export const maybeUnit = function(c) {
  return function(x) {
    return maybeMap(c)(some(x));
  };
};

// flatten
export const maybeFlatten = function(c) {
  if (c === undefined) {
    c = Base.identity;
  }
  return function(mmx) {
    const result = mmx instanceof Some ? mmx.x : mmx;
    return maybeMap(c)(result);
  };
};

Maybe.prototype.flatten = function(c) {
  return maybeFlatten(c)(this);
};
