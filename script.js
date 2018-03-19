function scrollOne() {
    var elmnt = document.getElementById("content-one");
    elmnt.scrollIntoView(true);
}

function scrollTwo() {
    var elmnt = document.getElementById("content-two");
    elmnt.scrollIntoView(true);
    window.scrollBy(0, -145);
}

function scrollThree() {
    var elmnt = document.getElementById("content-three");
    elmnt.scrollIntoView(true);
    window.scrollBy(0, -145);
}

function keepHigh1() {
    document.getElementById("a-one").style.fontWeight = "700";
    document.getElementById("a-two").style.fontWeight = "300";
    document.getElementById("a-three").style.fontWeight = "300";
}

function keepHigh2() {
    document.getElementById("a-two").style.fontWeight = "700";
    document.getElementById("a-one").style.fontWeight = "300";
    document.getElementById("a-three").style.fontWeight = "300";
}

function keepHigh3() {
    document.getElementById("a-three").style.fontWeight = "700";
    document.getElementById("a-one").style.fontWeight = "300";
    document.getElementById("a-two").style.fontWeight = "300";
}