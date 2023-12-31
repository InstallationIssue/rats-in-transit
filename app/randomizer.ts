import { Prisma } from "@prisma/client"
import { getRandomValues } from "crypto"

const CIVILIZED_JOBS = [
    "Acolyte", "Actor", "Apothecary", "Baker", "Barber", "Blacksmith",
    "Brewer", "Bureaucrat", "Butcher", "Carpenter", "Clockmaker", "Courier",
    "Courtier", "Diplomat", "Fishmonger", "Guard", "Haberdasher", "Innkeeper",
    "Item-seller", "Jeweler", "Knight", "Locksmith", "Mason", "Miller",
    "Musician", "Noble", "Painter", "Priest", "Scholar", "Scribe",
    "Sculptor", "Shipwright", "Soldier", "Tailor", "Taxidermist", "Wigmaker"
]
const UNDERWORLD_JOBS = [
    "Alchemist", "Beggar-Prince", "Blackmailer", "Bounty-Hunter", "Chimney Sweep", "Coin-Clipper",
    "Contortionist", "Counterfeiter", "Cultist", "Cutpurse", "Debt-Collector", "Deserter",
    "Fence", "Fortuneteller", "Galley Slave", "Gambler", "Gravedigger", "Headsman",
    "Hedge Knight", "Highwayman", "Housebreaker", "Kidnapper", "Mad Prophet", "Mountebank",
    "Peddler", "Pit-Fighter", "Poisoner", "Rat-Catcher", "Scrivener", "Sellsword",
    "Slave", "Smuggler", "Street Performer", "Tattooist", "Urchin", "Usurer"
]
const WILDERNESS_JOBS = [
    "Apiarist", "Bandit", "Caravan Guard", "Caravneer", "Druid", "Exile",
    "Explorer", "Farmer", "Fisherman", "Forager", "Fugitive", "Hedge Wizard",
    "Hermit", "Hunter", "Messenger", "Minstrel", "Monk", "Monster Hunter",
    "Outlander", "Village Idiot", "Pilgrim", "Poacher", "Raider", "Ranger",
    "Sage", "Scavenger", "Scout", "Shepherd", "Seer", "Surveyor",
    "Tinkerer", "Tomb Raider", "Trader", "Trapper", "Witch", "Woodcutter"
]
const CHAR_APPEARANCES = [
    "Aquiline", "Athletic", "Barrel-Chested", "Boney", "Brawny", "Brutish",
    "Bullnecked", "Chiseled", "Coltish", "Corpulent", "Craggy", "Delicate",
    "Furrowed", "Gaunt", "Gorgeous", "Grizzled", "Haggard", "Handsome",
    "Hideous", "Lanky", "Pudgy", "Ripped", "Rosy", "Scrawny",
    "Sinewy", "Slender", "Slumped", "Solid", "Square-Jawed", "Statuesque",
    "Towering", "Trim", "Weathered", "Willowy", "Wiry", "Wrinkled"
]
const CHAR_PHYSICAL_DETAILS = [
    "Acid Scars", "Battle Scars", "Birthmark", "Braided Hair", "Brand Mark", "Broken Nose",
    "Bronze Skinned", "Burn Scars", "Bushy Eyebrows", "Curly Hair", "Dark Skinned", "Dreadlocks",
    "Exotic Accent", "Flogging Scars", "Freckles", "Gold Tooth", "Hoarse Voice", "Huge Beard",
    "Long Hair", "Matted Hair", "Missing Ear", "Missing Teeth", "Mustache", "Mutton Chops",
    "Nine Fingers", "Oiled Hair", "One-Eyed", "Pale Skinned", "Piercings", "Ritual Scars",
    "Sallow Skin", "Shaved Head", "Sunburned", "Tangled Hair", "Tattoos", "Topknot"
]
const CHAR_CLOTHES = [
    "Antique", "Battle-Torn", "Bedraggled", "Blood-Stained", "Ceremonial", "Dated",
    "Decaying", "Eccentric", "Elegant", "Embroidered", "Exotic", "Fashionable",
    "Flamboyant", "Food-Stained", "Formal", "Frayed", "Frumpy", "Garish",
    "Grimy", "Haute Couture", "Lacey", "Livery", "Mud-Stained", "Ostentatious",
    "Oversized", "Patched", "Patterned", "Perfumed", "Practical", "Rumpled",
    "Sigils", "Singed", "Tasteless", "Undersized", "Wine-Stained", "Worn Out"
]
const CHAR_PERSONALITIES = [
    "Bitter", "Brave", "Cautious", "Chipper", "Contrary", "Cowardly",
    "Cunning", "Driven", "Entitled", "Gregarious", "Grumpy", "Heartless",
    "Honour-Bound", "Hotheaded", "Inquisitive", "Irascible", "Jolly", "Know-It-All",
    "Lazy", "Loyal", "Menacing", "Mopey", "Nervous", "Protective",
    "Righteous", "Rude", "Sarcastic", "Savage", "Scheming", "Serene",
    "Spacey", "Stoic", "Stubborn", "Stuck-Up", "Suspicious", "Wisecracking"
]
const CHAR_MANNERISMS = [
    "Anecdotes", "Breathy", "Chuckles", "Clipped", "Cryptic", "Deep Voice",
    "Drawl", "Enunciates", "Flowery Speech", "Gravelly Voice", "Highly Formal", "Hypnotic",
    "Interrupts", "Laconic", "Laughs", "Long Pauses", "Melodious", "Monotone",
    "Mumbles", "Narrates", "Overly Casual", "Quaint Sayings", "Rambles", "Random Facts",
    "Rapid-Fire", "Rhyming", "Robotic", "Slow Speech", "Speechifies", "Squeaky",
    "Street Slang", "Stutters", "Talks to Self", "Trails Off", "Very Loud", "Whispers"
]
const AERIAL_ANIMAL = [
    "Albatross", "Bat", "Beetle", "Bird of Paradise", "Butterfly", "Condor",
    "Crane", "Crow", "Dragonfly", "Eagle", "Falcon", "Firefly",
    "Flamingo", "Fly", "Flying Squirrel", "Goose", "Gull", "Hummingbird",
    "Kingfisher", "Locust", "Magpie", "Mantis", "Mockingbird", "Mosquito",
    "Moth", "Owl", "Parrot", "Peacock", "Pelican", "Pteranodon",
    "Rooster", "Sparrow", "Swan", "Vulture", "Wasp", "Woodpecker"
]
const TERRESTRIAL_ANIMAL = [
    "Ant", "Ape", "Armadillo", "Badger", "Bear", "Boar",
    "Caterpillar", "Centipede", "Chameleon", "Cockroach", "Deer", "Elephant",
    "Ferret", "Fox", "Giraffe", "Goat", "Horse", "Human",
    "Mole", "Ostrich", "Ox", "Porcupine", "Rabbit", "Raccoon",
    "Rat", "Rhinoceros", "Scorpion", "Sheep", "Slug", "Snail",
    "Snake", "Spider", "Squirrel", "Tiger", "Wolf", "Wolverine"
]
const AQUATIC_ANIMAL = [
    "Alligator", "Amoeba", "Anglerfish", "Beaver", "Clam", "Crab",
    "Dolphin", "Eel", "Frog", "Hippo", "Jellyfish", "Leech",
    "Lobster", "Manatee", "Manta Ray", "Muskrat", "Narwhal", "Newt",
    "Octopus", "Otter", "Penguin", "Platypus", "Pufferfish", "Salamander",
    "Anemone", "Sea Urchin", "Seahorse", "Seal", "Shark", "Shrimp",
    "Squid", "Swordfish", "Tadpole", "Turtle", "Walrus", "Whale"
]
const MONSTER_FEATURES = [
    "Antlers", "Beak", "Carapace", "Claws", "Compound Eyes", "Eye Stalks",
    "Fangs", "Fins", "Fur", "Gills", "Hooves", "Horns",
    "Legless", "Long tongue", "Many-eyed", "Many-limbed", "Mucus", "Pincers",
    "Plates", "Plumage", "Proboscis", "Scales", "Segments", "Shaggy Hair",
    "Shell", "Spikes", "Spinnerets", "Spines", "Stinger", "Suctions cups",
    "Tail", "Talons", "Tentacles", "Trunk", "Tusks", "Wings"
]
const MONSTER_TRAITS = [
    "Amphibious", "Bloated", "Brittle", "Cannibal", "Clay-like", "Colossal",
    "Crystalline", "Decaying", "Ethereal Element", "Ethereal", "Ever-young", "Eyeless",
    "Fearless", "Fluffy", "Fungal", "Gelatinous", "Geometric", "Hardened",
    "Illusory", "Intelligent", "Iridescent", "Luminous", "Many-headed", "Mechanical",
    "Physical Element", "Planar", "Reflective", "Rubbery", "Shadowy", "Sharp",
    "Skeletal", "Slimy", "Sticky", "Stinking", "Tiny", "Translucent"
]
const MONSTER_ABILITIES = [
    "Absorbing", "Acid blood", "Anti-magic", "Blinding", "Breath weapon", "Camouflaging",
    "Duplicating", "Electric", "Entangling", "Ethereal effect", "Exploding", "Flying",
    "Gaze weapon", "Hypnotizing", "Impervious", "Invisible", "Life-draining", "Magnetic",
    "Mimicking", "Mind-reading", "Paralyzing", "Phasing", "Physical effect", "Poisonous",
    "Radioactive", "Reflective", "Regenerating", "Shapeshifting", "Spell-casting", "Stealthy",
    "Strangling", "Super-strength", "Telekinetic", "Teleporting", "Vampiric", "Wall-crawling"
]
const MONSTER_TACTICS = [
    "Ambush", "Call for support", "Capture", "Charge", "Climb foes", "Compel worship",
    "Create barrier", "Deceive", "Demand duel", "Disorient", "Encircle", "Evade",
    "Gang up", "Gather strength", "Go berserk", "Harry", "Hurl foes", "Immobilize",
    "Manipulate", "Mock", "Monologue", "Order minion", "Protect leader", "Protect self",
    "Scatter foes", "Stalk", "Steal from", "Swarm", "Target insolent", "Target leader",
    "Target nearest", "Target richest", "Target strongest", "Target weakest", "Toy with", "Use terrain"
]
const MONSTER_PERSONALITIES = [
    "Alien", "Aloof", "Bored", "Cautious", "Cowardly", "Curious",
    "Devious", "Distractible", "Educated", "Embittered", "Envious", "Erudite",
    "Fanatical", "Forgetful", "Generous", "Hateful", "Honorable", "Humble",
    "Jaded", "Jovial", "Legalistic", "Manipulative", "Megalomaniac", "Melancholy",
    "Meticulous", "Mystical", "Obsessive", "Out of touch", "Paranoid", "Polite",
    "Psychopathic", "Sophisticated", "Touchy", "Unimpressed", "Vain", "Xenophobic"
]
const MONSTER_WEAKNESSES = [
    "Bells", "Birdsong", "Children", "Cold", "Cold Iron", "Competition",
    "Conversation", "Deformity", "Flattery", "Flowers", "Gifts", "Gold",
    "Heat", "Holy icon", "Holy water", "Home cooking", "Insanities", "Mirrors",
    "Mistletoe", "Moonlight", "Music", "Methods", "Phylactery", "Physical Element",
    "Puzzles", "Riddles", "Rituals", "Silver", "Sunlight", "Tears",
    "True name", "Valuable Materials", "Weak spot", "Weapon Item", "Wine", "Wormwood"
]
const FEMININE_NAMES = [
    "Adelaide", "Alma", "Barsaba", "Beatrix", "Bianca", "Cleopha",
    "Clover", "Constance", "Damaris", "Daphne", "Demona", "Elsbeth",
    "Esme", "Fern", "Hester", "Hippolyta", "Jessamine", "Jilly",
    "Morgot", "Minerva", "Nerissa", "Odette", "Olga", "Orchid",
    "Pepper", "Phoebe", "Piety", "Poppy", "Silence", "Sybil",
    "Trillby", "Tuesday", "Ursula", "Vivian", "Wendy", "Zora"
]
const MASCULINE_NAMES = [
    "Balthazar", "Basil", "Bertram", "Blaxton", "Chadwick", "Clovis",
    "Destrian", "Ellis", "Erasmus", "Faustus", "Finn", "Fitzhugh",
    "Florian", "Fox", "Godwin", "Hannibal", "Jasper", "Jiles",
    "Jules", "Leopold", "Merrick", "Mortimer", "Ogden", "Orion",
    "Oswald", "Percival", "Peregrine", "Quentin", "Redmaine", "Reinhold",
    "Silas", "Stilton", "Stratford", "Tenpiece", "Waverly", "Webster"
]
const NOBLE_SURNAMES = [
    "Belvedere", "Bithesea", "Calaver", "Carvolo", "De Rippe", "Droll",
    "Dunlow", "Edevane", "Erelong", "Febland", "Fernsby", "Fisk",
    "Gastrell", "Girdwood", "Gorgon", "Grimeson", "Gruger", "Hitheryon",
    "La Marque", "Malmora", "Miter", "Oblington", "Onymous", "Phillifent",
    "Portendorfer", "Romatet", "Rothery", "Skorbeck", "Slora", "Southwark",
    "Stavish", "Vandermeer", "Wellbelove", "Westergren", "Wexley", "Willberforce"
]
const COMMON_SURNAMES = [
    "Barrow", "Beetleman", "Berrycloth", "Birdwhistle", "Bobich", "Chips",
    "Coffin", "Crumpling", "Culpepper", "Dankworth", "Digworthy", "Dreggs",
    "Gimble", "Graveworm", "Greelish", "Hardwick", "Hatman", "Hovel",
    "Knibbs", "Midnighter", "Needle", "Nethercoat", "Pestle", "Relish",
    "Rumbold", "Rummage", "Sallow", "Saltmarsh", "Silverless", "Skitter",
    "Slee", "Slitherly", "Stoker", "Tarwater", "Tumbler", "Villin"
]
const CHAR_ASSETS = [
    "Authority", "Avoids detection", "Calls in favors", "Charming", "Cooks the books", "Erases evidence",
    "Excellent liar", "Extremely rich", "Faction leader", "Faction member", "Feared", "Fortified base",
    "Gorgeous", "Hears rumors", "Huge family", "Huge library", "Impersonator", "Interrogator",
    "Knows a guy", "Knows a way in", "Launders money", "Learned", "Local celebrity", "Local knowledge",
    "Loyal henchman", "Middling oracle", "Nothing to lose", "Owns the guards", "Powerful spouse", "Procures gear",
    "Pulls the strings", "Secret lab", "Sells contraband", "Smuggles goods", "Spy network", "War hero"
]
const CHAR_LIABILITIES = [
    "Addiction", "Alcoholic", "Corrupt ally", "Coward", "Decadent", "Forbidden love",
    "Gambler", "Glutton", "Greedy", "Heretic", "Huge debts", "Imposter",
    "Insanity", "Jealous", "Leaves evidence", "Many enemies", "Misinformed", "Money trail",
    "Narcissist", "Needs medicine", "OCD", "Paranoid", "Partyer", "Poor equipment",
    "Protective", "Scandalous", "Softhearted", "Strict routines", "Superstitious", "Suspicious",
    "Temper", "Trusting", "Vulnerable base", "Wanted", "Weak-willed", "Widely despised"
]
const CHAR_GOALS = [
    "A better life", "Acceptance", "Acquire item", "Craft item", "Destroy faction", "Destroy item",
    "Enlightenment", "Fame", "Found faction", "Freedom", "Glory", "Impress Character",
    "Infamy", "Infiltrate faction", "Justice", "Kidnap Character", "Lead faction", "Learning",
    "Locate Character", "Love", "Mastery", "Power", "Reach location", "Rescue Character",
    "Resolve dispute", "Restore faction", "Reveal a secret", "Revenge", "Sabotage faction", "Serve a deity",
    "Serve evil", "Serve faction", "Serve ideology", "Serve leader", "Serve the needy", "Wealth"
]
const CHAR_MISFORTUNES = [
    "Abandoned", "Addicted", "Arrested", "Blackmailed", "Burgled", "Challenged",
    "Condemnede", "Crippled", "Cursed", "Defrauded", "Demoted", "Depressed",
    "Discredited", "Dismissed", "Disowned", "Exiled", "Famished", "Forgotten",
    "Framed", "Haunted", "Humiliated", "Impoverished", "Kidnapped", "Lost",
    "Mobbed", "Mutilated", "Overworked", "Poisoned", "Pursued", "Rejected",
    "Replace", "Robbed", "Sick", "Sued", "Suspected", "Transformed"
]
const CHAR_MISSIONS = [
    "Apprehend", "Assassinate", "Blackmail", "Burgle", "Chart", "Convince",
    "Deface", "Defraud", "Deliver", "Destroy", "Discredit", "Escort",
    "Exfiltrate", "Extort", "Follow", "Frame", "Impersonate", "Impress",
    "Infiltrate", "Interrogate", "Investigate", "Kidnap", "Locate", "Plant",
    "Protect", "Raid", "Replace", "Retrieve", "Rob", "Ruin",
    "Sabotage", "Smuggle", "Surveil", "Take over", "Terrorize", "Threaten"
]
const CHAR_METHODS = [
    "Alchemy", "Blacmail", "Bluster", "Bribery", "Bullying", "Bureaucracy",
    "Charm", "Commerce", "Cronies", "Debate", "Deceit", "Deduction",
    "Eloquence", "Espionage", "Fast-talking", "Favors", "Hard work", "Humor",
    "Investigation", "Legal maneuvers", "Manipulation", "Misdirection", "Money", "Nagging",
    "Negotiation", "Persistence", "Piety", "Preparation", "Quick wit", "Research",
    "Rumors", "Sabotage", "Teamwork", "Theft", "Threats", "Violence"
]
const CHAR_SECRETS = [
    "Addicted", "Artificial", "Assassin", "Bankrupt", "Beholden", "Counterspy",
    "Cultist", "Demigod", "Evil lineage", "Exile", "Fence", "Fugitive",
    "Ghost", "Has a child", "Heretic", "High born", "Huge fortune", "Illusion",
    "Insurrectionist", "Low born", "Married", "Mind-controlled", "Misfortune", "Monster hunter",
    "Non-human", "Job", "Polygamist", "Protects relic", "Scandalous birth", "Secret police",
    "Serial killer", "Smuggler", "Spy", "Time traveller", "Transformed", "War criminal"
]
const CHAR_REPUTATIONS = [
    "Ambitious", "Authoritative", "Boor", "Borrower", "Celebrity", "Charitable",
    "Cheat", "Dangerous", "Entertainer", "Gossip", "Hardworking", "Holy",
    "Honest", "Hypochondriac", "Idiot", "Influential", "Layabout", "Leader",
    "Misanthrope", "Miser", "Neighborly", "Nutjob", "Obnoxious", "Overeducated",
    "Partyer", "Pious", "Proper", "Prophet of doom", "Repulsive", "Respected",
    "Riffraff", "Scandalous", "Slime ball", "Terrifying", "Weirdo", "Wise"
]
const CHAR_HOBBIES = [
    "Archaeology", "Art collecting", "Bad fiction", "Calligraphy", "Card games", "Clockwork",
    "Collecting cats", "Cuisine", "Dark lore", "Dog breeding", "Embroidery", "Exercise",
    "Falconry", "Fashion", "Fishing", "Foreign cultures", "Gardening", "History",
    "Horseracing", "Hunting", "Instrument", "Knitting", "Lawn games", "Mountaineering",
    "Opera", "Painting", "Poetry", "Puzzle-solving", "Riddling", "Science",
    "Sculpture", "Sketching", "Smoking", "Theater", "Weaving", "Whiskey"
]
const CHAR_RELATIONSHIPS = [
    "Adviser", "Blackmailer", "Business partner", "Business rival", "Buyer", "Captor",
    "Client", "Confidant", "Debtor", "Disciple", "Guardian", "Henchman",
    "Idol", "Informant", "Master", "Mentor", "Nemesis", "Offspring",
    "Parent", "Patron", "Political rival", "Prisoner", "Protege", "Quarry",
    "Right hand", "Romantic rival", "Servant", "Sibling", "Social rival", "Spouse",
    "Stalker", "Suitor", "Supplicant", "Supplier", "Sweetheart", "Unrequited love"
]
const DIVINE_DOMAINS = [
    "Animal", "Balance", "Betrayal", "Chance", "Chaos", "Conquest",
    "Cycles", "Death", "Destiny", "Dreams", "Element", "Gateways",
    "Judgement", "Love", "Memory", "Monsters", "Moon", "Motherhood",
    "Character", "Oaths", "Order", "Plague", "Purification", "Reason",
    "Schemes", "Secrets", "Storms", "Summer", "Sun", "The Forge",
    "The Sea", "The Wild", "Time", "Underworld", "Wealth", "Winter"
]
const AFTER_PARTY_DISASTERS = [
    "Absurd boasts", "Adopted a child", "Awarded medal", "Bought the inn", "Cursed", "Duel scheduled",
    "Elected to office", "Given a quest", "Got married", "In a coffin", "In love", "In the stocks",
    "Inconvenient pet", "Insulted a noble", "Insulted faction", "Joined a cult", "Letter of thanks", "Lost",
    "Lost at gambling", "Lost reputation", "New identity", "New tattoo", "Poisoned", "Recruited",
    "Robbed", "Roof on fire", "Shanghaied", "Sick", "Signed contract", "Someone died",
    "Spilled secrets", "Started a cult", "Swindled", "Thrown in jail", "Unruly mob", "Wrong clothes"
]
const PHYSICAL_EFFECT = [
    "Animating", "Attracting", "Binding", "Blossoming", "Consuming", "Creeping",
    "Crushing", "Diminishing", "Dividing", "Duplicating", "Enveloping", "Expanding",
    "Fusing", "Grasping", "Hastening", "Hindering", "Illuminating", "Imprisoning",
    "Levitating", "Opening", "Petrifying", "Phasing", "Piercing", "Pursuing",
    "Reflecting", "Regenerating", "Rending", "Repelling", "Resurrecting", "Screaming",
    "Sealing", "Shapeshifting", "Shielding", "Spawning", "Transmuting", "Transporting",
]
const PHYSICAL_ELEMENT = [
    "Acid", "Amber", "Bark", "Blood", "Bone", "Brine",
    "Clay", "Crow", "Crystal", "Ember", "Flesh", "Fungus",
    "Glass", "Honey", "Ice", "Insect", "Lemon", "Lava",
    "Moss", "Obsidian", "Oil", "Poison", "Rat", "Salt",
    "Sand", "Sap", "Serpent", "Slime", "Stone", "Tar",
    "Thorn", "Vine", "Water", "Wine", "Wood", "Worm",
]
const PHYSICAL_FORM = [
    "Altar", "Armor", "Arrow", "Beast", "Blade", "Cauldron",
    "Chain", "Chariot", "Claw", "Cloak", "Colossus", "Crown",
    "Elemental", "Eye", "Fountain", "Gate", "Golem", "Hammer",
    "Horn", "Key", "Mask", "Monolith", "Pit", "Prison",
    "Sentinel", "Servant", "Shield", "Spear", "Steed", "Swarm",
    "Tentacle", "Throne", "Torch", "Trap", "Wall", "Web",
]
const ETHEREAL_EFFECT = [
    "Avenging", "Banishing", "Bewildering", "Blinding", "Charming", "Communicating",
    "Compelling", "Concealing", "Deafening", "Deceiving", "Deciphering", "Disguising",
    "Dispelling", "Emboldening", "Encoding", "Energizing", "Enlightening", "Enraging",
    "Excruciating", "Foreseeing", "Intoxicating", "Maddening", "Mesmerizing", "Mindreading",
    "Nullifying", "Paralyzing", "Revealing", "Revolting", "Scrying", "Silencing",
    "Soothing", "Summoning", "Terrifying", "Warding", "Wearying", "Withering",
]
const ETHEREAL_ELEMENT = [
    "Ash", "Chaos", "Distortion", "Dream", "Dust", "Echo",
    "Ectoplasm", "Fire", "Fog", "Ghost", "Harmony", "Heat",
    "Light", "Lightning", "Memory", "Mind", "Mutation", "Negation",
    "Plague", "Plasma", "Probability", "Rain", "Rot", "Shadow",
    "Smoke", "Snow", "Soul", "Star", "Stasis", "Steam",
    "Thunder", "Time", "Void", "Warp", "Whisper", "Wind",
]
const ETHEREAL_FORM = [
    "Aura", "Beacon", "Beam", "Blast", "Blob", "Bolt",
    "Bubble", "Call", "Cascade", "Circle", "Cloud", "Coil",
    "Cone", "Cube", "Dance", "Disk", "Field", "Form",
    "Gaze", "Loop", "Moment", "Nexus", "Portal", "Pulse",
    "Pyramid", "Ray", "Shard", "Sphere", "Spray", "Storm",
    "Swarm", "Torrent", "Touch", "Vortex", "Wave", "Word",
]
const MUTATIONS = [ //Curses or magical backfire
    "Aging", "Attracts birds", "Child-form", "Corpulence", "Covered in hair", "Animal arms",
    "Animal eyes", "Animal head", "Animal legs", "Animal mouth", "Animal skin", "Animal form",
    "Cyclops", "Extra arms", "Extra eyes", "Extra legs", "Forked tongue", "Gender swap",
    "Hunchback", "Item form", "Long arms", "Lose all hair", "Lose teeth", "Monster feature",
    "Monster trait", "No eyes", "No mouth", "Physical element skin", "Second face", "Sheds skin",
    "Shrinks", "Shrivels", "Skin boils", "Slime trail", "Translucent skin", "Weeps blood"
]
const INSANITIES = [ //Character affliction
    "Always lies", "Always polite", "Animal form belief", "Cannot count", "Cannot lie", "Faceblind",
    "Fears birds", "Fears blood", "Fears books", "Fears darkness", "Fears fire", "Fears gold",
    "Fears horses", "Fears iron", "Fears music", "Fears own hand", "Fears player character", "Fears rain",
    "Fears rivers", "Fears silence", "Fears sleep", "Fears sunlight", "Fears the moon", "Fears trees",
    "Genius belief", "Gorgeous belief", "Hates violence", "Invisibility belief", "Invulnerability belief", "Monster ability belief",
    "Monster feature belief", "Monster trait belief", "Must sing", "New personality", "Says thoughts", "Sees dead people"
]
const OMENS = [ //Magical Catastrophes or indicators of disaster
    "All iron rusts", "Animals die", "Animals mutate", "Birds attack", "City appears", "Deadly fog",
    "Dream plague", "Endless night", "Endless rain", "Endless storm", "Endless twilight", "Endless winter",
    "Fae return", "Forest appears", "Forgetfulness", "Graves open", "Lamentations", "Maggots",
    "Mass insanity", "Mass mutation", "Mass slumber", "Meteor strike", "Mirrors speak", "No stars",
    "Outsider enters", "People shrink", "People vanish", "Plants wither", "Portal opens", "Rifts open",
    "Shadows speak", "Space distorts", "Stones speak", "Total silence", "Tower appears", "Water to blood"
]
const CHAR_ABILITIES = [
    [2, 1, 0],
    [2, 0, 1],
    [1, 2, 0],
    [0, 2, 1],
    [1, 0, 2],
    [0, 1, 2]
]
const MONSTER_SIZES = ['Weak', 'Typical', 'Tough', 'Hulking', 'Colossal']
const HEALTH_WEIGHTING = [1,2,3,4,6]

