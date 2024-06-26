<!-- BY CUSTODIO -->

<!-- Add this in your body html -->

```
    <p id="text">🔨</p>
    <button id="copy">Copiar</button>
    <script src="script.js"></script>
```
<!-- Add this in your css -->

```
body {
    background-color: rgb(255, 255, 255); /* Define a cor do fundo da pagina */
}

button {
    font-family: system-ui; /* tipo de letra do botão */
    /* background-color: rgba(0, 0, 0, 0.254); */ /* Fundo do botão preto */
    color: rgb(0, 0, 0); /* Cor do texto do botão (Copiar) */
    border-color: white; /* tipo de letra do botão */
    border-radius: 15%; /* Define o arredondamento do botão */
    border-top-color: black; /* Define a Borda de Cima para preto */
    border-bottom-color: black; /* Define a Borda de Baixo para preto */
    border-left-color: black; /* Define a Borda da Esquerda para preto */
    border-right-color: black; /* Define a Borda da Direita para preto */
    border-style: groove; /* Define a Borda do Botão */
}
```


<!-- Creat a sript.js or put on your -->

```
let button = document.getElementById('copy');

function copyText() {
    let text = document.getElementById('text');

    navigator.clipboard.writeText(text.innerText);
    button.innerText = 'Copiado!';
}


button.onclick = copyText;
```

