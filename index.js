var preview = window.document.getElementById("preview")
var next = window.document.getElementById("next")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")

function rolltoright() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    next.style = "display:none"
    preview.style = "display:flex; margin-top:40%"
}

function rolltoleft() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    next.style = "display:flex"
    preview.style = "display:none"
}