// Num Generator
function num (num: number){
    var buf = new Uint8Array(1);
    getRandomValues(buf)[0]/2**32;
    return Math.floor(buf[0]/2**32*num)
}

// Job Getters
export function getJobCivilised() {return CIVILIZED_JOBS[num(CIVILIZED_JOBS.length)]}
export function getJobUnderworld() {return UNDERWORLD_JOBS[num(UNDERWORLD_JOBS.length)]}
export function getJobWilderness() {return WILDERNESS_JOBS[num(WILDERNESS_JOBS.length)]}

// Character Getters
export function getCharAppearance() {return CHAR_APPEARANCES[num(CHAR_APPEARANCES.length)]}
export function getCharPhysicalDetail() {return CHAR_PHYSICAL_DETAILS[num(CHAR_PHYSICAL_DETAILS.length)]}
export function getCharClothing() {return CHAR_CLOTHES[num(CHAR_CLOTHES.length)]}
export function getCharPersonality() {return CHAR_PERSONALITIES[num(CHAR_PERSONALITIES.length)]}
export function getCharMannerism() {return CHAR_MANNERISMS[num(CHAR_MANNERISMS.length)]}
export function getCharAsset() {return CHAR_ASSETS[num(CHAR_ASSETS.length)]}
export function getCharLiability() {return CHAR_LIABILITIES[num(CHAR_LIABILITIES.length)]}
export function getCharGoal() {return CHAR_GOALS[num(CHAR_GOALS.length)]}
export function getCharMisfortune() {return CHAR_MISFORTUNES[num(CHAR_MISFORTUNES.length)]}
export function getCharMission() {return CHAR_MISSIONS[num(CHAR_MISSIONS.length)]}
export function getCharMethod() {return CHAR_METHODS[num(CHAR_METHODS.length)]}
export function getCharSecret() {return CHAR_SECRETS[num(CHAR_SECRETS.length)]}
export function getCharReputation() {return CHAR_REPUTATIONS[num(CHAR_REPUTATIONS.length)]}
export function getCharHobby() {return CHAR_HOBBIES[num(CHAR_HOBBIES.length)]}
export function getCharRelationship() {return CHAR_RELATIONSHIPS[num(CHAR_RELATIONSHIPS.length)]}
export function getDivineDomain() {return DIVINE_DOMAINS[num(DIVINE_DOMAINS.length)]}
export function getAfterPartyDisaster() {return AFTER_PARTY_DISASTERS[num(AFTER_PARTY_DISASTERS.length)]}

