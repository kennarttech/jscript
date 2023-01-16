// Data types in Javascript

/*
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt
*/



// Variables in Javascript

/*
1. let 
2. const
*/
// Example of variable
// ======================================
// let Name = 'kwame, Ben' - 33;
// const Students = 'Jame';
// console.log(Name, Students)

// Name = 'kenneth';
// let Year = 1992;
// console.log(Name, Year)
// console.log(typeof  Year)
// ======================================



// Operators
// Example of operators
// ======================================
// const ageJonas = 20 - 19;
// const ageSarah = 40 - 30;
// console.log(ageJonas, ageSarah)
// console.log(ageJonas * 2, ageSarah / 10, 2** 3);

// const Firstname = 'john';
// const lastname = 'Micheal';
// console.log(Firstname +' '+ lastname)

// const num = '20';
// const num2 = 3;
// console.log(num - num2);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x ++;
// x --;
// console.log(x);
// console.log(ageJonas > ageSarah);
// ======================================



// Strings and Templates Literals
// Examples of string
// ======================================
// const Firstname1 = 'Jonas';
// const job = 'Teacher';
// const birthYear = 1992;
// const year = 2022;

// const Jonas = "I'm " + Firstname + ', a ' + (year - birthYear) + ' Years old ' + job + '!';
// console.log(Jonas);

// Note: these statement can be coded in simple way
// const JonasNew = `I'm ${Firstname}, a ${year - birthYear} Year old ${job}!`;
// console.log(JonasNew);

// console.log('Sting with\n\
// multiple\n\
// lines');

// console.log(`string
// multiple
// name`);
// ======================================



// Taking Decisions_if_else statement
// Example
// ======================================
// const age = 19;
// const isOldEnough = age >= 18;

// if(isOldEnough){
//     console.log('Sarah can start driving license');
// }else{
//     const yearleft = 18 - age;
//     console.log(`Sarah is too young. wait another ${yearleft} years`);
// }
// ======================================



// Type Conversion and Coercion
// Example of Conversion
// ======================================
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(22), 23);
// ======================================



// Example of coercion
// ======================================
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('2' / '2')

// let n = '1' + 1;
// n = n - 1;
// console.log(n);
// ======================================



// Truthy and Falsy

/*javascript have 5 falsy values:
1. 0
2. ''
3. undefined
4. null
5. NaN
*/
// ======================================
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean());
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean('John'));

// const money = 0;
// if (money){
//     console.log("Don't spend all");
// }else{
//     console.log('You should get a job!');
// }

// const height = 0;
// if (height){
//     console.log('Yay! Height is defined');
// }else{
//     console.log('Height is Undefined');
// }

// ======================================



// Equality Operators
// ======================================
// const Age = 18;
// if (Age === 18){
//     console.log('You just became an adult');
// }

// const favourite = prompt('What is your favorourite');
// console.log(favourite);
// console.log(typeof favourite);

// const favone = Number(prompt('What is your number'));

// if(favone === 23){
//   console.log('cool 23 is a amazing number');
// } else if(favone === 7){
//     console.log('7 is a cool number though');
// } else{
//     console.log('Number is not 23 or 7');
// }

// if(favone !== 7){
//     console.log('Why not y')
// }
// ======================================



// Boolean logic
// ======================================
// Example of boolean logic
// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);
// ======================================



// Logical Operators
// ======================================
// const hasDriversLicense1 = true;
// const hasGoodVision1 = true;

// if(hasDriversLicense1 && hasGoodVision1){
//     console.log('Sarah is able to drive');
// }else{
//     console.log('Someone else should drive');
// }

// const isTired = true;

// if(hasDriversLicense1 && hasGoodVision1 && !isTired){
//     console.log('Sarah is able is drive!!');
// }else{
//     console.log('Someone else should drive :)');
// }
// ======================================



// Switch statement (similar to equality)
// ======================================
// const day = 'monday';
// switch(day){
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record video or learn something');
//         break;
//     default:
//         console.log('Not a valid day');
// }


// const days = 'monday';

// if(days === 'monday'){
//     console.log('just plan your course structure')
// }else if(days === 'tuesday'){
//     console.log('Go to coding meetup')
// }else if(days === 'wednesday' || days === 'thursday'){
//     console.log('Write code examples')
// }else if(days === 'thursday'){
//     console.log('Enjoy the weekend')
// }else if(days === 'friday'){
//     console.log('yeeeeeeeeeer')
// }else{
//     console.log('Not a valid day!')
// }
// ======================================



// Statements and Expressions
// ======================================



// ======================================




// The conditional( Ternary)
// ======================================
// const age = 23;
// age >= 18 ? console.log('I like to drink wine '):
// console.log('I like to drink water');

// const drink = age >= 18 ? 'wine': 'water';
// console.log(drink);


// let drink2;
// if (age >= 18){
//     drink2 = 'wine';
// }else{
//     drink2 = 'water'
// }

// console.log(drink2);
// console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`)
// ======================================



// ======================================

