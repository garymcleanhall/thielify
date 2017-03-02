
const
      exec = require('child_process').exec

withThielify = (assertionCallback, parameters) => {

  exec(`node index.js ${parameters || ''}`, (error, stdout, stderr) => {
    
    expect(error).toBeNull()

    assertionCallback(stdout, stderr)

  })

}

describe('thielify', () => {

  it('shows usage when without parameters', done => {

    withThielify((stdout, stderr) => {

      expect(stdout).toEqual('')

      expect(stderr.trim()).toContain('Usage: thielify --template template-path --json data-file')

      done()

    }) 

  })

  it('writes transform to stdout', done => {

    withThielify((stdout, stderr) => {

      expect(stderr).toBe('')

      expect(stdout).not.toContain('{{message}}')

      expect(stdout).toContain('Hello World!')

      done()

    }, '--template ./tests/fixtures/index.html.template --json ./tests/fixtures/data.json')

  })

})