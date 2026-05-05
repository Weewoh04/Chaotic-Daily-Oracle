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

const zodiacMessages = {
    Aries: "As an Aries, this card ignites your fiery passion and drives you forward with unstoppable energy.",
    Taurus: "As a Taurus, this card grounds you in stability and reminds you to savor the simple pleasures.",
    Gemini: "As a Gemini, this card sparks your curiosity and encourages versatile communication.",
    Cancer: "As a Cancer, this card nurtures your emotional depths and strengthens your intuitive bonds.",
    Leo: "As a Leo, this card amplifies your confidence and shines a light on your creative expression.",
    Virgo: "As a Virgo, this card refines your attention to detail and promotes practical healing.",
    Libra: "As a Libra, this card balances your harmony and guides you towards fair resolutions.",
    Scorpio: "As a Scorpio, this card delves into your transformative power and reveals hidden truths.",
    Sagittarius: "As a Sagittarius, this card expands your horizons and fuels your adventurous spirit.",
    Capricorn: "As a Capricorn, this card builds your ambition and rewards your disciplined efforts.",
    Aquarius: "As an Aquarius, this card innovates your vision and connects you to collective energies.",
    Pisces: "As a Pisces, this card flows with your empathy and enhances your spiritual intuition."
};

let currentCard = null;
let selectedSign = null;
let selectedTopic = null;
const historyKey = 'chaoticRecentReadings';
const signKey = 'selectedZodiacSign';

