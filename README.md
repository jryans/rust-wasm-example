```
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen target/wasm32-unknown-unknown/release/rust_wasm_example.wasm --out-dir . --no-modules
```

Append the following to rust_wasm_example.js:

```
echo 'self.wasm_bindgen.loaded = self.wasm_bindgen("./rust_wasm_example_bg.wasm");
export default self.wasm_bindgen;' >> rust_wasm_example.js
```