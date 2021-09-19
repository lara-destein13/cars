// 1.) Create a git project with an index.html and a script.js.  
// The only thing needed in index.html is the script tag that 
// brings in your script.js
// 2.) You'll be "printing" a lot of stuff using console.log.
// 3.) Create a javascript array of objects called "cars" that 
// contains the car data above.
// 4.) Use JSON.stringify to convert the "cars" array 
// to a string and print it.
// 5.) Use array.push to add another car of your invention 
// to the "cars" array.
// 6.) Again, use JSON.stringify to convert the "cars" array 
// to a string and print it.
// 7.) Iterate over the "cars" array printing out just the model.
// 8.) Sort the "cars" array in increasing order by mpg. 
// Then print the "cars" array.


// 3.) This is an array of objects (key value pairs) we know it is 
// an array because the text is contained in [].

var cars = [
    { 'make': 'Kia', 'model': 'Optima Hybrid', 'mpg': 42, 'msrp': 29310, 'score': 7.8 },
    { 'make': 'Ford', 'model': 'Fusion Hybrid', 'mpg': 42, 'msrp': 28000, 'score': 7.9 },
    { 'make': 'Lexus', 'model': 'ES Hybrid', 'mpg': 44, 'msrp': 41810, 'score': 8.2 },
    { 'make': 'Toyota', 'model': 'Avalon Hybrid', 'mpg': 44, 'msrp': 37000, 'score': 8.3 },
    { 'make': 'Honda', 'model': 'Accord Hybrid', 'mpg': 48, 'msrp': 25620, 'score': 8.4 },
    { 'make': 'Toyota', 'model': 'Camry Hybrid', 'mpg': 52, 'msrp': 28430, 'score': 8.7 },
    { 'make': 'Toyota', 'model': 'Corolla Hybrid', 'mpg': 52, 'msrp': 23100, 'score': 8.1 },
    { 'make': 'Honda', 'model': 'Insight', 'mpg': 52, 'msrp': 22930, 'score': 8.0 },
    { 'make': 'Toyota', 'model': 'Prius', 'mpg': 56, 'msrp': 24325, 'score': 7.9 },
    { 'make': 'Hyundai', 'model': 'Ioniq', 'mpg': 58, 'msrp': 23200, 'score': 8.0 },
]

// 4.) Use JSON.stringify to convert the "cars" array 
// to a string and print it.

// 'var' comes first before defining a variable followed by 
// the name of our variable (can be anything, but should 
// represent what the variable contains - our varibale contains
// car string so it would make sense to use "carString"
// JSON.stringify converts the objects (key value pairs) 
// in our array into a printed string. (cars, null, 4) takes
// the string and organizes it in a way that is easier to read.
// cars is the name of the array, null (no value)
// the 4 represents the number of spaces to indent. 
// on the next line down we are calling on the alert function
// and inputting the argument carString. This allows us to view
// our array presented as string in an alert window built into
// the browser. 
var carsString = JSON.stringify(cars, null, 4);
alert(carsString);