const topicConfig = {
    love: {
        label: 'Love Era',
        keywords: 'love oracle reading, relationship energy, emotional connection, romance advice, heart healing',
        titleRoots: ['The Heart Mirror', 'The Lovers Flame', 'The Soul Signal', 'The Tender Boundary', 'The Velvet Spell', 'The Moonlit Promise', 'The Heartbeat Pact', 'The Cupid Call', 'The Rose Shadow', 'The Intimate Whisper'],
        titleModifiers: ['Rising', 'Reveal', 'Renewal', 'Attraction', 'Reminder', 'Shift', 'Healing', 'Return', 'Glow', 'Rite'],
        messageStarts: ['Your heart is asking for more honesty', 'This reading surfaces the deeper feeling behind your connection', 'The energy is pointing toward emotional clarity', 'A boundary is ready to be rewritten', 'Your attraction is changing shape', 'The message is about being seen', 'You are invited to trust your instincts', 'The oracle asks you to feel before you react', 'A new chapter of love is arriving', 'The current vibration wants your attention'],
        messageEnds: ['rather than the fantasy.','so you can move with confidence.','and create the space you deserve.','instead of repeating the old pattern.','with intention and care.','before you accept anything less than respect.','so that love feels freeing, not confining.','with the level of honesty you crave.','and let your heart lead the way.','without sacrificing your peace.'],
        vibes: ['Warm attraction', 'Safe surrender', 'Confident connection', 'Healing intimacy', 'Magnetic boundaries', 'Gentle courage', 'Romantic clarity', 'Emotional safety', 'Heart-centered power', 'Pure desire'],
        avoids: ['Ignoring your truth', 'People-pleasing to keep the peace', 'Rushing the connection', 'Replaying the same drama', 'Hiding your needs', 'Settling for bruised love', 'Accepting confusion as comfort', 'Ghosting your own wants', 'Fearing vulnerability', 'Waiting for a perfect sign'],
        dos: ['Speak your needs clearly', 'Protect your energy with kindness', 'Choose love that feels steady', 'Let your intuition guide the boundary', 'Nurture what makes you glow', 'Hold yourself with compassion', 'Step into your own worth', 'Lean into healthy desire', 'Invite honesty into your circle', 'Own the version of love you want']
    },
    money: {
        label: 'Money Moves',
        keywords: 'money oracle reading, abundance strategy, financial energy, wealth mindset, hustle guidance',
        titleRoots: ['The Cash Current', 'The Abundance Align', 'The Wealth Wave', 'The Prosperity Path', 'The Payoff Pulse', 'The Vault Vision', 'The Currency Shift', 'The Opulence Orbit', 'The Resource Flow', 'The Money Motion'],
        titleModifiers: ['Rising', 'Reveal', 'Renewal', 'Momentum', 'Expansion', 'Strategy', 'Harvest', 'Shift', 'Power', 'Launch'],
        messageStarts: ['Your earning energy is being recalibrated', 'This reading exposes where abundance is waiting', 'The oracle asks you to invest in your own value', 'A financial opportunity is asking for focus', 'Your money mindset is shifting toward growth', 'The energy is calling for smarter boundaries with resources', 'You are being invited to see potential in unexpected places', 'This card wants you to claim your worth', 'The current flow favors disciplined action', 'Your abundance will respond to clearer intention'],
        messageEnds: ['instead of playing small.', 'because your balance is your power.', 'when the offer feels aligned.', 'with a long-term perspective.', 'and release the scarcity story.', 'instead of chasing the quick win.', 'with honest fees and fair demand.', 'as a reward for consistent effort.', 'instead of inventing drama.', 'with your highest return in mind.'],
        vibes: ['Financial confidence', 'Abundance clarity', 'Smart hustle', 'Money magnetism', 'Secure flow', 'Bold investment', 'Profit focus', 'Resource wisdom', 'Cash courage', 'Effort with ease'],
        avoids: ['Chaotic spending', 'Comparing your progress to others', 'Ignoring stable opportunities', 'Sacrificing peace for a paycheck', 'Procrastinating on the next move', 'Trusting a quick fix', 'Staying stuck in scarcity', 'Overworking without strategy', 'Neglecting your worth', 'Letting fear dictate your dollars'],
        dos: ['Track your cash with real intention', 'Say yes to aligned offers', 'Build systems that support abundance', 'Value your expertise fairly', 'Create a margin for growth', 'Let profitable boundaries sit in place', 'Choose investments that honor your time', 'Show up as your own boss', 'Celebrate your money evolution', 'Reinvest in what fuels your vision']
    },
    drama: {
        label: 'Baby Daddy Drama',
        keywords: 'drama oracle reading, co-parenting energy, ex relationship guidance, boundary messages, emotional fallout',
        titleRoots: ['The Tea Spill', 'The Co-Parent Crossroads', 'The Ex Energy', 'The Boundary Bell', 'The Mess & Message', 'The Reconciliation Read', 'The Relationship Rip', 'The Capture & Release', 'The Mirror of Chaos', 'The Signal Shift'],
        titleModifiers: ['Rising', 'Reveal', 'Renewal', 'Interference', 'Trigger', 'Boundary', 'Signal', 'Shift', 'Release', 'Return'],
        messageStarts: ['This conversation needs a firmer edge', 'The circle is asking you to protect your peace', 'A conflict is trying to teach you a limit', 'Your energy is draining in a partnership space', 'The oracle asks you to notice where respect is missing', 'You are invited to respond instead of react', 'The message wants you to clarify the rules', 'A messy interaction is not the whole story', 'This reading points to what is truly yours', 'The current tension is asking for a better layout'],
        messageEnds: ['before it becomes a pattern.', 'instead of assuming you are wrong.', 'and keep your power intact.', 'with something healthier for you.', 'rather than surrendering to the chaos.', 'because peace is non-negotiable.', 'and protect your emotional home.', 'instead of letting the drama win.', 'with calm authority.', 'and hold your line.'],
        vibes: ['Boundary clarity', 'Calm authority', 'Drama-free power', 'Protective wisdom', 'Grounded resilience', 'Emotional armor', 'Straight talking', 'Centered calm', 'Tough love grace', 'Clear energy'],
        avoids: ['Engaging in toxic loops', 'Giving away your energy', 'Accepting disrespect as normal', 'Spinning on someone else’s chaos', 'Reacting from fear', 'Trading peace for attention', 'Sacrificing your boundaries', 'Agreeing to weak terms', 'Helping when you are hurt', 'Wondering if you are too much'],
        dos: ['Set boundaries with care', 'Speak in clear, calm terms', 'Protect your emotional space', 'Hold your center through conflict', 'Choose what you will allow', 'Lead with integrity', 'Ignore noise that is not yours', 'Check in with your own priorities', 'Keep the conversation grounded', 'Move away from toxic replay']
    },
    healing: {
        label: 'Healing Era',
        keywords: 'healing oracle reading, emotional recovery, self-care guidance, inner work, boundaries',
        titleRoots: ['The Rebirth Ritual', 'The Quiet Reclaim', 'The Boundary Bloom', 'The Tender Repair', 'The Soul Reset', 'The Mirror Mend', 'The Slow Rise', 'The Sanctuary Spell', 'The Inner Flame', 'The Gentle Shift'],
        titleModifiers: ['Rising', 'Reveal', 'Renewal', 'Recovery', 'Rest', 'Repair', 'Reset', 'Growth', 'Wake', 'Radical'],
        messageStarts: ['Your body and heart are asking for a softer tempo', 'This reading invites you to slow down and listen', 'The oracle wants you to honor your limits', 'A tender part of you needs a safe container', 'The current energy is pointing to gentle repair', 'You are being asked to choose nourishment first', 'This card is about healing through honesty', 'Your spiritual muscles are being rebuilt', 'The message is urging you to release old weight', 'The reading feels like permission to rest'],
        messageEnds: ['while you rebuild stronger.', 'instead of rushing the process.', 'because rest is revolutionary.', 'with the tenderness you deserve.', 'instead of carrying every timeline.', 'and trust the slow turn.', 'with safer boundaries in place.', 'instead of forcing grace.', 'so you can return with more clarity.', 'and let the regeneration begin.'],
        vibes: ['Soft resilience', 'Gentle renewal', 'Grounded recovery', 'Sacred rest', 'Calming transformation', 'Healing courage', 'Quiet clarity', 'Restorative power', 'Tender strength', 'Soulful repair'],
        avoids: ['Neglecting your needs', 'Pushing through pain', 'Accepting a rushed recovery', 'Ignoring the signals from your body', 'Continuing old burnout habits', 'Pretending everything is fine', 'Choosing hard over healthy', 'Holding onto guilt', 'Comparing your pace to others', 'Ignoring the small wins'],
        dos: ['Rest without guilt', 'Check in with your heart', 'Create healing space', 'Say yes to gentle support', 'Honor your own pace', 'Keep your boundaries sacred', 'Allow the emotion to move', 'Celebrate the little shifts', 'Invest in soul care', 'Return to yourself fully']
    },
    boss: {
        label: 'Boss Mode',
        keywords: 'boss mode oracle reading, career energy, confidence, leadership guidance, power moves',
        titleRoots: ['The Power Protocol', 'The Hustle Halo', 'The Leader Lift', 'The Manifest March', 'The Authority Arc', 'The Confidence Code', 'The Energy Equity', 'The Crown Call', 'The Empire Pulse', 'The Move Momentum'],
        titleModifiers: ['Rising', 'Reveal', 'Renewal', 'Launch', 'Command', 'Charge', 'Clarity', 'Pivot', 'Drive', 'Takeover'],
        messageStarts: ['Your ambition is being refined', 'This reading confirms your leadership energy', 'The oracle wants you to take a decisive step', 'A power move is ready to land', 'Your confidence is being called forward', 'The message is about owning your worth', 'This card asks you to move with both strength and grace', 'Your path is opening in a bold way', 'The energy favors decisive action', 'You are meant to lead with intention'],
        messageEnds: ['that feels aligned and sustainable.', 'instead of shrinking to fit expectations.', 'with clear boundaries in place.', 'and keep your momentum fluid.', 'instead of overcommitting to others.', 'with your own values leading.', 'rather than forcing the outcome.', 'with confidence, not aggression.', 'and trust your instincts.', 'while staying grounded.'],
        vibes: ['Commanding energy', 'Strategic focus', 'Bold confidence', 'Calm authority', 'High impact', 'Measured power', 'Career clarity', 'Executive grace', 'Winning momentum', 'Driven balance'],
        avoids: ['Overworking without direction', 'Letting others define your goals', 'Using chaos as a badge of honor', 'Ignoring your limits for approval', 'Sacrificing rest for productivity', 'Staying in a small role', 'Ignoring your own intuition', 'Letting fear stall action', 'Settling for distraction', 'Apologizing for ambition'],
        dos: ['Clarify your next move', 'Protect your energy while winning', 'Own your confidence honestly', 'Align action with impact', 'Say no to ambition without peace', 'Lead from your values', 'Choose moves that scale', 'Celebrate your own wins', 'Delegate with trust', 'Keep your power grounded']
    },
    clarity: {
        label: 'Clarity & Decisions',
        keywords: 'clarity oracle reading, decision making, intuitive guidance, choice energy, mental clarity',
        titleRoots: ['The Decision Dial', 'The Clear Signal', 'The Mind Map', 'The Truth Beacon', 'The Option Oracle', 'The Choice Compass', 'The Insight Ignite', 'The Clarity Current', 'The Focus Flash', 'The Path Pointer'],
        titleModifiers: ['Rising', 'Reveal', 'Renewal', 'Focus', 'Guide', 'Breakthrough', 'Shift', 'Reset', 'Pulse', 'Indicator'],
        messageStarts: ['Your next move needs a quieter voice', 'This reading is asking you to cut through noise', 'The oracle wants you to trust what feels clear', 'A decision is easier when you honor your values', 'The message invites you to weigh your energy, not the opinions', 'Your clarity will come through steady presence', 'This card is reminding you to simplify', 'The current question deserves your honest attention', 'You are being guided toward the option that aligns with your core', 'The energy is asking for fewer possibilities and more focus'],
        messageEnds: ['instead of chasing what looks good.', 'and let your intuition lead.', 'with fewer distractions.', 'instead of overcomplicating the choice.', 'and trust what feels right in your bones.', 'with clarity, not confusion.', 'rather than looking for outside approval.', 'with grounded confidence.', 'and keep the path simple.', 'so you can move forward with ease.'],
        vibes: ['Focused clarity', 'Decisive calm', 'Mental ease', 'Strategic insight', 'Grounded perspective', 'Steady confidence', 'Clear direction', 'Intuitive stillness', 'Balanced choice', 'Calm resolve'],
        avoids: ['Overthinking every option', 'Listening to too many voices', 'Rushing without a feel', 'Ignoring the option that feels calm', 'Tolerating fuzzy answers', 'Waiting for perfect certainty', 'Letting fear stall you', 'Complicating a clear case', 'Bouncing between extremes', 'Avoiding the real question'],
        dos: ['Limit your inputs', 'Choose the option that feels honest', 'Make the simplest decision first', 'Give yourself space to feel it out', 'Trust your inner yes', 'Break the decision into the smallest step', 'Honor your priorities', 'Release what no longer fits', 'Focus on the highest-alignment choice', 'Follow what feels internally true']
    }
};

