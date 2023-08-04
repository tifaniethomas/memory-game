  /*----- constants -----*/


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/


  let seconds = 3;
function countdown() {
  if (seconds > 0) {
    setTimeout(countdown, 1000);
    console.log(seconds)
    seconds --;
  }
    seconds = 3
}