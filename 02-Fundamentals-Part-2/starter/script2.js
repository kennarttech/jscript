// Activating Strict Mode
// ======================================


/*Advantage of using strict mode
2. this function forbids from doing certain things

1. It create visible errors in the developer mode*/

'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 33;
// ======================================



// Function
// ======================================

// function logger(){
//     console.log('My name is Kenneth');
// }

// logger();


// function fruitProcessor(apples, oranges, banana){
//     console.log(apples, oranges, banana)
//     const juice =`Juice with ${apples} apples and ${oranges}`;
//     return juice;
// }

// const appleJuice = fruitProcessor(55, 44);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(22, 2);
// console.log(appleOrangeJuice);

// const Students_name = fruitProcessor('ben', 'joice', 'kenn');
// console.log(Students_name);
// ===========================================



// function Declarations vs Expression
// function declaration
// function Students_attributes(Stu_Name, Level, Course){
//     console.log(Stu_Name, Level, Course);
//     const result =`The name of student is ${Stu_Name} and he is in level ${Level} and he is studying  ${Course}`;
//     console.log(result);
// }
// Students_attributes('kenneth', 200, 'Information communication');



// ===========================================
// or function can also be written this way
// function expression
// const Advantage = function(age){
//     return 2022 - age;
// }
// const age2 = Advantage(1992);
// console.log(age2);
// ===========================================



// Arrow Function
// ===========================================
// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);
// ===========================================



// Example 2 of function
// ===========================================

function cutFruitPieces(fruit){
    return fruit * 4;
}


function fruitProcessor(oranges, apples){
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${orangesPieces} piece of apple and ${applePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(2, 2));
// Example 2 of function
// ===========================================



// ===========================================
const calcAge = function(birthYear){
    return 2037 - birthYear;
}


const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
 
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement}`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired`);
        return -1;
    }
    
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));




// function example of book shop
function addBook(English, Maths, Social){
    return English + Maths +  Social;
}



function bookInStore(Englishl, Maths, Social){
    const totalEnglishbook = addBook(Englishl);
    const totalMathsbook = addBook(Maths);
    const totalSocialbook = addBook(Social);
    
    // const totalbook
}