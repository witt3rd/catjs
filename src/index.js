import * as C from "./cats/index.js";

const main = async () => {
  // --- Test
  console.log(C.numInc(41));

  // map (functor)
  console.log(C.map(C.strReverse)(["foo", "bar"]));
  console.log(C.mapUnit(C.strReverse)("borogoves"));
  console.log(
    C.flatMap(C.strReverse)([
      ["foo", "bar"],
      ["baz", "qux"]
    ])
  );
  console.log([["foo", "bar"]].flatMap);

  // maybe (functor)
  console.log("" + C.maybeMap(C.strReverse)(C.none));
  console.log("" + C.maybeMap(C.strReverse)(C.some("vorpal")));
  console.log("" + C.maybeUnit(C.strReverse)("slithy"));
  console.log("" + C.maybeFlatMap(C.strReverse)(C.none));
  console.log("" + C.maybeFlatMap(C.strReverse)(C.some(C.none)));
  console.log("" + C.maybeFlatMap(C.strReverse)(C.some(C.some("tove"))));
  console.log("" + C.some(C.some("tove")).flatMap(C.strReverse));
};

main();
