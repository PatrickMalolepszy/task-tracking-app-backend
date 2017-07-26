import http from 'http'
import app from './server'

const server = http.createServer(app);
let currentApp = app;

console.log("Sever is up!");
server.listen(3000);

// hot loading:
if (module.hot) {
  module.hot.accept('./server.js', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  })
}