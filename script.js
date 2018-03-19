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

window.onscroll = function() {
    keepHigh4();
    keepHigh5();
    keepHigh6();
};

function keepHigh4() {
    var top = document.documentElement.scrollTop
    if (top > 0 && top < 350) {
        document.getElementById("a-one").style.fontWeight = "700";
        document.getElementById("a-two").style.fontWeight = "300";
        document.getElementById("a-three").style.fontWeight = "300";
    }
}

function keepHigh5() {
    var top = document.documentElement.scrollTop
    if (top > 350 && top < 800) {
        document.getElementById("a-one").style.fontWeight = "300";
        document.getElementById("a-two").style.fontWeight = "700";
        document.getElementById("a-three").style.fontWeight = "300";
    }
}

function keepHigh6() {
    var top = document.documentElement.scrollTop
    if (top > 800 && top < 2000) {
        document.getElementById("a-one").style.fontWeight = "300";
        document.getElementById("a-two").style.fontWeight = "300";
        document.getElementById("a-three").style.fontWeight = "700";
    }
}