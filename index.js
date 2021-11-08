fetch("./wasm4.wasm")
  .then(response => {
    console.log('wasm response', response);
    return response.arrayBuffer()
  })
  .then(result => {
    console.log('wasm arrayBuffer', result);
    return WebAssembly.instantiate(result)
  })
  .then(wasmModule => {
    console.log('wasm Module', wasmModule);
    const result = wasmModule.instance.exports.add_one(3);
    console.log('add_one result', result);
    const text = document.createTextNode(result);
    document.body.appendChild(text);
  })