"use strict";

var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var panel = require("sdk/panel");

var pn = panel.Panel({
  contentURL: data.url("tagDialog.html")
});

pageMod.PageMod({
  include: "*.github.com",
  contentScriptFile: data.url('listener.js'),
  onAttach: function(worker) {
    worker.port.on("starBtnClicked", function(param) {
      console.log(param);
      pn.show();
    })
  }
});

