// An object is a common data structure that holds key and value pairs

console.log('JavaScript Object Methods');

const person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 23
}
console.log(person);

const supreme = {
    firstName : 'Olamide',
    lastName : 'Abiodun',
    profession : 'Caterer',
    isMarried : true,
    gender : 'male'
}

console.log(supreme);

const director = {
    firstName : 'Aliu',
    lastName : 'Musa',
    age : 40,
    gender : 'Male',
    isMarried : true,
    car1 : {
        carName : 'Lexus',
        year : '2010',
        color : 'gray'
    },
    car2 : {
        carName : 'Toyota',
        year : '2015',
        color : 'gray'
    }
}
console.log(director.firstName, director.lastName);
console.log(director.car1.carName);

// Variables are values in a object 

const firstName = 'Rodiyat';
const lastName = 'Olajide';

const person2 = {
    firstName : firstName,
    lastName : lastName
}
console.log(person2);

const person3 = {
    firstName,
    lastName
}
console.log(person3);

// ACCESSING, UPDATING AND ADDING PROPERTIES IN AN OBJECT ==>

// DOT NOTATION ==> 

const player = {
    firstName : 'Silva',
    lastName : 'Thiago',
    age : 40,
    team : {
        clubName : 'Chelsea',
        location : 'England',
        manager : 'Pochettino'
    },
    jerseyNumber : 6
}
console.log(player);
console.log(player.team.clubName);   

// SQUARE BRACKET

console.log(player['team']['location']);

// BUILT IN METHOD ==> Is a property that contains a function declaration.

const myObject = {
    myObject1 : () => {},                      //Arrow Function
    myObject2 : function() {},                 //Function Expression
    myObject3 () {}                            //Function Declaration 
}

// EXAMPLE ==>

const dog = {
    name : 'fluffy',
    age : 6,
    bark(){
        console.log('woof woof!');
    }
}
console.log(dog.name);
dog.bark()

// OBJECT METHODS  ==>

const employees = {
    boss : 'Team Lead',
    secretary : 'John',
    sales : 'Jummy',
    accountant : 'Oscar'
}

// Object.keys ==>

const employeesInfo = Object.keys(employees);
console.log(employeesInfo);

// Object.values ==>

const session = {
    id : 1,
    date : '5th September, 2024',
    device : 'Mobile',
    browser : 'Chrome'
}

const sessionValue = Object.values(session);
console.log(sessionValue);

// Object.entries ==>

const sessionEntries = Object.entries(session);
console.log(sessionEntries);

const user = {
    username : 'Alamu',
    password : 1234
}
console.log(user);
// user.firstName = 'Ade'
const userInfo = Object.values(user);
console.log(userInfo);

// Object.seal() ==>

const user1 = {
    username : 'Soliu',
    password : 6789
}

const userInfo1 = Object.seal(user1);
user1.username = 'Bola';
userInfo1.age = 30;
console.log(userInfo1);


let x;

const person5 = {
    name : 'Ali',
    age : 2,
    isAdmin : true,
    address : {
        street : '12, Unity and peace',
        city : 'Ota',
        state : 'Kwara State'
    },
    hobbies : ['Music', 'sport']
}
x = person5.name;
console.log(x);

// ACCESSING AN ARRAY INSIDE AN OBJECT ==>

x = person5.hobbies[0];
let y = person5['hobbies'][1];
console.log(x, y);

// UPDATE A PROPERTY ==>

person5.name = 'Abdullah'
console.log(person5);

person5.isAdmin = false;
console.log(person5);

// DELETE A PROPERTY ==>

delete person5.address.state;
console.log(person5.address);

// ADD A PROPERTY ==>

person5.haschildren = true;
console.log(person5);

// ADD FUNCTION TO AN OBJECT

person5.greet = function () {           //this can only be done with function expression
    console.log(`Hello, my name is ${this.name}`);
};
person5.greet();

person5.ages = function () {         
    console.log(`I am ${person5.age} years old`);
};
person5.ages();


// FUNCTION EXPRESSSION

const myFuntion = function outerFunction () {

}

// FUNCTION DECLARATION

function innerFunction () {

}

// ARROW FUNCTION

const arrowFunction = () => {

}

