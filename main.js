document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        // Ocultar todas as respostas antes de exibir a nova
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        
        // Alternar exibição da resposta clicada
        answer.style.display = isVisible ? 'none' : 'block';
    });
});
