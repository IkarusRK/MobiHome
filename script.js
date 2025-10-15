
document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', function () {
        this.textContent = 'Adicionado';
        this.style.background = '#8b7355';
        setTimeout(() => {
            this.textContent = 'Adicionar';
            this.style.background = '';
        }, 2000);
    });
});

document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function () {
        const category = this.querySelector('.category-name').textContent;
        console.log('Categoria selecionada:', category);
    });
});
