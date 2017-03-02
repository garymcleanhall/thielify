
const
      exec = require('child_process').exec

describe('thielify', () => {

  it('outputs a hello world', done => {

    const thielify = exec('node index.js', (error, stdout, stderr) => {

      expect(error).toBeNull()

      expect(stdout.trim()).toEqual('Hello GARY!')

      done()

    })

  })

})