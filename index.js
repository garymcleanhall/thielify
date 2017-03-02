
const
      hogan = require('hogan.js'),
      fs = require('fs')

const template = "Hello {{world}}!"

const hello = hogan.compile(template);

console.log(hello.render({world: "GARY"}));