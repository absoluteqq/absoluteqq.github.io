const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeIcon.src = 'sun-icon-dark.png'; // Иконка для светлой темы (например, солнце)
    } else {
        themeIcon.src = 'moon-icon-light.png'; // Иконка для темной темы (например, луна)
    }
});
