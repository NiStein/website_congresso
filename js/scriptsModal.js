// Seleciona o modal e o botão de fechar
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalInfo = document.getElementById('modal-info');
const closeBtn = document.getElementById('close-btn');

// Seleciona todos os cards
const cards = document.querySelectorAll('.card2');

// Adiciona um Event Listener para cada card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Pega os dados personalizados (data-attributes) do card
        const name = card.getAttribute('data-name');
        const info = card.getAttribute('data-info');
        const img = card.getAttribute('data-img');
        
        // Atualiza o conteúdo do modal com os dados do card clicado
        modalImg.src = img;
        modalName.textContent = name;
        modalInfo.textContent = info;

        // Exibe o modal
        modal.style.display = 'flex';
    });
});

// Fecha o modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal ao clicar fora da área de conteúdo
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});