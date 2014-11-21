"use strict";

var starBtn = document.getElementsByClassName('star-button')[0];

if (starBtn) {
  starBtn.addEventListener("click", function() {
    self.port.emit("starBtnClicked", {baba: 'nana'});
  });
}
