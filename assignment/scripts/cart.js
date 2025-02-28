console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//1. global variable basket set to an empty array

let basket = [];
const maxItems = 5  //STRETCH 1. add a global const named maxItems and set it to 5

//2.create a function called isFull
function isFull(){
    if(basket.length < maxItems){       //STRETCH. return false if the basket contains less than max number of items 
        return false;                   
    }
    else{
        return true;                    //STRETCH. return true otherwise (equal or more than maxItems)
    }
}


//create a function called addItem, parameter for a string item
function addItem(item){
    if(isFull() === false){         //STRETCH 3. update the required addItem function to use the isFull function to prevent more than maxItems from being added to the basket
    basket.push(item);              //add the new item to the global array basket *basket.push
        return true;                // return true indicating the item was added 
    }
    else{
        return false;               //STRETCH. if there was no room and the item could not be added return false 
    }
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
    console.log(item);              //console.log each individual item on a new line
    }
        return true;
}

listItems(); //testing listItems function


//3. create a function called empty

function empty(){
    while( basket.length > 0){
        basket.pop();               // reset the basket to an empty array do not use basket = [] to reset the array 
    }
        return basket;
}

console.log('this is a test for the empty function', empty(), basket); 
console.log('this is a test for the isFull function', isFull(), basket);


//STRETCH 4. create a function called removeItem


    
    //use Array.indexOf to find the index of the first matching item in the basket
    //use Array.splice to remove the first matching item from the basket 
    //return the item removed or null if the item was not found 


function removeItem(item){          //take an input parameter for a string item
    if(basket.indexOf(item)){
       const i = basket.indexOf(item);
       basket.splice(i, 1);
        return item;
    }else{
    return null;
    }
}

console.log('this is a test for the removeItem function', removeItem('brie'), basket);



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
