exports.cmd = 'em++ -Os src/app/wasm/bmp-to-ascii/bmp-to-ascii.cpp -s WASM=1 -o src/assets/wasm/bmp-to-ascii.js --use-preload-plugins -s EXTRA_EXPORTED_RUNTIME_METHODS="[\'ccall\']"';