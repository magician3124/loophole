function appearphysic() {
    var a = document.getElementById("physic");
    var ablock = document.getElementById("physicalblock");
    var text = document.getElementById("physicaltext");
    if (a.style.display === "none") {
        a.style.display = "block";
        ablock.style.backgroundColor = "orange";
        text.style.color = "white";
    } else {
        a.style.display = "none";
        ablock.style.backgroundColor = "white";
        text.style.color = "#9F92CA";
    }
}
// 
// function appeardata() {
//     var a = document.getElementById("data");
//     var ablock = document.getElementById("datablock");
//     var text = document.getElementById("datatext");
//     if (a.style.display === "none") {
//         a.style.display = "block";
//         ablock.style.backgroundColor = "orange";
//         text.style.color = "white";
//     } else {
//         a.style.display = "none";
//         ablock.style.backgroundColor = "white";
//         text.style.color = "#9F92CA";
//     }
// }
