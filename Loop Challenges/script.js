//1. Display odd numbers from 1 to 20 , Using a loop, create code to print all odd numbers from 1 to 20 in the console.
for(var i = 1 ; i<=20; i++){
    if (i%2 === 1)
        console.log(i)
} 
//2.Decreasing multiples of 3 , Using a loop, write code to display all numbers that are divisible by 3 from 100 down to 0 in the console.
for(var i = 100 ; i >= 0 ;i--){
    if(i%3===0)
        console.log(i)
}
//3. Print the given sequence , Using a loop, write code to print the values in the sequence 4, 2.5, 1, -0.5, -2, -3.5 in the console.
var start = 4;
var stop = -4;
var step = 1.5;
while(start >= stop){
    console.log(start)
    start-=step;
}
//4.Sigma ,Write code to calculate the sum of all numbers from 1 to 100 and display the result in the console. The sum should be equivalent to 1 + 2 + 3 + ... + 98 + 99 + 100, which totals 5050.
var Sigma = 0
for(var i = 0 ; i<=100;i++){
    Sigma+=i;
    console.log(Sigma)
}
//5. Factorial , Create a program that multiplies all numbers from 1 to 12 and stores the result in a variable called "product". Finally, display the result by using console.log, multiplying 1 * 2 * 3 * ... * 10 * 11 * 12. The final result should be 479001600.
var Factorial = 1
for(var i = 1 ; i<=12;i++){
    Factorial*=i;
    console.log(Factorial)
}