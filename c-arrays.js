// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen in op.              // bijv. 2020, 2019, 2018 en 2017
// ==========================================
const yearsWon = [2015, 2017, 2018, 2020];
console.log(yearsWon);

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies in op.         // bijv. schaken, koekjes eten en muziek luisteren
// ==========================================
const hobbies = ["golf", "paardrijden", "koken"];
console.log(hobbies);

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Log de waarde 3 uit de array in de terminal                                          // geeft 3
// ==========================================
const numberList = [3, 4, 5, 7, 2];
console.log(numberList[4]);
console.log(numberList[numberList.length -1]); // geeft laatste index

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje
// 4b. Log de waarde blauw uit de array in de terminal                                      // geeft blauw
// 4c. Log de waarde geel uit de array in de terminal                                       // geeft geel
// ==========================================
const colorList = ["groen", "geel", "rood", "paars", "blauw", "oranje"];
console.log(colorList[4]);
console.log(colorList[1]);

// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25
// 5b. Pas een van de items in de array aan zodat de cijferreeks netjes doorloopt
// 5c. Log de de array in de terminal                                                       // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
let numbersInOrder = [21, 22, 23, 25, 25];
numbersInOrder[3] = numbersInOrder[3] * 0.5; // 50% korting bijvoorbeeld op dit item
console.log(numbersInOrder);

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Verander daarna de waarde bladerdeeg in lasagne bladen
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================
let recipeIngredients = ["bladerdeeg", "knoflook", "spinazie"];
recipeIngredients[0] = "lasagne bladen";
console.log(recipeIngredients);
console.log(recipeIngredients.length);