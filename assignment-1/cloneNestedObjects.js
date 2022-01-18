// JS Program to clone nested objects
// Approaches : 
//  1. (...) spread syntax - Performs a shallow copy
//  2. Object.assign() - Performs a shallow copy
//  3. JSON.stringify() - Performs a deep copy

let player={
    firstName : "Cristiano",
    lastName  : "Ronaldo",
    team      : "Man Utd.",
    address   :{
        city : "Manchester",
        country : "United Kingdom"
    }
}
console.log("Original Object:\n",player)

console.log("\nI will change player's nested object attributes and print newPlayer to see reflection of changes ")

// Using (...) spread syntax
console.log("\nCopying using (...) spread syntax\n");
let newPlayer = {...player};
player.firstName = "Leo";
player.address.city = "Paris";
player.address.country = "France";
//Since it was a shallow copy, making changes in player's upper level attributes won't affect new player attributes
//but changes in player's nested object attibutes would reflect in the new player as well 
//since the reference of nested objects is same for player and newPlayer.
console.log(newPlayer); //new player's city=Paris , country=France
console.log("Changes reflect");

player={
    firstName : "Cristiano",
    lastName  : "Ronaldo",
    team      : "Man Utd.",
    address   :{
        city : "Manchester",
        country : "United Kingdom"
    }
};

//Using Object.assign()
console.log("\nCopying using Object.assign()\n");
let newPlayer2 = Object.assign({},player);
player.lastName = "Messi";
player.address.city = "Paris";
player.address.country="France";
//Again a shallow copy, changes in nested object will reflect 
console.log(newPlayer2); //new player's city=Paris , country=France
console.log("Changes reflect");

player={
    firstName : "Cristiano",
    lastName  : "Ronaldo",
    team      : "Man Utd.",
    address   :{
        city : "Manchester",
        country : "United Kingdom"
    }
};

//Using JSON.stringify
console.log("\nCopying using JSON.stringify()\n");
let newPlayer3 = JSON.parse(JSON.stringify(player));
player.firstName ="Leo";
player.address.city="Paris";
player.address.country="France";
//This is a deep copy, so changes in player's nested object attributes won't reflect in newPlayer
//since a new reference for nested objects has been created for newPlayer. 
console.log(newPlayer3);
console.log("Changes don't reflect");