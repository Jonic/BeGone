'use strict';

if (undefined === editing) {
  var editing = true;
  // add "editing" banner
}
else {
  editing = !editing;
  // remove "editing" banner
}

function handleBegoneClick(event) {
  if (!editing) {
    return;
  }

  //  return if clicking on "editing banner"

  var element = event.target;
  var parent  = element.parentNode;

  parent.removeChild(element);
}

function handleBegoneMouseover(event) {
  if (!editing) {
    return;
  }

  //  if y-coord of mouse is within 30px of bottom of "editing" banner
  //    add class to editing banner to move it
  //  else if editing banner has class
  //    remove class from editing banner

  var element = event.target;

  console.log(element.style.boxShadow);

  if (undefined !== element.style.boxShadow && element.style.boxShadow !== '') {
    // store old boxshadow in data attribute
  }

  element.style.boxShadow = '0 0 10px red';
}

function handleBegoneMouseout(event) {
  if (!editing) {
    return;
  }

  var element = event.target;

  // if data attr with old box shadow
  //   boxshadow = data.boxshadow
  // else
  //   boxshadow = ''

  element.style.boxShadow = '';
}

document.body.addEventListener('mouseover', handleBegoneMouseover, false);
document.body.addEventListener('mouseout',  handleBegoneMouseout,  false);
document.body.addEventListener('click',     handleBegoneClick,     false);
