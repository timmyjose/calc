var ffi = require('ffi-napi')

var lib_name = './target/release/libcalc.dylib'
var api = ffi.Library(lib_name, {
  'execute': ['string', ['string']]
})

const x = 12
const y = 3

const commands = [
  JSON.stringify({
    Add: {
      x: x,
      y: y
    }
  }),
  JSON.stringify({
    Sub: {
      x: x,
      y: y
    }
  }),
  JSON.stringify({
    Mul: {
      x: x,
      y: y
    }
  }),
  JSON.stringify({
    Div: {
      x: x,
      y: y
    }
  })
]

const cmd_res = []

commands.forEach(cmd => {
  cmd_res.push(JSON.parse(api.execute(cmd)))
})

console.log(cmd_res)