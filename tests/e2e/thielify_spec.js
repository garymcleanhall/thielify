
const
      exec = require('child_process').exec

withThielify = (assertionCallback, parameters) => {

  exec(`node index.js ${parameters || ''}`, (error, stdout, stderr) => {
    
    expect(error).toBeNull()

    assertionCallback(stdout, stderr)

  })

}

expectUsageMessage = (stderr) => {
  expect(stderr.trim()).toContain('Usage: thielify --template template-path --json data-file')
}

describe('thielify', () => {

  it('shows usage when without parameters', done => {

    withThielify((stdout, stderr) => {

      expect(stdout).toEqual('')

      expectUsageMessage(stderr)

      done()

    }) 

  })

  it('requires template parameter', done => {

    withThielify((stdout, stderr) => {

      expect(stdout).toEqual('')

      expectUsageMessage(stderr)

      done()
      
    }, '--json ./tests/fixtures/data.json')

  })

  it('requires json parameter', done => {

    withThielify((stdout, stderr) => {

      expect(stdout).toEqual('')

      expectUsageMessage(stderr)

      done()

    }, '--template ./tests/fixtures/index.html.template')

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