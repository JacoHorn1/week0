var running = false;

function startMetronome () {
  var bps = beatsPerSecond(document.getElementById("bpm").value);
  running = true;
  metronomeLoop(bps);
}

function stopMetronome () {
  running = false;
}

function metronomeLoop (bps) {
 setTimeout(function () {
    if (running == true) {
      document.getElementById("mTest").innerHTML = document.getElementById("mTest").innerHTML + 1;
      metronomeLoop(bps);
    }
 }, bps)
}

function beatsPerSecond (beatsPM) {
  var bps = beatsPM / 60;
  var result = 1000 / bps;
  return result;
}
