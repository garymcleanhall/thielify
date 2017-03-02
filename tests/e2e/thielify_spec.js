
const
      exec = require('child_process').exec

withThielify = (assertionCallback) => {

  exec('node index.js', (error, stdout, stderr) => {
    
    expect(error).toBeNull()

    assertionCallback(stdout, stderr);

  })

}

describe('thielify', () => {

  it('outputs a hello world', done => {

    withThielify((stdout, stderr) => {

      expect(stdout.trim()).toEqual('Hello GARY!')

      done()

    })

  })

})