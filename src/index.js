const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let len = expr.length;
    let array = [];
    let word = '';
    
    for (let i = 0; i < len; i++) {
        if (i % 10 === 0) {
            array.push(expr.substring(i, i + 10));
        }
    }

    for (let j = 0; j < array.length; j++) {
        let decWord = '';
        for (let k = 0; k < 10; k++) {
            if (array[j][k] === '1' && array[j][k+1] === '0') {
                decWord += '.';
                k++;
            }
            else if (array[j][k] === '1' && array[j][k+1] === '1') {
                decWord += '-';
                k++;
            }
            else if (array[j][k] === '*') {
                decWord = ' ';
            }
        }
        if (decWord === ' ') {
            word += decWord;
        }
        else {
            for (key in MORSE_TABLE) {
                if (decWord == key) {
                    word += MORSE_TABLE[key];
                }
            }
        }
        
    }

    return word;
}

module.exports = {
    decode
}