const topicPools = {};

function initTopicPools() {
    Object.keys(topicConfig).forEach(topic => {
        topicPools[topic] = createTopicCards(topic, 200);
    });
}

function createTopicCards(topic, count) {
    const config = topicConfig[topic];
    const cards = [];

    for (let i = 0; i < count; i++) {
        const titleRoot = config.titleRoots[i % config.titleRoots.length];
        const titleModifier = config.titleModifiers[i % config.titleModifiers.length];
        const title = `${titleRoot} ${titleModifier}`;
        const messageStart = config.messageStarts[i % config.messageStarts.length];
        const messageEnd = config.messageEnds[i % config.messageEnds.length];
        const message = `${messageStart} ${messageEnd}`;
        const vibe = config.vibes[i % config.vibes.length];
        const avoid = config.avoids[i % config.avoids.length];
        const doInstead = config.dos[i % config.dos.length];

        cards.push({
            title,
            message,
            vibe,
            avoid,
            doInstead,
            category: topic,
            topicLabel: config.label
        });
    }

    return cards;
}

document.getElementById('pull-card-btn').addEventListener('click', pullCard);
document.getElementById('pull-again-btn').addEventListener('click', pullCard);
document.getElementById('card').addEventListener('click', flipCard);
document.getElementById('pinterest-share').addEventListener('click', shareOnPinterest);
document.getElementById('copy-caption').addEventListener('click', copyTikTokCaption);
document.getElementById('copy-reading').addEventListener('click', copyReading);
document.getElementById('clear-history').addEventListener('click', clearHistory);

