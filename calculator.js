function backspace() {
    var display = document.getElementById("display");

    if(display.value != "") {
        display.value = display.value.slice(0, -1);
    }
}

function solve() {
    var display = document.getElementById("display");

    display.value = eval(display.value);
}