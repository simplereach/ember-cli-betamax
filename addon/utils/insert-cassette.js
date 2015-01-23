import {
  startServer,
  stopServer,
  setupServer
} from './fake-server';
import betamaxRecorder from './betamax-recorder';

export default function(cassette){

  QUnit.begin(function(){
    startServer();
    //if record is not selected, use recordings
    if(!(QUnit.urlParams && QUnit.urlParams.record)){
      setupServer(cassette);
    }
    betamaxRecorder.setup();
  });

  QUnit.done(function(){
    stopServer();
    //if we are not in testem, download new casettes.
    if(QUnit.urlParams && QUnit.urlParams.record){
      betamaxRecorder.download();
    }
  });
}