// Initialize daily card on page load
document.addEventListener('DOMContentLoaded', () => {
    initDailyCard();
    initCosmicEnergy();
    renderRecentReadings();
});

function initDailyCard() {
    const dailyCard = getCardOfTheDay();
    document.getElementById('daily-topic').textContent = dailyCard.title;
    document.getElementById('daily-word').textContent = dailyCard.vibe;
    document.getElementById('daily-message').textContent = dailyCard.message;
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function initCosmicEnergy() {
    const now = new Date();
    const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateLabel = now.toLocaleDateString('en-US', dateOptions);
    const moon = getMoonPhase();
    document.getElementById('cosmic-date').textContent = `${dateLabel} · ${moon.phase}`;
    document.getElementById('moon-banner').textContent = `${moon.emoji} ${moon.phase} · Today's Power: ${moon.power}`;
}

function getMoonPhase() {
    const now = new Date();
    const known = new Date('2000-01-06');
    const diff = (now - known) / (1000 * 60 * 60 * 24);
    const cycle = diff % 29.53;
    if (cycle < 1.85) return { phase: 'New Moon', emoji: '🌑', power: 'New beginnings' };
    if (cycle < 7.38) return { phase: 'Waxing Crescent', emoji: '🌒', power: 'Set intentions' };
    if (cycle < 9.22) return { phase: 'First Quarter', emoji: '🌓', power: 'Take action' };
    if (cycle < 14.77) return { phase: 'Waxing Gibbous', emoji: '🌔', power: 'Refine & grow' };
    if (cycle < 16.61) return { phase: 'Full Moon', emoji: '🌕', power: 'Release & manifest' };
    if (cycle < 22.15) return { phase: 'Waning Gibbous', emoji: '🌖', power: 'Express gratitude' };
    if (cycle < 23.99) return { phase: 'Last Quarter', emoji: '🌗', power: 'Let go' };
    return { phase: 'Waning Crescent', emoji: '🌘', power: 'Rest & reflect' };
}

function getCardOfTheDay() {
    const today = new Date();
    const dayOfYear = getDayOfYear(today);
    const cardIndex = dayOfYear % oracleCards.length;
    return oracleCards[cardIndex];
}

function getTopicCards(topic) {
    return topicPools[topic] || oracleCards;
}

function selectTopic(topic, label) {
    selectedTopic = topic;
    document.getElementById('selected-topic').textContent = `Selected topic: ${label}`;
    document.querySelectorAll('.sit-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.topic === topic);
    });
}