// Animal Getters
export function getAnimalAerial() {return AERIAL_ANIMAL[num(AERIAL_ANIMAL.length)]}
export function getAnimalTerrestrial() {return TERRESTRIAL_ANIMAL[num(TERRESTRIAL_ANIMAL.length)]}
export function getAnimalAquatic() {return AQUATIC_ANIMAL[num(AQUATIC_ANIMAL.length)]}

// Monster Getters
export function getMonsterFeature() {return MONSTER_FEATURES[num(MONSTER_FEATURES.length)]}
export function getMonsterTrait() {return MONSTER_TRAITS[num(MONSTER_TRAITS.length)]}
export function getMonsterAbility() {return MONSTER_ABILITIES[num(MONSTER_ABILITIES.length)]}
export function getMonsterTactic() {return MONSTER_TACTICS[num(MONSTER_TACTICS.length)]}
export function getMonsterPersonality() {return MONSTER_PERSONALITIES[num(MONSTER_PERSONALITIES.length)]}
export function getMonsterWeakness() {return MONSTER_WEAKNESSES[num(MONSTER_WEAKNESSES.length)]}
export function getMonsterSize () {return MONSTER_SIZES[num(MONSTER_SIZES.length)]}

// Name Getters
export function getNameMasculine() {return MASCULINE_NAMES[num(MASCULINE_NAMES.length)]}
export function getNameFeminine() {return FEMININE_NAMES[num(FEMININE_NAMES.length)]}
export function getSurnameCommon() {return COMMON_SURNAMES[num(COMMON_SURNAMES.length)]}
export function getSurnameNoble() {return NOBLE_SURNAMES[num(NOBLE_SURNAMES.length)]}

