const btnNO = document.querySelector("#random-btn")

function MoverAleatoriamente(btn) {
    btn.style.fontWeight = "bolder";
    btn.style.position = "absolute";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

btnNO.addEventListener("mouseenter", function (e) {MoverAleatoriamente(e.target)})