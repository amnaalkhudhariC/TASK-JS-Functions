/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function  printname(Name)
{
    console.log(Name)
}

printname("ahmad")

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birth){
console.log(2023 - birth)
}
printAge(2000)
/*
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello (){}

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */function printMax(x,y){
    if(x>y){
        console.log(x)

    }else if (y>x){
        console.log(y)
    }
 }
 printMax(10,5)
printMax(2,20)