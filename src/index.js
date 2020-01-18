import * as C from "./cats/index.js";

const main = async () => {
  // --- Test
  console.log(C.numInc(41));

  // map (functor)
  console.log(C.map(C.strReverse)(["foo", "bar"]));
  console.log(C.mapUnit(C.strReverse)("borogoves"));
  console.log(
    C.flatten(C.strReverse)([
      ["foo", "bar"],
      ["baz", "qux"]
    ])
  );
  console.log([["foo", "bar"]].flatten());

  // maybe (functor)
  console.log("" + C.maybeMap(C.strReverse)(C.none));
  console.log("" + C.none.map(C.strReverse));
  console.log("" + C.maybeMap(C.strReverse)(C.some("vorpal")));
  console.log("" + C.some("vorpal").map(C.strReverse));
  console.log("" + C.maybeUnit(C.strReverse)("slithy"));
  console.log("" + C.maybeFlatten(C.strReverse)(C.none));
  console.log("" + C.none.flatten(C.strReverse));
  console.log("" + C.maybeFlatten(C.strReverse)(C.some(C.none)));
  console.log("" + C.some(C.none).flatten(C.strReverse));
  console.log("" + C.maybeFlatten(C.strReverse)(C.some(C.some("tove"))));
  console.log("" + C.some(C.some("tove")).flatten(C.strReverse));
};

main();
