
            /* tslint:disable */
            // import * as wasm from './rust_wasm_wasm'; // imports from wasm file
            import * as wasm from "./rust_wasm_wasm_b64.js"; // fixed b64 version


            
            let cachedEncoder = null;
            function textEncoder() {
                if (cachedEncoder)
                    return cachedEncoder;
                cachedEncoder = new TextEncoder('utf-8');
                return cachedEncoder;
            }
        
            let cachedUint8Memory = null;
            function getUint8Memory() {
                if (cachedUint8Memory === null ||
                    cachedUint8Memory.buffer !== wasm.memory.buffer)
                    cachedUint8Memory = new Uint8Array(wasm.memory.buffer);
                return cachedUint8Memory;
            }
        
                function passStringToWasm(arg) {
                    if (typeof(arg) !== 'string')
                        throw new Error('expected a string argument');
                    const buf = textEncoder().encode(arg);
                    const len = buf.length;
                    const ptr = wasm.__wbindgen_malloc(len);
                    getUint8Memory().set(buf, ptr);
                    return [ptr, len];
                }
            
            let cachedDecoder = null;
            function textDecoder() {
                if (cachedDecoder)
                    return cachedDecoder;
                cachedDecoder = new TextDecoder('utf-8');
                return cachedDecoder;
            }
        
                function getStringFromWasm(ptr, len) {
                    const mem = getUint8Memory();
                    const slice = mem.slice(ptr, ptr + len);
                    const ret = textDecoder().decode(slice);
                    return ret;
                }
            export function add_bob(arg0) {
        const [ptr0, len0] = passStringToWasm(arg0);
                    try {
                    const ret = wasm.add_bob(ptr0, len0);
                    
                    const ptr = wasm.__wbindgen_boxed_str_ptr(ret);
                    const len = wasm.__wbindgen_boxed_str_len(ret);
                    const realRet = getStringFromWasm(ptr, len);
                    wasm.__wbindgen_boxed_str_free(ret);
                    return realRet;
                
                } finally {
                    
wasm.__wbindgen_free(ptr0, len0);

                }
            }
export const __wbindgen_throw = 
                    function(ptr, len) {
                        throw new Error(getStringFromWasm(ptr, len));
                    }
                ;

        