function setupTopicSelection() {
    document.querySelectorAll('.sit-card[data-topic]').forEach(card => {
        card.addEventListener('click', () => {
            selectTopic(card.dataset.topic, card.querySelector('.sit-name').textContent);
        });
    });
}

function generateCardExplanation(card) {
    const categoryLabel = topicConfig[card.category]?.label || 'Oracle';
    const seoCategory = topicConfig[card.category]?.keywords || 'oracle reading, daily oracle, spiritual guidance';
    const title = card.title;
    const message = card.message;
    const vibe = card.vibe;
    const avoid = card.avoid;
    const doInstead = card.doInstead;

    const paragraphs = [
        `This ${categoryLabel.toLowerCase()} reading is written to be more than a quick message. The card titled “${title}” is designed to feel like a full answer for anyone searching for modern ${categoryLabel.toLowerCase()} guidance, emotional clarity, or daily oracle insight. It is both practical and poetic, built so that the content is SEO-friendly while still feeling grounded and relevant.`,
        `The main message of the card is: ${message} That phrasing matters because it helps the reader land in the exact energy they are experiencing. This explanation expands the meaning of that message, showing how that phrase becomes a prompt for action, a reclamation of power, and a reminder to pay attention to the parts of the situation that matter most.`,
        `When a card carries the vibe of ${vibe}, it is asking you to feel the current energy in your body and your choices. This is not about vague inspiration — it is about recognizing the specific frequency of your experience. The language in the card is intentionally rooted in the way people search for content online, with keywords that match category intent and real-life emotional vocabulary.`,
        `The “avoid” guidance is a critical part of the reading. In this case, the card is telling you to stop ${avoid.toLowerCase()}. That instruction is offered as a form of compassionate wisdom rather than as a criticism. It helps the reader see where they may be self-sabotaging or repeating old patterns, and it points them toward a more aligned path.`,
        `The “do this instead” advice is practical and empowering. Here, the card suggests you ${doInstead.toLowerCase()}. That direction is designed to be immediately usable in your day, whether you are navigating romance, money, drama, healing, boss energy, or a clarity question. It is the step that transforms insight into momentum.`,
        `From an SEO perspective, this explanation includes the kinds of phrases people search for when they want a reliable ${categoryLabel.toLowerCase()} oracle reading. It speaks to “daily card pull,” “relationship advice,” “abundance mindset,” “boundary work,” “boss mode energy,” or “decision clarity,” depending on the category. The content uses those concepts naturally so it feels readable instead of forced.`,
        `This card also works as a bridge between spiritual language and actionable guidance. It helps the reader understand that oracle readings are not just mystical messages — they are tools for real-life change. By describing the card in both emotional and strategic terms, the explanation becomes shareable, bookmarkable, and worthy of being saved or pinned.`,
        `If someone is scrolling for content on ${categoryLabel.toLowerCase()}, they want to feel seen and they want a clear next step. This explanation offers that by naming the feeling, naming what to avoid, and naming what to choose instead. It also reinforces the value of the card as a daily check-in, not a one-time fortune.`,
        `The longer form of this copy is intentional. Search engines favor pages that provide depth and relevance, and readers favor content that stays with them. This is why the explanation expands on the initial phrase, connects it to the reader’s lived experience, and repeats the category keywords in a natural way.`,
        `Consider this content as a daily ritual in written form: it takes the flash of a card pull and turns it into a meaningful paragraph of wisdom. The more the reader can feel the logic behind the message, the more likely they are to engage, share, and come back for another pull tomorrow.`,
        `The final part of this explanation is a gentle reminder that your reading is valid, meaningful, and useful. It wraps up the guidance by saying that your energy is not random, your choice matters, and this card is a prompt to move with intention. That closing also enhances the SEO value by repeating the category phrase one more time and giving the reader a clear, grounded takeaway.`,
        `Overall, this ${categoryLabel.toLowerCase()} card explanation is long enough to satisfy search intent, detailed enough to feel rich, and clear enough to be practical. It is a strong fit for anyone who wants a daily oracle pull that reads like both a guidance note and a mini essay.`,
        `If you want the result to feel even more branded and Pinterest-ready, I can add a small category badge or a bold share quote to the card output that makes the content pop visually while keeping the SEO-rich copy intact.`
    ];

    return paragraphs.join('\n\n');
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
    const pool = selectedTopic && topicPools[selectedTopic] ? topicPools[selectedTopic] : oracleCards;
    const randomIndex = Math.floor(Math.random() * pool.length);
    currentCard = pool[randomIndex];

    let message = currentCard.message;
    if (selectedSign && zodiacMessages[selectedSign]) {
        message += ` ${zodiacMessages[selectedSign]}`;
    }

    currentCard.word = currentCard.title;
    document.getElementById('card-title').textContent = currentCard.title;
    document.getElementById('card-message').textContent = message;
    document.getElementById('card-vibe').textContent = currentCard.vibe;
    document.getElementById('card-avoid').textContent = currentCard.avoid;
    document.getElementById('card-do').textContent = currentCard.doInstead;
    document.getElementById('card-explanation').textContent = generateCardExplanation(currentCard);

    document.getElementById('share-text').textContent = `Share this: "My chaotic oracle card today is ${currentCard.title}. Check yours at ChaoticDailyOracle.com!"`;

    document.getElementById('card-result').classList.remove('hidden');
    document.getElementById('card').classList.remove('flipped');
    document.querySelector('.card-back').classList.add('hidden');
    document.querySelector('.card-front').classList.remove('hidden');
    hideShareActions();
    hideViralPanel();
}

