// this is a small example for myself of how to use different form types:
// input, dropdown, radio-buttons, checkboxes and free textarea
// the form doesn't send the information anywhere. It only checks it.

function submitForm() {
  // txt-input
  // checks the value because there's only one thing to check
  let name = document.getElementById('name').value;
  // dropdown-menu
  // doesn't check the value because there are multiple things to check
  let live = document.getElementById('living');
  // radio-buttons
  // checks the elements by name because there are multiple separate things to check, which have the same name
  let age = document.getElementsByName('age');
  // checkbox
  let language = document.getElementsByName('lang');
  // textarea
  let txt = document.getElementById('textarea').value;

  // checks the given name
  // if the name is under 5 letters, the program alerts
  // otherwise nothing happens
  if (name.length < 5) {
    alert("Give your name");
    return false;
  }

  // checks the dropdown-menu
  // the dropdown-menu has options. live.selectedIndex checks what has been selected
  let living = live.options[live.selectedIndex].value;
  // if the user has chosen "choose", the program alerts since it's not an acceptable answer
  if (living === "choose") {
    alert("Choose how you live");
    return false;
    // otherwise nothing happens and the program continues
  } else {
    living == true;
  }

  // checks the radio-buttons
  // the default is false
  let ageSelect = false;
  // for loop goes through all the options one by one
  for (var i = 0; i < age.length; i++) {
    // if something is selected, the default changes from false to true
    if (age[i].checked == true) {
      ageSelect = true;
    }
  }
  // if nothing is selected, the program alerts
  if (ageSelect == false) {
    alert("Select your age");
    return false;
  }

  //checks the checboxes
  // the default is false
  let langSelect = false;
  // for loop goes through all the options one by one
  for (var j = 0; j < language.length; j++) {
      // if something is selected, the default turns from false to true
      if (language[j].checked == true) {
        langSelect = true;
     }
     // if nothing is selected, the program alerts
  } if (langSelect == false) {
    alert("Select languages you know");
    return false;
  }

// checks the textarea
// if there are less than 10 characters on the textarea, the program alerts until there is more than 10 characters
if (txt.length < 10) {
  alert("Comment something");
  return false;
}
else {
  // when everything is checked and fine, the program thanks the user for filling the form
  alert("Thank you for filling this form");
}
}
