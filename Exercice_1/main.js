const img = document.getElementById("image1");

img.addEventListener("mouseover", function( event ) {
    img.classList.add("redborder");

})

img.addEventListener("mouseout", function( event ) {
    img.classList.remove("redborder");

})