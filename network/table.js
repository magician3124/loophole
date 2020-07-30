//document.addEventListener('DOMContentLoaded', function() {
//    function scroll(e) {
//    e.scrollIntoView({behavior: "smooth", block: "start"});
//    }
//})
//document.addEventListener('DOMContentLoaded', function() {
//    var ScrollToHeight = 
//})

function PhysicsLayerScroll(){
        window.scrollTo(0, document.getElementById('PhysicsLayer').offsetTop - (document.getElementsByClassName('FixedElement')[0].offsetHeight)-150);
}

function TransformScroll(){
        window.scrollTo(0, document.getElementById('Transform').offsetTop - (document.getElementsByClassName('FixedElement')[0].offsetHeight)-150);
}