// With the element initially shown, we can hide it slowly:
function hide(id) {
  var idObject = document.getElementById (id) ;

    id.style.visibility = "hidden";
}

function show(id) {
  var idObject = document.getElementById (id) ;

    id.style.visibility = "visible";
}
