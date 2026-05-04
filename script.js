// Chaotic Daily Oracle Script

const oracleCards = [
    {
        title: "The Chaotic Queen",
        message: "Embrace your inner mess. Your chaos is your crown.",
        vibe: "Unapologetically fabulous disaster",
        avoid: "Trying to be normal",
        doInstead: "Own your weirdness like a boss"
    },
    {
        title: "The Spiral Sorceress",
        message: "You're spiraling, but make it magical. Turn that energy into art.",
        vibe: "Twirling through emotions like a glitter tornado",
        avoid: "Fighting the spiral",
        doInstead: "Dance in the chaos"
    },
    {
        title: "The Main Character",
        message: "This is your era. Everyone else is just extras.",
        vibe: "Starring in your own drama",
        avoid: "Supporting roles",
        doInstead: "Steal the spotlight"
    },
    {
        title: "The Emotional Dumpster Fire",
        message: "Your feelings are a bonfire. Let them burn bright.",
        vibe: "Warm, destructive, illuminating",
        avoid: "Ignoring the flames",
        doInstead: "Roast marshmallows on your pain"
    },
    {
        title: "The Witchy Wisdom",
        message: "Trust your gut. It's probably right, even if it's weird.",
        vibe: "Intuitive, slightly unhinged",
        avoid: "Logic over intuition",
        doInstead: "Follow the cosmic breadcrumbs"
    },
    {
        title: "The Divine Feminine Frenzy",
        message: "Your power is in your softness and your rage. Use both.",
        vibe: "Soft but deadly",
        avoid: "Suppressing emotions",
        doInstead: "Channel your inner goddess"
    },
    {
        title: "The Tarot Trickster",
        message: "Life's playing jokes on you. Laugh back harder.",
        vibe: "Playful chaos",
        avoid: "Taking it too seriously",
        doInstead: "Prank the universe"
    },
    {
        title: "The Spiral Staircase",
        message: "You're climbing, even if it feels like falling. Keep going.",
        vibe: "Upward descent",
        avoid: "Looking down",
        doInstead: "Embrace the vertigo"
    },
    {
        title: "The Emotional Rollercoaster",
        message: "Buckle up, buttercup. It's gonna be a wild ride.",
        vibe: "Thrilling, nauseating",
        avoid: "Getting off early",
        doInstead: "Scream with joy"
    },
    {
        title: "The Witch's Brew",
        message: "Mix your ingredients: tears, laughter, magic. Stir well.",
        vibe: "Potent, unpredictable",
        avoid: "Plain water",
        doInstead: "Add extra spice"
    },
    {
        title: "The Chaotic Creation",
        message: "Your mess is your masterpiece. Keep creating.",
        vibe: "Beautifully broken",
        avoid: "Perfectionism",
        doInstead: "Embrace imperfection"
    },
    {
        title: "The Divine Spiral",
        message: "You're spiraling towards divinity. Trust the process.",
        vibe: "Sacred chaos",
        avoid: "Linear thinking",
        doInstead: "Twist and turn"
    },
    {
        title: "The Main Character Arc",
        message: "Your story is unfolding. You're the hero.",
        vibe: "Epic, personal",
        avoid: "Side plots",
        doInstead: "Write your own ending"
    },
    {
        title: "The Emotional Eclipse",
        message: "Darkness precedes the light. Feel it all.",
        vibe: "Shadowy, revealing",
        avoid: "Avoiding the dark",
        doInstead: "Stargaze in the void"
    },
    {
        title: "The Witchy Whispers",
        message: "Listen to the voices in your head. They know secrets.",
        vibe: "Mysterious, wise",
        avoid: "Ignoring intuition",
        doInstead: "Have a chat with yourself"
    },
    {
        title: "The Feminine Fury",
        message: "Your anger is power. Wield it wisely.",
        vibe: "Powerful, passionate",
        avoid: "Suppressing rage",
        doInstead: "Roar like a goddess"
    },
    {
        title: "The Tarot Tornado",
        message: "Chaos is coming. Bend, don't break.",
        vibe: "Destructive, transformative",
        avoid: "Standing still",
        doInstead: "Learn to fly"
    },
    {
        title: "The Spiral Path",
        message: "The way forward is curved. Follow the bends.",
        vibe: "Curvy, interesting",
        avoid: "Straight lines",
        doInstead: "Enjoy the journey"
    },
    {
        title: "The Emotional Earthquake",
        message: "Things are shaking up. Let them settle.",
        vibe: "Ground-shaking",
        avoid: "Resisting change",
        doInstead: "Ride the waves"
    },
    {
        title: "The Witch's Cauldron",
        message: "Your emotions are ingredients. Cook up something magical.",
        vibe: "Alchemical",
        avoid: "Plain recipes",
        doInstead: "Experiment wildly"
    },
    {
        title: "The Chaotic Compass",
        message: "Your direction is unclear. That's okay. Explore.",
        vibe: "Directionless, adventurous",
        avoid: "Maps and plans",
        doInstead: "Follow your nose"
    },
    {
        title: "The Divine Descent",
        message: "You're diving deep. Bring back treasures.",
        vibe: "Deep, mysterious",
        avoid: "Staying shallow",
        doInstead: "Plunge in"
    },
    {
        title: "The Main Character Moment",
        message: "This is your scene. Make it count.",
        vibe: "Dramatic, important",
        avoid: "Off-stage",
        doInstead: "Center yourself"
    },
    {
        title: "The Emotional Volcano",
        message: "Pressure's building. Let it erupt creatively.",
        vibe: "Explosive, creative",
        avoid: "Bottling up",
        doInstead: "Create art from lava"
    },
    {
        title: "The Witchy Web",
        message: "You're connected to everything. Feel the threads.",
        vibe: "Interconnected",
        avoid: "Isolation",
        doInstead: "Weave your magic"
    },
    {
        title: "The Feminine Flow",
        message: "Go with the flow. It's taking you somewhere beautiful.",
        vibe: "Fluid, graceful",
        avoid: "Fighting currents",
        doInstead: "Float downstream"
    },
    {
        title: "The Tarot Trick",
        message: "Expect the unexpected. It's more fun that way.",
        vibe: "Surprising",
        avoid: "Predictability",
        doInstead: "Embrace surprises"
    },
    {
        title: "The Spiral Dance",
        message: "Dance through your spirals. Movement heals.",
        vibe: "Healing, rhythmic",
        avoid: "Stagnation",
        doInstead: "Twirl away"
    },
    {
        title: "The Emotional Storm",
        message: "Weather the storm. You'll be stronger after.",
        vibe: "Tempestuous",
        avoid: "Hiding indoors",
        doInstead: "Dance in the rain"
    },
    {
        title: "The Witch's Spell",
        message: "Cast your intentions. Magic is real.",
        vibe: "Enchanting",
        avoid: "Doubting magic",
        doInstead: "Believe and cast"
    },
    {
        title: "The Chaotic Garden",
        message: "Your life is wild and growing. Tend it gently.",
        vibe: "Wild, beautiful",
        avoid: "Over-pruning",
        doInstead: "Let it bloom"
    },
    {
        title: "The Divine Drama",
        message: "Life's a play. You're the star. Improvise.",
        vibe: "Theatrical",
        avoid: "Scripts",
        doInstead: "Ad-lib your life"
    },
    {
        title: "The Main Character Glow",
        message: "You're glowing. Let others see your light.",
        vibe: "Radiant",
        avoid: "Dimming yourself",
        doInstead: "Shine bright"
    },
    {
        title: "The Emotional Rainbow",
        message: "After the storm comes color. Wait for it.",
        vibe: "Hopeful",
        avoid: "Gray skies",
        doInstead: "Look for rainbows"
    },
    {
        title: "The Witchy Wisdom Keeper",
        message: "You hold ancient knowledge. Share it.",
        vibe: "Ancient, wise",
        avoid: "Keeping secrets",
        doInstead: "Teach others"
    },
    {
        title: "The Feminine Fire",
        message: "Your passion burns. Use it to light the way.",
        vibe: "Fiery",
        avoid: "Extinguishing flames",
        doInstead: "Fan the fire"
    },
    {
        title: "The Tarot Twist",
        message: "Things aren't as they seem. Look closer.",
        vibe: "Illusory",
        avoid: "Surface level",
        doInstead: "Dive deeper"
    },
    {
        title: "The Spiral Staircase Up",
        message: "You're ascending. Each step matters.",
        vibe: "Progressive",
        avoid: "Rushing",
        doInstead: "Climb mindfully"
    },
    {
        title: "The Emotional Ocean",
        message: "Dive into your depths. There's treasure there.",
        vibe: "Deep, vast",
        avoid: "Shoreline",
        doInstead: "Explore the depths"
    },
    {
        title: "The Witch's Brew Pot",
        message: "Stir your pot. Good things are brewing.",
        vibe: "Alchemical",
        avoid: "Impatience",
        doInstead: "Let it simmer"
    },
    {
        title: "The Chaotic Creator",
        message: "Create from chaos. Beauty from mess.",
        vibe: "Creative",
        avoid: "Order",
        doInstead: "Embrace disorder"
    },
    {
        title: "The Divine Feminine Force",
        message: "Your power is immense. Use it for good.",
        vibe: "Powerful",
        avoid: "Underestimating yourself",
        doInstead: "Harness your strength"
    },
    {
        title: "The Main Character Journey",
        message: "Your story is epic. Keep writing it.",
        vibe: "Epic",
        avoid: "Small stories",
        doInstead: "Make it grand"
    },
    {
        title: "The Emotional Phoenix",
        message: "Rise from ashes. You're reborn.",
        vibe: "Reborn",
        avoid: "Staying burned",
        doInstead: "Spread your wings"
    },
    {
        title: "The Witchy Intuition",
        message: "Trust your sixth sense. It's spot on.",
        vibe: "Intuitive",
        avoid: "Logic",
        doInstead: "Follow feelings"
    },
    {
        title: "The Feminine Grace",
        message: "Move with grace through chaos.",
        vibe: "Graceful",
        avoid: "Clumsiness",
        doInstead: "Flow elegantly"
    },
    {
        title: "The Tarot Truth",
        message: "Truth is revealed. Face it head-on.",
        vibe: "Revealing",
        avoid: "Denial",
        doInstead: "Accept reality"
    },
    {
        title: "The Spiral Healing",
        message: "Heal through spirals. It's natural.",
        vibe: "Healing",
        avoid: "Linear healing",
        doInstead: "Spiral towards wellness"
    },
    {
        title: "The Emotional Release",
        message: "Let it go. Release what no longer serves.",
        vibe: "Liberating",
        avoid: "Holding on",
        doInstead: "Set it free"
    },
    {
        title: "The Witch's Magic",
        message: "Magic is everywhere. Tap into it.",
        vibe: "Magical",
        avoid: "Skepticism",
        doInstead: "Believe in magic"
    },
    {
        title: "The Chaotic Balance",
        message: "Balance in chaos. Find your center.",
        vibe: "Balanced",
        avoid: "Extremes",
        doInstead: "Find equilibrium"
    },
    {
        title: "The Divine Connection",
        message: "You're connected to the divine. Feel it.",
        vibe: "Spiritual",
        avoid: "Disconnect",
        doInstead: "Tune in"
    },
    {
        title: "The Main Character Victory",
        message: "Victory is yours. Claim it.",
        vibe: "Victorious",
        avoid: "Defeat",
        doInstead: "Celebrate wins"
    },
    {
        title: "The Emotional Depth",
        message: "Go deep. Surface level isn't enough.",
        vibe: "Deep",
        avoid: "Shallow",
        doInstead: "Dive in"
    },
    {
        title: "The Witchy Power",
        message: "Your power is real. Own it.",
        vibe: "Powerful",
        avoid: "Powerlessness",
        doInstead: "Embrace strength"
    }
];