function flipCard() {
    const card = document.getElementById('card');
    const willFlipToBack = !card.classList.contains('flipped');
    card.classList.toggle('flipped');

    setTimeout(() => {
        document.querySelector('.card-front').classList.toggle('hidden');
        document.querySelector('.card-back').classList.toggle('hidden');
        if (willFlipToBack) {
            showShareActions();
            populateViralPanel();
            showViralPanel();
            saveRecentReading();
        } else {
            hideShareActions();
            hideViralPanel();
        }
    }, 300);
}

function shareOnPinterest() {
    if (!currentCard) return;
    const pageUrl = window.location.href;
    const topicLabel = currentCard.topicLabel || currentCard.category || 'oracle';
    const description = `"${currentCard.message}" — ${currentCard.title} vibes from Chaotic Daily Oracle. Category: ${topicLabel}.`;
    const imageUrl = 'https://chaoticdailyoracle.com/card-share.jpg';
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&description=${encodeURIComponent(description)}&media=${encodeURIComponent(imageUrl)}`;
    window.open(pinterestUrl, '_blank');
}

function copyTikTokCaption() {
    if (!currentCard) return;
    const topicLabel = currentCard.topicLabel || currentCard.category || 'oracle';
    const topicTag = topicLabel.toLowerCase().replace(/[^a-z0-9]+/gi, '');
    const caption = `POV: the oracle pulled ${currentCard.vibe} for my ${topicLabel} situation 🔮 Pull yours free at chaoticdailyoracle.com #oracle #dailycard #${topicTag}era`;
    copyTextToClipboard(caption);
}

