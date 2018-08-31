var Omx = require('node-omxplayer');

console.log(process.argv.length);

var files = shuffle(process.argv.slice(2));
console.log(files);

function play_head_in_files(){
  if (files.length == 0) return;

  var file = files.shift();
  files.push(file);
  var player = Omx(file);
  player.on('close', function(){
    play_head_in_files();
  });
}

function shuffle(array){
  for(var i = array.length - 1; i > 0; i--){
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }

  return array;
}

play_head_in_files();

