function appearphysic() {
    var a = document.getElementById("physic");
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
    var ablock = document.getElementById("physicalblock");
    ablock.style.backgroundColor = "orange";
    ablock.style.color = "white";
}

function appeardata() {
var b = document.getElementById("data");
    if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
