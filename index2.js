WebAssembly.instantiateStreaming(fetch("wat1.wasm"))
.then(obj => {
  console.log(obj.instance.exports.add(1,3));
});