// Hide 1 DOM
function hide(id) {
  var idObject = document.getElementById (id) ;

    id.style.visibility = "hidden";
}

// Hide multiple DOM at once
function hide2(id1, id2) {
  var idObject1 = document.getElementById (id1) ;
  var idObject2 = document.getElementById (id2) ;


    id1.style.visibility = "hidden";
    id2.style.visibility = "hidden";

}

function show(id) {
  var idObject = document.getElementById (id) ;

    id.style.visibility = "visible";
}
