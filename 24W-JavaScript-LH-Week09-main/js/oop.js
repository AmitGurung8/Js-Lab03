// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too




// Answers for Lab 3


// I am first going with defining a function to create a hamburger object first
function createHamburger(bunType, garnishes, cheeses, sauces, meatType, pattyCount, toppings) {
    let hamburger = {
        bunType: bunType,
        garnishes: garnishes,
        cheeses: cheeses,
        sauces: sauces,
        meatType: meatType,
        pattyCount: pattyCount,
        toppings: toppings,
        describe: function() {
            return `This hamburger has ${this.pattyCount} ${this.meatType} patties on a ${this.bunType} bun, with ${this.garnishes.join(', ')}, ${this.cheeses.join(', ')}, ${this.sauces.join(', ')}, and ${this.toppings.join(', ')}.`;
        }
    };

    return hamburger;
}

// Now I am creating a hamburger object
let myHamburger = createHamburger(
    "sesame seed",
    ["lettuce", "tomato", "onion"],
    ["cheddar"],
    ["mayonnaise", "ketchup"],
    "beef",
    2,
    ["pickles", "bacon"]
);

// Output the description of the hamburger
console.log(myHamburger.describe());


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS