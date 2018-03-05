var but = function(value) {
    document.getElementById("text").value += value;
    document.getElementById("text").style.textAlign = "right";
}

var getRes = function() {
    document.getElementById("text").value = eval(document.getElementById("text").value)
}