let currentCard = null;

document.getElementById('pull-card-btn').addEventListener('click', pullCard);
document.getElementById('pull-again-btn').addEventListener('click', pullCard);
document.getElementById('card').addEventListener('click', flipCard);

// Initialize daily card on page load
document.addEventListener('DOMContentLoaded', initDailyCard);

function initDailyCard() {
    const dailyCard = getCardOfTheDay();
    document.getElementById('daily-topic').textContent = dailyCard.title;
    document.getElementById('daily-word').textContent = dailyCard.vibe;
    document.getElementById('daily-message').textContent = dailyCard.message;
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function getCardOfTheDay() {
    const today = new Date();
    const dayOfYear = getDayOfYear(today);
    const cardIndex = dayOfYear % oracleCards.length;
    return oracleCards[cardIndex];
}

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function updateCountdown() {
    const timeToMidnight = getTimeToMidnight();
    const hours = Math.floor(timeToMidnight / (1000 * 60 * 60));
    const minutes = Math.floor((timeToMidnight % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeToMidnight % (1000 * 60)) / 1000);
    document.getElementById('countdown-timer').textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function getTimeToMidnight() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    return midnight - now;
}

function pullCard() {
    const randomIndex = Math.floor(Math.random() * oracleCards.length);
    currentCard = oracleCards[randomIndex];

    document.getElementById('card-title').textContent = currentCard.title;
    document.getElementById('card-message').textContent = currentCard.message;
    document.getElementById('card-vibe').textContent = currentCard.vibe;
    document.getElementById('card-avoid').textContent = currentCard.avoid;
    document.getElementById('card-do').textContent = currentCard.doInstead;

    document.getElementById('share-text').textContent = `Share this: "My chaotic oracle card today is ${currentCard.title}. Check yours at ChaoticDailyOracle.com!"`;

    document.getElementById('card-result').classList.remove('hidden');
    document.getElementById('card').classList.remove('flipped');
    document.querySelector('.card-back').classList.add('hidden');
    document.querySelector('.card-front').classList.remove('hidden');
}

function flipCard() {
    const card = document.getElementById('card');
    card.classList.toggle('flipped');
    setTimeout(() => {
        document.querySelector('.card-front').classList.toggle('hidden');
        document.querySelector('.card-back').classList.toggle('hidden');
    }, 300);
}