
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => document.getElementById('headerContent').innerHTML = html);
}

window.onload = function () {
    loadHeader();
};

function login() {
    alert("Login realizado com sucesso!");
}

function enviarMensagem() {
    alert("Mensagem enviada com sucesso!");
}
