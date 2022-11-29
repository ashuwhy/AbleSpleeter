outlets = 3

function log (msg, obj) {
  post(msg)
  post(JSON.stringify(obj))
  post('\n')
}

function msg_int(v)
{
  if (v==0){
    nstm = 2;
  }
  else if (v==1){
    nstm = 4;
  }
  else{
    nstm = 5;
  }
  post("Recived no. of stem " + nstm + "\n");
}

function bang () {
  const clip = new LiveAPI('live_set view detail_clip')
  const filePath = clip.get('file_path')
  outlet(0, 'onFile', filePath)
  outlet(1, 'nstem', nstm)
}

function spleeterDone() {
  outlet(2, 'bang')
}
