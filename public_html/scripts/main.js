"use strict";

document.addEventListener('DOMContentLoaded', function () {
  ib.init();
});
var ib = {};

ib.init = function () {
  var code = document.getElementById('code');
  CodeMirror(function (elt) {
    //eslint-disable-line
    code.parentNode.replaceChild(elt, code);
  }, {
    value: code.value,
    lineNumbers: false,
    readOnly: true,
    theme: 'ib'
  });
};