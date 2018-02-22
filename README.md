cargo build --target wasm32-unknown-unknown --release
wasm-bindgen target/wasm32-unknown-unknown/release/rust_wasm.wasm --out-dir .
wasm2es6js rust_wasm_wasm.wasm --base64 > rust_wasm_wasm_b64.js
# Edit rust_wasm_wasm_b64.js import to add ".js" suffix
# Edit rust_wasm.js import to reference _b64.js instead