(function (window) {
var biSpeak = {};
var speakWord = "Good Bye";
biSpeak.speak = function (name) {

  console.log(speakWord + " " + name);

}
window.biSpeak = biSpeak;
})(window);