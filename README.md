# My Smart Contract Language
Custom Language Compiler and Executor Documentation
## Introduction
This code implements a basic custom language compiler and executor. The provided code allows you to write simple code in a custom language, tokenize it, execute arithmetic operations and variable assignments, and log the results. The code includes a tokenize function to process the input code and convert it into tokens, and an execute function to execute the tokenized code.

## Usage
Modify the inputCode variable with your custom language code.
The tokenMap object defines the mapping of custom language operators and keywords to their corresponding tokens.
The tokenize function processes the inputCode and tokenizes it, creating an array of tokens for further processing.
The execute function takes the tokenized code as input, processes arithmetic operations and variable assignments, and logs the results.
tokenize Function
The tokenize function converts the input code into an array of tokens for further execution. It splits the input code by whitespace, filters out empty lines, and maps custom language operators and keywords to their corresponding tokens. It returns the tokenized array.

## execute Function
The execute function iterates through the tokenized code array, performing arithmetic operations, handling variable assignments, and logging the results. It maintains a variables object to store variable values. The function processes arithmetic operations by replacing the operation token and its operands with the computed result. It processes variable assignments by storing variable names and values in the variables object. It logs the results of the LOG operations by pushing the corresponding value to the result array. The function returns the result array containing the logged values.

## Example
``` javascript
const inputCode = "a = 3;
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
";

const tokenizedCode = tokenize(inputCode);
const executedCode = execute(tokenizedCode);

console.log("Tokenized Code:", tokenizedCode);
console.log("Executed Code:", executedCode);
```

## Limitations
This code example is simplistic and lacks advanced features such as error handling, control structures, and support for complex expressions. It's meant for educational purposes and can be extended for more sophisticated language capabilities.

## Conclusion
The provided code demonstrates a basic custom language compiler and executor, showcasing the process of tokenization, variable assignments, arithmetic operations, and result logging. It serves as a starting point for building more robust custom language interpreters or compilers.
