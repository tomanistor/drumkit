window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="$e.keyCode}"]`);
  if(!audio) return; // stop function when there is no sound
  audio.currentTime = 0; // rewind audio to the start
  audio.play();
  console.log(key)
});
