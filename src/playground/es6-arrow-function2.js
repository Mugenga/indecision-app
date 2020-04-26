// Arguments Object - no longer bound with Arrow functions

// const add = function (a, b) {
//  console.log(arguments);
//  return a + b;
// };

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
   };

console.log(add(19, 11, 100));
// This Keyword - no longer bound

const user = {
    name:"Yves", 
    cities:['Kigali', 'Huye'],
    // printPlacesLived: function() {
    //     console.log(this.name)
    //     console.log(this.cities)

    //     // Workaround to access this in
    //     // Method
    //     //const that = this;

    //     this.cities.forEach((city) =>  {
    //         console.log(this.name + city);
    //     });
    // } 

    // ES6 Method Definition
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' Has Lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' Has Lived in ' + city);
        // });
    }
}

console.log(user.printPlacesLived())

// Challenge

const multiplier = {
    numbers:[1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());