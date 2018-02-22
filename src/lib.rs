#![feature(proc_macro)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[no_mangle]
pub extern fn add_bob(prefix: &str) -> String {
    let mut bobed = prefix.to_string();
    bobed.push_str(", Bob!");
    bobed
}