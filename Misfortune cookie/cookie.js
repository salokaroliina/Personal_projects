function fortuneCookie(){
  // variable that gives random sentences
  let misfortune = ["Better stay home tomorrow", "Did you really turn off the stove?", "Your neighbor knows what you did",
  "There was a spider under your pillow", "You better check your bank account soon", "Do they really care about you?",
  "They talk about you behind your back and you know it"];
    // variable that takes random sentence from var 'misfortune'
    let x = Math.floor(Math.random() * misfortune.length);
    // log shows which misfortune the player got
    console.log(misfortune[x]);
    // takes the id 'fortune' from HTML and posts misfortune[x] on its place
    document.getElementById('fortune').innerHTML = (misfortune[x]);
}
