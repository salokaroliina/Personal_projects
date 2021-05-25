function fortuneCookie()
{
  var misfortune = ["Better stay home tomorrow", "Did you really turn off the stove?", "Your neighbor knows what you did",
  "There was a spider under your pillow", "You better check your bank account soon", "Do they really care about you?",
  "They talk about you behind your back and you know it"];

    var x = Math.floor(Math.random() * misfortune.length);

    console.log(misfortune[x]);
    document.getElementById('fortune').innerHTML = (misfortune[x]);
}
