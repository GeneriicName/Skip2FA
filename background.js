window.addEventListener('load', main, false);
function main(event) {
  var timer = setInterval(try_click, 1);
  function try_click() {
    clearInterval(timer);
    var b = document.querySelector("your selector here");
    if (b) {
      b.click();
      sleep(200);
      window.close();
    }
  }
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}