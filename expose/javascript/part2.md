## part2-question1:  
It will output 3. Since the variable ```i``` is declared using var, so it can be used in the whole function. It will turn into
3 because of the ```for``` loop.

## part2-question2:  
It will output 150, because discountedPrice is declared using var, so it is accessible out of loop.
Additionally, The final updated value of discountedPrice is 150.

## part2-question3:  
It will output 150, the final updated value of ```finalPrice``` is 150, and it is declared using var, so it is accessible out of loop.

## part2-question4:
It will return [50, 100, 150] because discounted is an array that stores the final discounted prices calculated during each iteration of the loop.

## part2-question5:  
It will throw exception ```i is not defined```, because i is declared using let, it is not accessible out of the loop

## part2-question6:
It will throw exception ```discountedPrice is not defined```, because discountedPrice is declared in the loop using let.
So it is not accessible out of loop

 ## part2-question7:
It will output 150. Although finalPrice is declared using let, it is declared in the outer part of the function and has function scope, meaning it is accessible throughout the entire function. 

## part2-question8:  
It will return [50,100,150]. Because the discounted is also declared in the out part of the function.
So it can be manipulated in the loop, storaging each finalPrice

## part2-question9:  
i was declared using the let which means it can be used only in the loop. So it errors that ```i is not defined```

# part2-question10:
It will return 3 because length is declared in the outer part of the function. So it is accessible throughout the function
. Additionally, it is not changed in the function.

# part2-question11:
It returns [50,100,150] because const means the reference of the variable cannot be changed, but the contents it points to are still mutable.

# part2-question12:  
- A: student.name
- B: student["Grad Year"]
- C: student.greeting()
- D: student["Favorite Teacher"].name
- E: student.courseLoad[0]

# part2-question13:
- A. '32' In the js, if one operand is a string, and the other is a number, and they are connected
with operator ```+```, then the number will convert to string.
- B. 1  When one operand is a string and the other is a number, using the ```-``` 
operator will cause JavaScript to convert the string to a number and perform numeric subtraction.
- C. 3  The operator ```+``` here is used for number addition, so the null will be converted to 0
When one of the operands is a string, the + operator converts the other operand to a string and joins them together.
- D. 4  When the operator ```+``` is used for number, true will be converted to 1
- E. 0  Both null and false are coerced to 0
- F. '3undefined' '3'is a string, and the operator is ```+```, so the undefined is coerced to 'undefined'
- G. 3  Because the undefined will be coerced to 0.


# part2-question14:
- A. true When string is compared to a number(><=) then the string will be converted to number
- B. false When string is compared to a string then they will compared by the unicode
- C. true '2' will be converted to 2
- D. false The operator ```===``` is used for strict equality, so the type of the operands must be the same.
- E. false The true will be converted to 1
- F. true The Boolean(2) will return true, which is equal to true(true===true)

# part2-question15:
The operator```==``` is used for type coercion, so it will convert the operands to the same type before comparing them.
But the operator```===``` is used for strict equality, so it will not convert the operands to the same type before comparing them.

# part2-question17:  
It will return [2,4,6]. In the line 4, newArr.push(callback([array[i]]))
It calls the function doSomething. Each value in the array is passed into the callback function and multiplied by 2.

# part2-question19:
Output 1432  
Output 3 immediately and output 2 after 1 second.