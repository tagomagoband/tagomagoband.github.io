var doNothing = function (c) {
  return c;
};
var doBold = function (c) {
  return "<b>" + c + "</b>";
};
var doUnderline = function (c) {
  return "<u>" + c + "</u>";
};
var doItalic = function (c) {
  return "<i>" + c + "</i>";
};
var doBoldAndUnderline = function (c) {
  return "<b><u>" + c + "</u></b>";
};
var doBoldAndItalic = function (c) {
  return "<b><i>" + c + "</i></b>";
};
var doUnderlineAndItalic = function (c) {
  return "<u><i>" + c + "</i></u>";
};
var fs = [doNothing, doBold, doUnderline, doItalic, doBoldAndUnderline, doBoldAndItalic, doUnderlineAndItalic];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomiseText(text) {
  function getCleanText(element) {
      var cleanText = "";
      var insideTags = false;
      for (var i = 0, len = element.length; i < len; i++) {
          if (element[i] == '<') {
              insideTags = true;
          } else if (element[i] == '>') {
              insideTags = false;
          } else {
              if (!insideTags) {
                  cleanText += element[i];
              }
          }
      }
      return cleanText;
  };
  function modifyText(str) {
      var newText = "";
      for (var i = 0, len = str.length; i < len; i++) {
          newText += fs[getRandomInt(0, fs.length)](str[i]);
      }
      return newText;
  };
  var cleanText = getCleanText(text);
  return modifyText(cleanText);
}

setInterval(function () {
  var elements = document.getElementsByClassName("moving-text");
  for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].innerHTML = randomiseText(elements[i].innerHTML);
  }
}, 150);