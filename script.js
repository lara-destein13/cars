


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

// creates a pop up window in browser that says "click ok"
// alert('click ok');

var carsString = JSON.stringify(cars, null, 4);
alert(carsString);
