// Inquiry tab switching
document.querySelectorAll('.itab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.itab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});
