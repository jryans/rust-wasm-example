```
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen target/wasm32-unknown-unknown/release/rust_wasm.wasm --out-dir . --no-modules
```

Append the following to rust_wasm.js:

```
self.wasm_bindgen.loaded = self.wasm_bindgen("./rust_wasm_bg.wasm");
export default self.wasm_bindgen;
```
# wasm-gc...?