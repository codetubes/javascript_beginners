Eeee// Comments
/* Working with numbers
console.log(5+10); 
console.log(5*10);
*/

// Working with strings
/*
let myCountry = "Armenia";
let myName = "Arman";
console.log("Hello "+myCountry+ " from Arman");
console.log(("Hello "+myCountry).toUpperCase());
console.log(("Hello "+myCountry).toLowerCase());
console.log(("Hello "+myCountry).substring(6,11));

let myNumber1 = 5;
let myNumber2 = 6;
myNumber1 = 15;
console.log(myNumber1+myNumber2);

const theYear = 2018;
//theYear = 2020;

console.log(theYear);

let myText = `My name is ${myName} and I'm form ${myCountry}`;
console.log(myText);
*/

//Working with Booleans
/*
let myBool1 = true;
let myBool2 = false;
let isLogedIn = false;
console.log(5<6);
*/

//Working with Nulls
/*
let myNull = null;
let myNumber = 15;
let myText = "Some Text here";
let myBool = true;

console.log(typeof(myBool));
*/

//Working with Arrays
/*
let countries = ["USA","China","Russia","France","Germany"];
console.log(countries);

let years = [2018,2019,2020.2021,2022];
console.log(years);

let mixedArray = ["Arman",2020,true,null,"USA"];
console.log(mixedArray);
*/
/*
console.log(countries[2]);
countries[2] = "Armenia";
console.log(countries);

countries.push("Georgia");
console.log(countries);

countries.unshift("Spain");
console.log(countries);

let lastElement = countries.pop();
console.log(lastElement);
console.log(countries);
*/
/*
let people = [
    ["Andrew","John","Jacob","Rob"],
    ["Julie","Nicole","Jane","Monic"]
];

//console.log(countries.indexOf("France"));
//console.log(mixedArray.length);
//console.log(people[0]);
//console.log(people[1]);
let fullArray = people[0].concat(people[1]);
console.log(fullArray);
*/

/* Working with dictionaries */
/*
let companies = {
    microsoft:1950,
    ibm:1965,
    google:1985,
    amazon:[2002,"Jeff Bexos","USA"],
    facebook:{
        year:2005,
        owner:"Mark Zuckerberg",
        country:"USA",
    }
}


console.log(companies);
companies.google = 1988;
console.log(companies);

//console.log(companies.microsoft);
*/


/* Working with Loops*/
let countries = ["USA","China","Russia","France","Germany"];
/*
for(let i = 0; i<=10;i++)
{
    console.log(i);

}
*/
/*
for(let i = 0; i<countries.length; i++)
{
    console.log(countries[i]);
}
*/
/*
for(let country of countries)
{
    console.log(country);
}
*/
/*
let i = 0

while(i<=10)
{
    console.log(i);
    i++;
}
*/

/* Working with if else statements*/

/*
let i = 0

while(i<=10)
{
    if((i > 3 || i < 8) || i == 5)
    {
        console.log("The value is greater 3 and less 8");
    }else 
    {
        console.log(i);
    }
    i++;
    
}
*/

/* Working with switch case operations */
/*
console.log("For home page press 1");
console.log("For contact page press 2");
console.log("For menu page press 3");
console.log("=======================");

let myOption = 8;

switch(myOption)
{
    case 1:
        console.log("Go to Home Page");
        break;
    
    case 2:
        console.log("Got to Contact Page");
        break;
    
    case 3:
        console.log("Go to Menu Page");
        break;
    
    default:
        console.log("Wrong Option");
}

*/

/* working with functions */
/*
let population = " 1 milion";
function say_hello(name, country)
{
    console.log("My Name is "+name+" and I'm from "+country + population);
}

function addNumbers(numberOne, numberTwo=6)
{
    return numberOne + numberTwo
}

say_hello("Arman", "Armenia");
say_hello("Julie", "USA");
let total = addNumbers(10);
console.log(total);
*/
/* Working with OOP
class Account 
{
    constructor(firstName, lastName, email,password)
    {
        this.first_name = firstName;
        this.last_name = lastName;
        this.email = email;
        this.password = password;
    }

    getInfo()
    {
        console.log(`
        First Name is ${this.first_name}\n
        Last Name is ${this.last_name}\n
        Email is ${this.email}
        `
            
        );
    }

    getFullName()
    {
        return this.first_name+ " - "+this.last_name;

    }
}

let account1 = new Account("Arman", "Avetisyan","arman@gmail.com","password1");
//console.log(account1);
//console.log(account1.last_name);
//let fullName = account1.getFullName();
//console.log(fullName)
account1.getInfo();
let account2 = new Account("John","Smith","john@gmail.com","password2");
account2.getInfo();
*/

/* Working with try catch blocks */
//let personName = "John";
try{
    console.log(personName);
}catch(e)
{
    if(e instanceof TypeError)
    {
        console.log("Type error...")
    }else if (e instanceof ReferenceError)
    {
        console.log("This is a Refrence Error");
    }else
    {
        console.log(e)
    }
}finally{
    console.log("execute this part");
}

//console.log("Continue...");