function copyReading() {
    if (!currentCard) return;
    const readingText = `${currentCard.vibe}: ${currentCard.message}`;
    copyTextToClipboard(readingText);
}

function populateViralPanel() {
    if (!currentCard) return;
    const topicLabel = currentCard.topicLabel || currentCard.category || 'oracle';
    const topic = topicLabel.toLowerCase().replace(/[^a-z0-9]+/g, '');
    const caption = `POV: the oracle pulled "${currentCard.word}" for my ${topicLabel} situation 🔮✨\n\nMessage: "${currentCard.message.slice(0,80)}..."\n\nPull yours FREE 👇\n#oraclecards #${topic}era #dailyoracle #spiritualtiktok #mamimayhem #chaoticdailyoracle`;
    document.getElementById('tiktokCaption').textContent = caption;
}

function showViralPanel() {
    document.getElementById('viralPanel').style.display = 'block';
}

function hideViralPanel() {
    document.getElementById('viralPanel').style.display = 'none';
}

function copyTikTok() {
    if (!currentCard) return;
    copyTextToClipboard(document.getElementById('tiktokCaption').textContent);
    showToast('TikTok caption copied!');
}

function copyPinterest() {
    if (!currentCard) return;
    const topicLabel = currentCard.topicLabel || currentCard.category || 'oracle';
    const topic = topicLabel.toLowerCase().replace(/[^a-z0-9]+/g, '');
    const pinterestText = `✨ ${currentCard.word} for my ${topicLabel} energy. Pull yours free at chaotic-daily-oracle.vercel.app #oraclecards #${topic}era #spiritualtiktok #chaoticdailyoracle`;
    copyTextToClipboard(pinterestText);
    showToast('Pinterest text copied!');
}

function shareX() {
    if (!currentCard) return;
    const currentTopic = currentCard.topicLabel || currentCard.category || 'oracle';
    const text = `My oracle card today: "${currentCard.word}" from ${currentTopic} energy ✦ Pull yours free at chaotic-daily-oracle.vercel.app`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
}

function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => showToast('Copied!'))
            .catch(() => showToast('Copy failed'));
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
            document.execCommand('copy');
            showToast('Copied!');
        } catch (err) {
            showToast('Copy failed');
        }
        document.body.removeChild(textarea);
    }
}

let toastTimeout = null;

function showToast(message) {
    const toast = document.getElementById('copy-toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add('hidden');
    }, 1800);
}

function showShareActions() {
    document.getElementById('share-actions').classList.remove('hidden');
}

function hideShareActions() {
    document.getElementById('share-actions').classList.add('hidden');
}

function getRecentReadings() {
    const stored = window.localStorage.getItem(historyKey);
    return stored ? JSON.parse(stored) : [];
}

