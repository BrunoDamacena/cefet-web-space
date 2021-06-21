// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let paragraphs = document.querySelectorAll('#aliens p');

for (let paragraph of paragraphs) {
    let button = paragraph.querySelector('button');
    if (button) {
        button.addEventListener('click', function() {
            paragraph.classList.toggle('expandido');
            button.innerHTML = button.innerHTML === '+' ? '-' : '+';
        });
    }
}