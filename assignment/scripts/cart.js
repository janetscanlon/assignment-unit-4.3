console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//1. global variable basket set to an empty array

let basket = [];

//create a function called addItem, parameter for a string item
function addItem(item){ 
    basket.push(item);       //add the new item to the global array basket *basket.push
    return true;             // return true indicating the item was added
}

console.log(addItem('chocolate milk'), basket);
console.log(addItem('strawberries'), basket);
console.log(addItem('onions'), basket);
console.log(addItem('brie cheese'), basket);
console.log(addItem('honey'), basket);


// checking for the function running and to console log the array with the new item


//2. create a function called listItems

function listItems(){
    for(let item of basket){        //loop over the items in the basket array *for of loop
        console.log(item);          //console.log each individual item on a new line
    }
}

listItems(); //testing listItems function


//3. create a function called empty
// reset the basket to an empty array 
//do not use basket = [] to reset the array 

function empty(){
    while( basket.length > 0){
        basket.pop();
    }
}

console.log('this is a test for the empty function', empty(), basket);

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
