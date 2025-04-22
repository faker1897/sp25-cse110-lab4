## part1-question1: 
"values added: 20"

## part1-question2: 
"final result: 20"Because the var does not limit scope to the block, the result variable is defined
throughout the function.

## part1-question3: 
I have been taught that using global variables is harmful to the code, as they can lead to unexpected
behaviors and bugs. Since var is function-scoped, it may also cause issues due to variable hoisting. When I change var to let, it throws an exception saying result is not defined, because let is block-scoped
and the variable is not accessible outside the if block.

## part1-question4:
It successfully returns "values added: 20".
## part1-question5:
It throws an exception said ```result is not defined``` because the result is declared by let, which means it can only be used in this ```if ``` block  
## part1-question6:  
It throws an exception said ```Assignment to constant variable```, you can not change variables declared by const
## part2-question7:  
Due to the error that occurs inside the if block, the function terminates before reaching line 13.