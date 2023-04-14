let start = Date.now(); 

let timer = setInterval(function() {
  let timePassed = Date.now() - start;

  if (timePassed >= 200) {
    clearInterval(timer); 
    return;
  }

  rechangeNavbar(timePassed);

}, 10);


function rechangeNavbar(timePassed) {
    document.getElementById("app").style.bottom = timePassed / 4 + 'px';
  }