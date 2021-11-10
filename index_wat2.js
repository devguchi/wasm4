const importObject = {
  imports: {
    imported_func: arg => console.log(arg)
  }
}
WebAssembly.instantiateStreaming(fetch("wat2.wasm"), importObject)
.then(obj => {
  obj.instance.exports.expoted_func();
});