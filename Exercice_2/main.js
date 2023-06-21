const text = document.querySelector("#text");
text.classList.add("hide");
let ancres = document.querySelectorAll("a");

ancres[0].addEventListener("click", function( event ) {
    text.classList.remove("hide");

})
ancres[1].addEventListener("click", function( event ) {
    text.classList.add("hide");

})