function saveRecentReading() {
    if (!currentCard) return;
    const readings = getRecentReadings();
    const entry = {
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        topic: `${currentCard.topicLabel || currentCard.category || 'Oracle'} — ${currentCard.title}`,
        word: currentCard.vibe,
        message: currentCard.message
    };

    readings.unshift(entry);
    while (readings.length > 5) readings.pop();
    window.localStorage.setItem(historyKey, JSON.stringify(readings));
    renderRecentReadings();
}

function clearHistory() {
    window.localStorage.removeItem(historyKey);
    renderRecentReadings();
}

function renderRecentReadings() {
    const historyList = document.getElementById('history-list');
    const readings = getRecentReadings();
    historyList.innerHTML = '';

    if (!readings.length) {
        historyList.innerHTML = '<p class="history-empty">No recent readings yet. Pull a card to save your first one.</p>';
        return;
    }

    readings.forEach(reading => {
        const entry = document.createElement('div');
        entry.className = 'history-entry';
        entry.innerHTML = `
            <p class="history-date">${reading.date}</p>
            <p class="history-topic">${reading.topic}</p>
            <p><strong>Word:</strong> ${reading.word}</p>
            <p>${reading.message}</p>
        `;
        historyList.appendChild(entry);
    });
}

// Zodiac functionality
function loadSelectedSign() {
    selectedSign = window.localStorage.getItem(signKey);
    if (selectedSign) {
        const btn = document.querySelector(`.zodiac-btn[data-sign="${selectedSign}"]`);
        if (btn) btn.classList.add('selected');
    }
}

function selectZodiacSign(sign) {
    selectedSign = sign;
    window.localStorage.setItem(signKey, sign);
    document.querySelectorAll('.zodiac-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`.zodiac-btn[data-sign="${sign}"]`).classList.add('selected');
}

function pullFriendCard() {
    const name = document.getElementById('friend-name').value.trim();
    if (!name) {
        alert('Please enter a name');
        return;
    }
    const randomIndex = Math.floor(Math.random() * oracleCards.length);
    const card = oracleCards[randomIndex];
    const text = `${name}'s reading: ${card.vibe} — ${card.message}`;
    document.getElementById('friend-text').textContent = text;
    document.getElementById('friend-reading').classList.remove('hidden');
    document.getElementById('copy-friend-reading').textContent = `Copy & Send to ${name}`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Banner dismissal
    const banner = document.getElementById('promo-banner');
    const dismissBtn = document.getElementById('dismiss-banner');
    if (sessionStorage.getItem('bannerDismissed')) {
        banner.style.display = 'none';
    }
    dismissBtn.addEventListener('click', () => {
        banner.style.display = 'none';
        sessionStorage.setItem('bannerDismissed', 'true');
    });

    // Friend card modal
    document.getElementById('friend-card-btn').addEventListener('click', () => {
        document.getElementById('friend-modal').classList.remove('hidden');
    });

    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('friend-modal').classList.add('hidden');
        document.getElementById('friend-reading').classList.add('hidden');
        document.getElementById('friend-name').value = '';
    });

    document.getElementById('pull-friend-card').addEventListener('click', pullFriendCard);

    document.getElementById('copy-friend-reading').addEventListener('click', () => {
        const text = document.getElementById('friend-text').textContent;
        copyTextToClipboard(text);
    });

    initTopicPools();
    setupTopicSelection();
    loadSelectedSign();
    document.querySelectorAll('.zodiac-btn').forEach(btn => {
        btn.addEventListener('click', () => selectZodiacSign(btn.dataset.sign));
    });
    initHeroStarfield();
    renderRecentReadings();
});

function initHeroStarfield() {
    const canvas = document.getElementById('stars');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const stars = [];
    const starCount = 120;

    function resizeCanvas() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const ratio = window.devicePixelRatio || 1;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

        stars.length = 0;
        for (let i = 0; i < starCount; i += 1) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.2 + 0.4,
                alpha: Math.random() * 0.65 + 0.2,
                drift: Math.random() * 0.2 - 0.1
            });
        }
    }

    function drawStars() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        ctx.clearRect(0, 0, width, height);

        stars.forEach(star => {
            star.x += star.drift;
            if (star.x < 0) star.x = width;
            if (star.x > width) star.x = 0;

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });
    }

    function animate() {
        drawStars();
        requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
}
