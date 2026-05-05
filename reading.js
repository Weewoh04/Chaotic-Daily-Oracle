const selectedCardKey = 'chaoticSelectedCard';

function getSelectedCard() {
    const saved = window.localStorage.getItem(selectedCardKey);
    return saved ? JSON.parse(saved) : null;
}

function generateReadingText(card) {
    return `This reading is an invitation to explore the deeper meaning behind the message you just pulled. The card titled “${card.title}” delivers a short hit of insight, but the full explanation helps you connect that phrase to your daily energy, your decisions, and the moment you're in.

“${card.message}” is the core advice of this pull. It is the signal your chaotic oracle is sending, and it asks you to pay attention to what is true for you. The vibe of the card is ${card.vibe}, so the energy is not just a surface feeling. It is the flavor of your day, the mood you are moving through, and the tone of your choices.

The “Avoid This” section warns you about the kind of action or mindset that will keep you stuck. In this case, the message is to stop ${card.avoid.toLowerCase()}. When you give yourself permission to release that pattern, you free up space for the better option.

The “Do This Instead” advice is practical and powerful. It asks you to ${card.doInstead.toLowerCase()}. That is the step that turns intention into momentum. It is the real-life version of the card’s message.

Use this page as a guide for how to walk the reading into your day. Notice what feels magnetic, what feels heavy, and what wants to shift. Everything here is meant to feel authentic, relatable, and useful — not mystical for the sake of mystery.

If you'd like, you can return to the homepage and pull another card for a fresh reading, or keep this one bookmarked as a reminder of the energy you are working with right now.`;
}

function populateReading(card) {
    document.getElementById('reading-title').textContent = card.title;
    document.getElementById('reading-message').textContent = card.message;
    document.getElementById('reading-vibe').textContent = card.vibe;
    document.getElementById('reading-avoid').textContent = card.avoid;
    document.getElementById('reading-do').textContent = card.doInstead;
    document.getElementById('reading-in-depth').textContent = generateReadingText(card);

    document.getElementById('reading-card').classList.remove('hidden');
    document.getElementById('reading-detail').classList.remove('hidden');
    document.getElementById('reading-empty').classList.add('hidden');
}

function showEmptyState() {
    document.getElementById('reading-card').classList.add('hidden');
    document.getElementById('reading-detail').classList.add('hidden');
    document.getElementById('reading-empty').classList.remove('hidden');
}

function attachBackButtons() {
    const backButtons = [
        document.getElementById('back-home-btn'),
        document.getElementById('back-home-btn-2')
    ];
    backButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', () => {
                window.location.href = 'index.html#pull';
            });
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const card = getSelectedCard();
    attachBackButtons();

    if (!card) {
        showEmptyState();
        return;
    }

    populateReading(card);
});
