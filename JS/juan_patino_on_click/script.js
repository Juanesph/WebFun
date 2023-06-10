function change(element) {
    var text = element.innerText;
    if (text === "Login") { // Cambia "login" a "Login"
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}


function hide(element) {
    element.remove();
}

function sendMessage(element) {
    alert("Ninja was liked");
}
