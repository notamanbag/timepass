document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('next-btn');
    const sentenceDisplay = document.getElementById('sentence-display');
    const body = document.body;

    const sentences = [
        "Every moment with you feels like a beautiful dream coming true. ✨",
        "Your smile is the only sunshine I'll ever need. ☀️",
        "I find myself falling for you a little more every single day. 💖",
        "In a room full of art, I'd still stare at you. 🎨",
        "You make even the most ordinary moments feel extraordinary. 🌟",
        "You are the best thing(my object) that ever happened to me int IMT ",
        "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive. ❤️",
        "Mein na tujhe maardungi",
        "GADEDAAAA",
        "IMMM DRAWWWWWNNNNNN TO YOU",
        "I LIKEEEEE YOUUUUU",
        "FUCK.SHIT.FUCK",
        "THOSE BROWN EYES i just want to stare in them all day long",
        "Sir phod tu tera??",
        "I WANTTTT YOUUU",
        "DONO PHASS GAYE",
        "I wont give up ever on you ever"

    ];

    let lastIndex = -1;

    function getRandomSentence() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * sentences.length);
        } while (newIndex === lastIndex && sentences.length > 1);

        lastIndex = newIndex;
        return sentences[newIndex];
    }

    function updateSentence() {
        // Fade out
        sentenceDisplay.classList.remove('fade-in');
        sentenceDisplay.classList.add('fade-out');

        setTimeout(() => {
            sentenceDisplay.textContent = getRandomSentence();
            // Fade in
            sentenceDisplay.classList.remove('fade-out');
            sentenceDisplay.classList.add('fade-in');

            // Background shift
            const hue = Math.floor(Math.random() * 360);
            body.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 90%) 0%, hsl(${(hue + 40) % 360}, 70%, 95%) 100%)`;

            createFloatingHearts();
        }, 400);
    }

    nextBtn.addEventListener('click', updateSentence);
});

function createFloatingHearts() {
    const emojis = ['💖', '✨', '🌸', '🥰', '🕊️', '💗'];
    const container = document.body;

    for (let i = 0; i < 15; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('floating-emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = (Math.random() * 2 + 2) + 's';
        emoji.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        emoji.style.bottom = '-50px';

        container.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 4000);
    }
}
