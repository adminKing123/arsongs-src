// anaylizer here

import AudioMotionAnalyzer from "https://cdn.skypack.dev/audiomotion-analyzer?min";
const audioMotion = new AudioMotionAnalyzer(
  document.getElementById("visualizer-container"),
  {
    source: document.getElementById("player"),
  }
);
