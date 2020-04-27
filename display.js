function appearphysic() {
    var a = document.getElementById("physic");
    var ablock = document.getElementById("physicalblock");
    var atext = document.getElementById("physicaltext");
    if (a.style.display === "none") {
        a.style.display = "block";
        ablock.style.backgroundColor = "orange";
        atext.style.color = "white";
    } else {
        a.style.display = "none";
        ablock.style.backgroundColor = "white";
        atext.style.color = "#9F92CA";
    }
}

function appeardata() {
    var b = document.getElementById("data");
    var bblock = document.getElementById("datablock");
    var btext = document.getElementById("datatext");
    if (b.style.display === "none") {
        b.style.display = "block";
        bblock.style.backgroundColor = "orange";
        btext.style.color = "white";
    } else {
        b.style.display = "none";
        bblock.style.backgroundColor = "white";
        btext.style.color = "#9F92CA";
    }
}
