fetch("./wasm4.wasm")
  .then(res => res.arrayBuffer())
  .then(res => WebAssembly.instantiate(res))
  .then(wasmModule => {
    const res = wasmModule.instance.exports.add_one(3);
    const text = document.createTextNode(res);
    document.body.appendChild(text);
  })