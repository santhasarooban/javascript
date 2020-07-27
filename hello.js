(function (window) {
var helSpeak = {};
var speakWord = "Hello";
helSpeak.speak = function (name) {

  console.log(speakWord + " " + name);
}
window.helSpeak = helSpeak;
})(window);