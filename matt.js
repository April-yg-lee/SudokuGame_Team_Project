// Adding sound to play button
$('#playbtn').click(function(){
  const audio = new Audio();
  audio.src = './audios/button-09a.mp3';
  audio.play();
});

// Adding sound to Easy mode
$('#gotoeasy').click(function(){
  const audio = new Audio();
  audio.src = './audios/button-11.mp3';
  audio.play();
});

// Adding sound to Difficult mode
$('#gotodifficult').click(function(){
  const audio = new Audio();
  audio.src = './audios/button-11.mp3';
  audio.play();
});

// Adding sound to li
$('li').click(function () {
  const audio = new Audio();
  audio.src = './audios/button-11.mp3';
  audio.play();
});

// Adding sound to sudoku click event
$('.boxLine').click(function(){
  const audio = new Audio();
  audio.src = './audios/button-09a.mp3';
  audio.play();
});

// Adding sound to Challenge Again
$('.button').click(function(){
  const audio = new Audio();
  audio.src = './audios/button-11.mp3';
  audio.play();
});

