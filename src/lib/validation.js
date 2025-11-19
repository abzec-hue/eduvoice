
const badWords = [
    // General profanity and insults
    'bastard', 'bellend', 'bloodclaat', 'bumberclat', 'dickhead', 'shit', 'shite', 
    'son of a bitch', 'twat', 'fuck', 'motherfucker', 'bitch', 'arsehole', 'beaver',
    'bollocks', 'clunge', 'cock', 'dick', 'fanny', 'knob', 'minge', 'prick', 'pussy',
    'snatch', 'tits', 'arse', 'cunt', 'gash', 'japs eye', 'punani', 'pussy hole',
    'jizz', 'milf', 'shag', 'skank', 'slag', 'slapper', 'spunk', 'tosser', 'wanker',
    'whore', 'cocksucker', 'cum', 'nonce', 'prickteaser', 'raped', 'slut',
    
    // Ethnic and racial slurs
    'femi-nazi', 'yoon', 'cracker', 'bud bud', 'chinaman', 'coconut coloured',
    'curry muncher', 'honky', 'jap', 'kraut', 'monkey', 'paddy', 'sheep shagger',
    'slope', 'tinker', 'ching chong', 'chinky', 'coon', 'darky', 'gippo', 'golliwog',
    'golly', 'half-caste', 'jungle bunny', 'kike', 'negro', 'nigger', 'nig-nog',
    'paki', 'pikey', 'raghead', 'sambo', 'spade', 'spic', 'wog', 'yid',
    
    // LGBTQ+ slurs
    'bender', 'bummer', 'fag', 'homo', 'lezza', 'ponce', 'poof', 'batty boy',
    'butt bandit', 'chick with a dick', 'dyke', 'faggot', 'fudge packer',
    'gender bender', 'muff diver', 'rugmuncher', 'shemale', 'shirt lifter', 'tranny',
    
    // Religious slurs
    'bible basher', 'fenian', 'hun muzzie', 'papist prod', 'taig', 'tarrier',
    
    // Disability slurs
    'deaf and dumb', 'dwarf', 'flid', 'midget', 'moron', 'psycho', 'cripple',
    'mong', 'retard', 'schizo', 'spastic', 'window licker',
    
    // Additional slurs
    'machod', 'uloo ka patha'

    // All from Public attitudes towards offensive language on TV and Radio pdf
];

export function validateText(text) {
    if (!text || text.trim() === '') {
        return { 
            cleanText: text, 
            hasBadWords: false, 
            detectedWords: [] 
        };
    }

    let cleanText = text;
    let hasBadWords = false;
    let detectedWords = [];
    
    badWords.forEach(badWord => {
        // Use word boundaries to match whole words only
        const regex = new RegExp(`\\b${badWord}\\b`, 'gi');
        const matches = text.match(regex);
        
        if (matches) {
            // Replace with asterisks (maintaining word length)
            const replacement = '*'.repeat(badWord.length);
            cleanText = cleanText.replace(regex, replacement);
            hasBadWords = true;
            
            // detected words
            matches.forEach(match => {
                if (!detectedWords.includes(match.toLowerCase())) {
                    detectedWords.push(match.toLowerCase());
                }
            });
        }
    });
    
    return { 
        cleanText, 
        hasBadWords, 
        detectedWords 
    };
}

export function getValidationMessage(detectedWords) {
    if (detectedWords.length === 0) return '';
    
    if (detectedWords.length <= 3) {
        return `Inappropriate language detected please avoid using: ${detectedWords.join(', ')}`;
    } else {
        return `Multiple inappropriate terms (${detectedWords.length}) detected and removed from your text.`;
    }
}

