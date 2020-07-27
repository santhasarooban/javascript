

(function () {
var names = ["Santroo", "John", "Jack", "Jason", "Peter", "France", "Priya", "Jerome", "Mani", "Kalai","Jem","Jerry","joker","Naran"];
for (var i = 0; i < names.length; i++) {
var first = names[i].charAt(0).toLowerCase();

if (first === 'j') {

    biSpeak.speak(names[i]);

  } else {

    helSpeak.speak(names[i]);

  }

}

})();