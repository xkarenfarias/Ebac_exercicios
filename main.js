const form = document.getElementById('form-campos')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
const mensagem = document.getElementById('mensagem')

form.addEventListener('submit', function (e){
    e.preventDefault();

    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);

    if (valorB > valorA) {
        mensagem.innerText = "Válido! O valor de B é maior que A";
        mensagem.style.color = "green";

    } else {
        mensagem.innerText = "Erro: O valor de B deve ser menor que A!";
        mensagem.style.color = "red";
    }
});