const server = require('./node_modules/node-http-server/server/Server.js');

//start the server with a config
server.deploy({
    verbose: false,
    port: 8000,
    root: `${__dirname}/public/`
}, () => {
    console.log('Server is ready at:');
    console.log('---------------------')
    console.log('http://localhost:8000');
    console.log('---------------------\n')
    console.log('After an edit/save of a source file, please do the following:\n');
    console.log('npm build');
    console.log('refresh your browser');
});