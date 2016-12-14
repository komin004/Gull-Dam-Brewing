$(document).ready(function() {

    var buildings = ["B1", "B2", "B3"];

    document.getElementById("text").innerHTML = buildings[Math.floor(Math.random() * buildings.length)];

    var images = ["1.jpg", "2.jpg", "3.jpg"];
    $("html").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] + ")"});

});