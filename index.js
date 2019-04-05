const server = require('./api/server')

const port = process.env.PORT || 5001

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))