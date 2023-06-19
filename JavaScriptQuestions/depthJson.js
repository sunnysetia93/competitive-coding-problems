const depthJson = (json, depth = 0) => {
  let currDepth = depth;
  if (Array.isArray(json)) {
    currDepth = depth + 1;
    for (let i = 0; i < json.length; i++) {
      const returnVal = depthJson(json[i], depth + 1);
      currDepth = Math.max(currDepth, returnVal);
    }
  } else if (json instanceof Object) {
    currDepth = depth + 1;
    const values = Object.values(json);
    for (let i = 0; i < values.length; i++) {
      const returnVal = depthJson(values[i], depth + 1);
      currDepth = Math.max(currDepth, returnVal);
    }
  }

  return currDepth;
}

console.log("[]", depthJson([])); // 1
console.log("[1, 2]", depthJson([1, 2])); // 1
console.log("[{\"a\": []}, [\"abc\"]]", depthJson([{"a": []}, ["abc"]])); // 3
console.log("[{\"a\": []}, [\"abc\"]]", depthJson([{"a": [[]]}, ["abc"]])); // 4
console.log("[{\"a\": []}, [\"abc\"]]", depthJson([{"a": [{x: 1}]}, ["abc"]])); // 4
console.log("[{\"a\": []}, [\"abc\"]]", depthJson([{"a": [{}]}, ["abc"]])); // 4
