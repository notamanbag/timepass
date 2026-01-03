document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const body = document.body;
    const responseMessage = document.getElementById('response-message');
    const questionText = document.getElementById('question-text');

    yesBtn.addEventListener('click', () => {
        // Change to happy theme
        body.classList.remove('gloomy-theme');
        body.classList.add('happy-theme');

        // Update UI
        responseMessage.textContent = "Yay! Can't wait! 🥰";
        responseMessage.classList.remove('d-none', 'text-danger');
        responseMessage.classList.add('text-success');

        // Optional: Confetti or celebration effect could go here
        yesBtn.innerHTML = "It's a Date! 🎉";
        noBtn.style.display = 'none'; // Hide the no button

        createExcitement();
    });

    noBtn.addEventListener('click', () => {
        // Change to gloomy theme
        body.classList.remove('happy-theme');
        body.classList.add('gloomy-theme');

        // Update UI
        responseMessage.textContent = "Oh... maybe next time? 🌧️";
        responseMessage.classList.remove('d-none', 'text-success');
        responseMessage.classList.add('text-light'); // Make text readable on dark bg

        // Clear any existing emojis
        const existingEmojis = document.querySelectorAll('.floating-emoji');
        existingEmojis.forEach(e => e.remove());
    });
});

function createExcitement() {
    const emojis = ['🥰', '😍', '🎉', '💖', '🤩', '✨', '💘'];
    const container = document.body;

    // Create 100 emojis
    for (let i = 0; i < 100; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('floating-emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        // Random positioning and delay
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2-5s duration
        emoji.style.animationDelay = Math.random() * 0.5 + 's'; // Short delay for immediate effect
        emoji.style.fontSize = (Math.random() * 2 + 1.5) + 'rem'; // Random size

        container.appendChild(emoji);

        // Cleanup after animation
        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }
}
