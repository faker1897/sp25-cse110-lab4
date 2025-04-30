1. The bug is that the type of num1 and num2 are both string, which means they are connected by
```+```, not adding them up. So the result is string too.

2. use parseInt() to convert them to numbers before adding.