const inputCode = `a = 3;
b = 7;
c = 8;
sum = a + c;
mul = a * c;
sub = a - b;
div = b / c;
log sum;
log mul;
log sub;
log div;
`;

const tokenMap = {
    '=': 'EQ',
    '+': 'ADD',
    '-': 'SUB',
    '*': 'MUL',
    '/': 'DIV',
    'log': 'LOG',
    ';': 'NEXT'
};

const tokenList = [
    "EQ",
    "ADD",
    'SUB',
    'MUL',
    'DIV',
    'LOG',
    'NEXT'
];

function tokenize(inputCode) {
    const extracted = inputCode.split(/\s/).filter(line => line.trim().length > 0);
    const tokens = [];
    
    extracted.forEach((token) => {
        tokens.push( tokenMap[token.toString()] ? tokenMap[token] : token.split(';')[0] );
        if(token.includes(';')){
            tokens.push('NEXT')
        }
    })

    return tokens;
}

function execute(tokenizedCode) {
    const variables = {};
    let currentVariable = '';
    let result = [];
    
    for(let i = 0; i < tokenizedCode.length; i++){
        if(tokenizedCode[i] == 'ADD') {
            tokenizedCode[i] = Number(variables[tokenizedCode[i-1]]) + Number(variables[tokenizedCode[i+1]]); 
            tokenizedCode.splice(i-1, 1);
            tokenizedCode.splice(i+1, 1);
        }
        if(tokenizedCode[i] == 'SUB') {
            tokenizedCode[i] = Number(variables[tokenizedCode[i-1]]) - Number(variables[tokenizedCode[i+1]]); 
            tokenizedCode.splice(i-1, 1);
            tokenizedCode.splice(i+1, 1);
        }
        if(tokenizedCode[i] == 'DIV') {
            tokenizedCode[i] = Number(variables[tokenizedCode[i-1]]) / Number(variables[tokenizedCode[i+1]]); 
            tokenizedCode.splice(i-1, 1);
            tokenizedCode.splice(i+1, 1);
        }
        if(tokenizedCode[i] == 'MUL') {
            tokenizedCode[i] = Number(variables[tokenizedCode[i-1]]) * Number(variables[tokenizedCode[i+1]]); 
            tokenizedCode.splice(i-1, 1);
            tokenizedCode.splice(i+1, 1);
        }
        if(tokenizedCode[i] == 'EQ') {
            if(variables[tokenizedCode[i+1]]) {
                variables[tokenizedCode[i-1]] = variables[tokenizedCode[i+1]];
            } else {
                variables[tokenizedCode[i-1]] = tokenizedCode[i+1];
            }
        }
    }
    
    for(let i = 0; i < tokenizedCode.length; i++){
        if(tokenizedCode[i] == 'EQ') {
            if(variables[tokenizedCode[i+1]]) {
                variables[tokenizedCode[i-1]] = variables[tokenizedCode[i+1]];
            } else {
                variables[tokenizedCode[i-1]] = tokenizedCode[i+1];
            }
        }
        if(tokenizedCode[i] == 'LOG') {
            if(variables[tokenizedCode[i+1]]) {
                result.push(variables[tokenizedCode[i+1]]);
            }else{
                 result.push(tokenizedCode[i+1]);
            }
        }
    }

    return result;
}

const tokenizedCode = tokenize(inputCode);
console.log('Tokenized Code:', tokenizedCode);

const executedCode = execute(tokenizedCode);
console.log('Executed Code:', executedCode);
