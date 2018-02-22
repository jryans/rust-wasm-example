use std::os::raw::c_char;
use std::ffi::{CStr, CString};

fn main() {
    // Defined in JS.
}

#[no_mangle]
pub fn add_bob(prefix: *const c_char) -> *mut c_char {
    unsafe {
        let prefix = CStr::from_ptr(prefix).to_string_lossy().into_owned();
        CString::new(prefix + ", Bob!").unwrap().into_raw()
    }
}