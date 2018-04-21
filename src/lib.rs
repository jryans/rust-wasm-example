#![feature(proc_macro, wasm_custom_section, wasm_import_module)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add_bob(prefix: &str) -> String {
    let mut bobed = prefix.to_string();
    bobed.push_str(", Bob!");
    bobed
}