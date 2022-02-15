function showHideInfo() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("parrafodos");
    var btnText = document.getElementById("boton");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Leer más";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Leer menos";
        moreText.style.display = "block";
    }
}