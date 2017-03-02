
const
      hogan = require('hogan.js'),
      fs = require('fs')

if(process.argv.length <= 2) {
  console.error('Usage: thielify --templates [templates-path] --json [data-file] --output [output-path]')
}

