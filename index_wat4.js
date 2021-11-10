const memory = new WebAssembly.Memory({initial:1});
const importObj = {js: {mem: memory}}
WebAssembly.instantiateStreaming(fetch("wat4.wasm"), importObj)
.then(obj => {
  const bytes = new Uint8Array(memory.buffer, 12, 17);
  const str = new TextDecoder('utf8').decode(bytes);
  console.log(str);
});