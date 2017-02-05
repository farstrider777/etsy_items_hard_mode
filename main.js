/*
Hard Mode

Write an additional function for each answer that uses whatever higher order functions you need.

forEach
map
filter
reduce
*/

//Show me how to calculate the average price of all items.
//  The average price is $23.63

// to be reused for any Price display if necessary
function roundToCents(rawPrice){
  return Math.round(rawPrice * 100) / 100    // toFixed could have been used but we write our own code here :)
}

// to get the entire element and set it = to javascript varible
var jAnswer1 = document.getElementById("answer1");

//gets each object in the array with forEach method
//uses annoymous fuction to add each the to a sum variable then divides by total items and returns avg
function calcAverPrice(){
  var sum = 0
  items.forEach(function (i) {sum += i.price})
  return sum / items.length
}


// displays rounded average onscreen with a nice dollar sign
jAnswer1.innerHTML = "The average price is $" + roundToCents(calcAverPrice());


/*Show me how to get an array of items that cost between $14.00 and $18.00 USD
  1970s Coors Banquet Glass Beer Pitcher

  The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug

  Hand Painted Colorful Feather Glass*/

var items14To18bucks = []; // initalize array to be filled with 14 to 18 dollar items

// function to be passed to the filter method. tells it which items to filter
function check(i){
  return (i.price < 18 && i.price > 14)
}

//uses the higher order function filter to create new array
function createArray14To18(){
  items14To18bucks = items.filter(check)
}

//calls function
createArray14To18();

// to get the entire element and set it = to javascript varible
var jTitle = document.getElementById("answer2");

//loops through array and prints to html with paragraph breaks
for(var count = 0; count < items14To18bucks.length; count++){
  jTitle.innerHTML += "<P>" + items14To18bucks[count].title + "</P>";
}


/*Which item has a "GBP" currency code? Display it's name and price.
  1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18 */

var arrayGBP = [];

arrayGBP = items.filter(function (i) {return i.currency_code === "GBP"})

var jAnswer3 = document.getElementById("answer3")

jAnswer3.innerHTML = arrayGBP[0].title + " costs &pound" + arrayGBP[0].price;


/*
Display a list of all items who are made of wood.
  SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.

  Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.

  Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.

  Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.

  Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
*/




var jAnswer4 = document.getElementById("answer4") //sets jAnswer 4 to the correct element


// old code 15 lines new code seven!!! :)
function isMadeOfWood(item){
  return item === "wood"
}

for(var count = 0; count < items.length; count++){
  if("wood" === items[count].materials.filter(isMadeOfWood)[0]){
    jAnswer4.innerHTML += "<P>" + items[count].title + " is made of wood. </P>"
  }
}


/*
Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
  Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
  wall mount bottle opener
  wedding
  man cave
  christmas gift
  guy gift
  fathers day
  home bar
  beer
  bar

  The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

  glass
  sandblast cabinet
  vinyl
  beer glass
  pint glass
  etched pint glass
  etched glass
  etched beer glass
  16 oz pint
  beer gift
  etched harry potter glass
  the three broomsticks glass
  personalized harry potter glass
*/

//checks all items to see if the number of materials is greater than or equal to 8
// and then pushes each of those items to an array and returns that array
// also puts values in an array that holds index values of which items have more than 8 materials
var itemIndexValues = []

function checkNumMat(){
  items8Mat = [];
  for (var count = 0; count < items.length; count++) {
    if(items[count].materials.length >= 8){
      items8Mat.push(items[count]);
      itemIndexValues.push(count);
    }
  }
  return items8Mat;
}

// stores element to javascript variable
var jAnswer5 = document.getElementById("answer5");


// takes an item index and uses that to print the materials that item is made out of to the HTML
function printMat(whichItem){
  for (var count = 0; count < items[whichItem].materials.length; count++){
    jAnswer5.innerHTML += "<P>" + items[whichItem].materials[count] + "</P>"
  }
}


// uses checkNumMat to find the items that have 8 or more materials then prints the
// first one to the html then runs printMat to print the materirals those items are made from
for (var count = 0; count < checkNumMat().length; count++){
  jAnswer5.innerHTML += "<P>" + checkNumMat()[count].title  + " has " + checkNumMat()[count].materials.length + " materials:" + "</P>";
  printMat(itemIndexValues[count]);
}





/*
How many items were made by their sellers?
  18 were made by their sellers
*/
jAnswer6 = document.getElementById("answer6");

function itemsMadeByS(){
  var icount = 0;
  for(var count = 0; count < items.length; count++){
    if(items[count].who_made === "i_did"){
      icount++;
    }
  }
  jAnswer6.innerHTML = icount + " were made by their sellers"
}

itemsMadeByS();
