
const
      hogan = require('hogan.js'),
      fs = require('fs')

if(process.argv.length <= 2) {
  console.error('Usage: thielify --template template-path --json data-file')
  process.exit(0)
} 

const args = require('minimist')(process.argv.slice(2))

let templateContent = fs.readFileSync(args.template, 'ascii')

let template = hogan.compile(templateContent)
let data = require(args.json)

let renderedContent = template.render(data)

console.log(renderedContent)