
const
      exec = require('child_process').exec

withThielify = (assertionCallback) => {

  exec('node index.js', (error, stdout, stderr) => {
    
    expect(error).toBeNull()

    assertionCallback(stdout, stderr)

  })

}

describe('thielify', () => {

  it('shows usage when without parameters', done => {

    withThielify((stdout, stderr) => {

      expect(stdout).toEqual('')

      expect(stderr.trim()).toContain('Usage: thielify --templates [templates-path] --json [data-file] --output [output-path]')

      done()

    }) 

  })

})