let button = document.getElementById('copy');

function copyText() {
    let text = document.getElementById('text');

    navigator.clipboard.writeText(text.innerText);
    button.innerText = 'Copiado!';
}


button.onclick = copyText;