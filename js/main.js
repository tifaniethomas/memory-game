  /*----- constants -----*/


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/


  let seconds = 3;
function countdown() {
  AUDIO.play();
  if (seconds > 0) {
//    countEl.innerText(count);
    setTimeout(countdown, 1000);
    console.log(seconds)
    seconds --;
  }
  else {
//    countEl.innerText('')
    seconds = 3
  }
}