// Spell Getters
export function getPhysicalEffect() {return PHYSICAL_EFFECT[num(PHYSICAL_EFFECT.length)]}
export function getPhysicalElement() {return PHYSICAL_ELEMENT[num(PHYSICAL_ELEMENT.length)]}
export function getPhysicalForm() {return PHYSICAL_FORM[num(PHYSICAL_FORM.length)]}
export function getEtherealEffect() {return ETHEREAL_EFFECT[num(ETHEREAL_EFFECT.length)]}
export function getEtherealElement() {return ETHEREAL_ELEMENT[num(ETHEREAL_ELEMENT.length)]}
export function getEtherealForm() {return ETHEREAL_FORM[num(ETHEREAL_FORM.length)]}
export function getMutation() {return MUTATIONS[num(MUTATIONS.length)]}
export function getInsanity() {return INSANITIES[num(INSANITIES.length)]}
export function getOmen() {return OMENS[num(OMENS.length)]}

// Other Getters
export function getCharAbilitySet() {return CHAR_ABILITIES[num(CHAR_ABILITIES.length)]}

export function getCharProfession() {
    let profession = "",
    choice = num(3)

    if (choice == 1) {
        profession = getJobCivilised()
    }
    else if (choice == 2) {
        profession = getJobWilderness()
    }
    else {
        profession = getJobUnderworld()
    }

    return profession
}

