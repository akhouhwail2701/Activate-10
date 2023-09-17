onload = function () {
    document.getElementById("child1").style.cssText = `
    opacity:1;
    `
    document.getElementById("child2").style.cssText = `
    transform: translateX(115%);
    opacity:0;
    `

    document.getElementById("left").style.cssText = `
    background-color: #eeb462;
    `
    document.getElementById("right").style.cssText = `
    background-color: transparent;
    `
}

document.getElementById("left").onclick = function () {
    document.getElementById("left").style.cssText = `
    background-color: #eeb462;
    `
    document.getElementById("right").style.cssText = `
    background-color: transparent;
    `

    document.getElementById("child1").style.cssText = `
    opacity:1;
    `
    document.getElementById("child2").style.cssText = `
    transform: translateX(115%);
    opacity:0;
    `
}

document.getElementById("right").onclick = function () {
    document.getElementById("child1").style.cssText = `
    transform: translateX(-115%);
    opacity:0;
    `
    document.getElementById("child2").style.cssText = `
    transform: translateX(0%);
    opacity:1;
    `

    document.getElementById("right").style.cssText = `
    background-color: #eeb462;
    `
    document.getElementById("left").style.cssText = `
    background-color: transparent;
    `
}

document.getElementById("visible").onclick = function () {
    document.getElementById("login").style.visibility = "visible";
}

document.getElementById("ch1").onchange = function () {
    if (document.getElementById("ch1").checked) {
        document.getElementById("pass").removeAttribute("type");
        document.getElementById("pass").setAttribute("type", "text");
        document.getElementById("pass").style.cssText = `
        width: 100%;
        height: 15%;
        margin-bottom: 4%;
        padding-left: 4%;
        background-color: transparent;
        border: none;
        border-bottom: 1px #fff solid;
        color: #fff;`
    }
    else {
        document.getElementById("pass").setAttribute("type", "password");
    }
}

document.getElementById("side-bar").onclick = function () {
    document.getElementById("menu").style.visibility = "visible";
}

document.getElementById("visible2").onclick = function () {
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("menu").style.visibility = "hidden";
}