/*https://www.udemy.com/course/the-complete-javascript-course/
*/

//Coding Challenge 1
/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. 
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. 
John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
let mark_mass = 78
let mark_height = 1.69
let john_mass = 92
let john_height = 1.95

let johnBMI = john_mass / john_height ** 2
let markBMI = mark_mass / (mark_height * mark_height)
console.log(johnBMI, markBMI)

let markHigherBMI = markBMI > johnBMI
console.log(johnBMI,markBMI,markHigherBMI)


//Coding Challenge 2


//Coding Challenge 3


