const memory = new WebAssembly.Memory({initial:1, maximum: 10});
WebAssembly.instantiateStreaming(fetch("wat3.wasm"), {js: {mem: memory}})
.then(obj => {
  const i32 = new Uint32Array(memory.buffer);
  for (let i = 0; i < 10; i++) {
    i32[i] = i*-1;
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(`sum: ${sum}`);
});