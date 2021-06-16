// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

function calculateGravitationalForce(G, M1, M2, d) {
    return (G * M1 * M2)/d ** 2;
}

let calculateButton = document.querySelector('#calcular');
calculateButton.addEventListener('click', function() {
    const G = document.querySelector('#constante').value;
    const M1 = document.querySelector('#massa1').value;
    const M2 = document.querySelector('#massa2').value;
    const d = document.querySelector('#distancia').value;
    document.querySelector('#resultado').value = calculateGravitationalForce(G, M1, M2, d);
});