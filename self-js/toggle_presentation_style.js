$(document).ready(function() {
    function swapStyleSheet(sheet) {
        document.getElementById("reveal-style").setAttribute("href", sheet);  
    }

    var style1 = document.getElementById("beige-style");
    var style2 = document.getElementById("simple-style");
    var style3 = document.getElementById("black-style");
    var style4 = document.getElementById("dracula-style");
    var style5 = document.getElementById("moon-style");
    var style6 = document.getElementById("white-style")

    style1.onclick = function() { swapStyleSheet("dist/theme/beige.css") }
    style2.onclick = function() { swapStyleSheet("dist/theme/simple.css") }
    style3.onclick = function() { swapStyleSheet("dist/theme/black.css") }
    style4.onclick = function() { swapStyleSheet("dist/theme/dracula.css") }
    style5.onclick = function() { swapStyleSheet("dist/theme/moon.css") }
    style6.onclick = function() { swapStyleSheet("dist/theme/white.css") }
});