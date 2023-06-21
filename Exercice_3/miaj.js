const div = document.querySelector("#text");

const color = document.querySelectorAll(".color")
console.log(color[0]);

color[0].addEventListener("click", function( event ) {
    div.className = '';
    div.classList.add("green");

})

color[1].addEventListener("click", function( event ) {
    div.className = '';
    div.classList.add("red");

})

color[2].addEventListener("click", function( event ) {
    div.className = '';
    div.classList.add("blue");

})