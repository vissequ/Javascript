document.addEventListener('DOMContentLoaded', () => {
    const fadeText = document.getElementById('fadeText');

    setInterval(() => {
        fadeText.classList.toggle('visible');
    }, 3000); // 3-second interval
});
