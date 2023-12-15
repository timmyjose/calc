Demo of JSON interop between Node (using `ffi-napi`) and Rust (`cdylib` and useing `serde` and `serde_json`).

## Prerequisites

Install `ffi-napi`:

```bash
$ npm install ffi-napi
```

## Build & Run

```bash
$ cargo build --release
$ node calc_client.js

```

## Demo

```bash
$ cargo build --release
    Finished release [optimized] target(s) in 0.02s

$ node calc_client.js
[
  { res: 15, operation: 'addition' },
  { res: 9, operation: 'subtraction' },
  { res: 36, operation: 'multiplication' },
  { res: 4, operation: 'division' }
]


```