export function getMonsterHealth(size = 'Typical') {return num(HEALTH_WEIGHTING[MONSTER_SIZES.indexOf(size)] * 6);}

// Constructor functions
export function randCommonName (){
    let name = ''

    if (num(2) == 1){
        name += getNameMasculine()
    }
    else {
        name += getNameFeminine()
    }
    name += getSurnameCommon()
    
    return name
}

export function randNobleName (){
    let name = ''

    if (num(2) == 1){
        name += getNameMasculine()
    }
    else {
        name += getNameFeminine()
    }
    name += getSurnameNoble()
    
    return name
}

export function monsterAbilities (){
    let power = num(20);
    let attribute_weight = Array.from({length:4}, () => num(100))
    let total = attribute_weight.reduce((a,b)=> a+b, 0)
    let attributes = [power, 0, 0, 0, 0]

    attributes[1] = Math.round(attribute_weight[0]/total*power)
    attributes[2] = Math.round(attribute_weight[0]/total*power)
    attributes[3] = Math.round(attribute_weight[0]/total*power)
    attributes[4] = Math.round(attribute_weight[0]/total*power)

    return attributes
}

export function randCharacter (){
    let abilities = getCharAbilitySet()

    let character: Prisma.CharacterCreateInput = {
        name: randCommonName(),
        background: "",
        xp: 0,
        level: 1,
        health_max: 4,
        health_lost: 0,
        armor: 6,
        str: abilities[0],
        dex: abilities[1],
        wil: abilities[2],
        profession: getCharProfession(),
        appearance: getCharAppearance(),
        physical_detail: getCharPhysicalDetail(),
        clothing: getCharClothing(),
        personality: getCharPersonality(),
        mannerism: getCharMannerism(),
        npc: true,
        assets: getCharAsset(),
        liabilities: getCharLiability(),
        goals: getCharGoal(),
        misfortunes: getCharMisfortune(),
        missions: getCharMission(),
        secrets: getCharSecret(),
        reputations: getCharReputation(),
        hobbies: getCharHobby()
    }
    return character
}

export function randMonster (){
    let abilities = monsterAbilities()
    let size = getMonsterSize()

    let monster: Prisma.MonsterCreateInput = {
        name: "",
        background: "",
        health_max: getMonsterHealth(size),
        armor: 6,
        str: abilities[1],
        dex: abilities[2],
        wil: abilities[3],
        size: size,
        attack: abilities[4],
        tactics: getMonsterTactic(),
        personality: getMonsterPersonality(),
        weakness: getMonsterWeakness()
    }
    return monster
}

export function randCriminalChar (){
    let character = randCharacter()

    character.profession = getJobUnderworld()
    
    return character
}

export function randNobleChar (){
    let character = randCharacter()

    character.name = randNobleName()
    character.profession = getJobCivilised()

    return character
}

export function randItem (){
    let item: Prisma.ItemCreateInput = {
        name: "",
        description: "",
        value: 10
    }

    return item
}