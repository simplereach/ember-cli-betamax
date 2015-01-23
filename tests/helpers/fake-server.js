import sinon from 'sinon';

var server;

export function startServer(){
  if (server) {
    console.warn('startServer called while server is already running, ignoring.');
    return;
  }
  server = sinon.fakeServer.create();
  server.autoRespond = true;
  server.autoRespondAfter = 1;
  server.xhr.useFilters = true;

  //fake response to make sure the response hash is generated
  server.respondWith('GET', '/foo/bar', [200,{},""]);
  server.xhr.addFilter(function(method, url) {
    //whenever the this returns true the request will not be faked
    var fake = true;
    server.responses.forEach(function(response){
      if(response.url === url){
        fake = false;
        return;
      }
    });
    if (fake) {
      console.error("request for url not faked:" + url);
    }
    return fake;
  });
}

export function stopServer() {
  if(server) {
    server.restore();
    server = null;
  }
}

export function setupServer(setup) {
  setup(server);
}

export function getServer(){
  if (!server) {
    console.log('STARTING server from getServer');
    startServer();
  }
  return server;
}
