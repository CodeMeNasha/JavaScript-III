/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - this applies to the entire thing
* 2. implicit binding - most common. refers to what is to left of dot and used only in methods
* 3. explicit binding - uses call, apply, or bind. this refers to whats in the ()'s in call and apply. apply is specific to arrays
* 4. new binding-
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this

// Principle 2

// code example for Implicit Binding

const oliveGarden = {
    location: "Phoenix",
    type: "Italian",
    dish: "alfredo",
    eat: function() {
        return `My favorite type of ${this.type} food is at Olive Garden located in ${this.location} where I love to order ${this.dish}.`
    }
}
console.log(oliveGarden.eat());
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding

function world() {
    console.log(this.city)
}

let favTravel = {
    state: "California",
    city: "San Diego",
}

world.call(favTravel);