var running = false;

function startMetronome () {
  document.getElementById("StartButton").disabled = true;
  document.getElementById("StopButton").disabled = false;
  document.getElementById("bpm").disabled = true;
  running = true;
  var bps = beatsPerSecond(document.getElementById("bpm").value);
  metronomeLoop(bps);
}

function stopMetronome () {
  document.getElementById("StartButton").disabled = false;
  document.getElementById("StopButton").disabled = true;
  document.getElementById("bpm").disabled = false;
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
