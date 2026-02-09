/////// Variables Section ///////
const myName = "Brandon Fuentes-Coronado"
const fruits = ['apples', 'bananas', 'blueberries', 'strawberries', 'pineapples'];
const car = [{make:"Toyota", model:"Prius", color:"Silver"},
             {make:"Chevy", model:"Bolt", color:"Blue"}, 
             {make:"Honda", model:"Civic", color:"White"}];
const today = new Date();
const loggedIn = true;



/////// PART 1 - Variables and Data Types demo///////
var a = 'Test1';
let b = 'Test2';

function testVar(){
  var a = 30;
  
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

function testLet(){
  let a = 30;
 
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

//console.log(a);
//console.log(b);
//console.log("Example using var");
//testVar();
//console.log("Example using LET");
//testLet();
// When you are done with this section you can comment out the console.logs above






//////// PART 2 - template literals////////
const result2Element = document.getElementById('result2');

////starter code////
//update code below to using template literals (not concatenation) to pull in the variables myName, color, make, into output
result2Element.innerHTML = `Hello, my name is ${myName}, and I drive a ${car[2].color} ${car[2].make} ${car[2].model}`;


//Footer Section
const footerElement = document.getElementById("footer");
//update code below to use template literals to pull in the myName and the current year
footerElement.innerHTML = `&copy; ${myName} ${today.getUTCFullYear()}`;





//////// PART 3 - Ternary Operator////////
////section 1 - basic if else statement
if (loggedIn) {
    const result3Element = document.getElementById('result3');
    function renderApp() { result3Element.innerHTML = "Welcome!";
    }
} else {
    const result3Element = document.getElementById('result3');
    function renderLogin() { result3Element.innerHTML = "Please log in.";
    }
}

////section 2 -ternary operator to update the result3Element
loggedIn ? renderApp() : renderLogin();




//////// PART 4 - Arrow Functions////////

//GreetingsArrow() arrow function
GreetingsArrow = (name) => `Hello ${name}!`;
console.log(GreetingsArrow(myName));



//////// PART 5 - Array methods////////
function printFruit() {

    let resultElement = document.getElementById("result5");

    resultElement.textContent = "";


    // As mentioned in the assignment, LLM was used to help create this function
    fruits.filter(fruit => fruit.startsWith("b")).map(fruit => { let p = document.createElement("p"); 
      p.textContent = fruit; 
      resultElement.appendChild(p); });

 }

 function clearText() {
    let resultElement = document.getElementById("result5");
    resultElement.textContent = "";
 }



 //////// PART6 - Destructuring////////
 myCar(car[0]);

 function myCar({color, make, model}) {
     
     var message = `I drive a ${color} ${make} ${model}`;
   
     document.getElementById("result6").textContent = message;
 }



//////// PART 7 - Spread Operator////////

const baseProduct = {
    id: 'PROD-001',
    name: 'Wireless Headphones',
    price: 199.99,
    warranty: '1 year'
  };
  
  // Seasonal promotion overrides
  const holidayPromo = {
    price: 149.99,
    promoText: 'Holiday Special!',
    bundle: 'Free carrying case'
  };
  
  // Merge basePrduct and Seasonal using spread operator and add lastUpdated property with a value of '2023-12-31'
  const currentProduct = {...baseProduct, ...holidayPromo,
    lastUpdated: `${today.getUTCFullYear()}-${today.getUTCMonth()}-${today.getUTCDate()}`
};
  
  //Check the result object in the console:
  console.log(currentProduct);
  //UPDATE THIS OUTPUT
  document.getElementById("result7").textContent = `The ${currentProduct.name} are on sale for ${currentProduct.name} ${currentProduct.price} as of ${currentProduct.lastUpdated}`; 





 //////// PART 8 - Try Catch////////
 function InputValidation() {
    const message = document.getElementById("part8-p");
    message.innerHTML = "";
    
    let x = document.getElementById("part8-input").value;
    
    try { 
    if(x.trim() == "") throw "EMPTY";
    if(isNaN(x)) throw "NOT A NUMBER";
    x = Number(x);
    if(x > 15) throw "TOO HIGH";
    if(x < 10) throw "TOO LOW";
    if (x > 9 & x < 16) throw "Success";
    }
    catch(err) {
      if (x > 9 & x < 16) message.innerHTML = "Success";
      else message.innerHTML = "Input is " + err;
     } 
    finally {
    }
    
  }


