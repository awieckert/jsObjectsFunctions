console.log("YAY!")

// function expressions

var a = function(){
    console.log("a:", 3);
};

// function Declarations

function b(){
    console.log("b:", 2);
}

var num = 3;

function numPrinter (monkeyButt){
    console.log("my number", monkeyButt);
}

numPrinter(num);

function cat (){
    return "Love them";
}

var message = cat();
console.log("message: ", message);

var instructorPets = [
    {
        instructorName: "Adam",
        petName: "Lola",
        animalType: "Baby Cat!",
        isFavorite: false
    },
    {
        instructorName: "John",
        petName: "Lewy",
        animalType: "Fat Cat",
        isFavorite: true
    },
    {
        instructorName: "Callan",
        petName: "Seymour",
        animalType: "one eyed dog",
        isFavorite: true
    },
    {
        instructorName: "Callan",
        petName: "Wiley",
        animalType: "destructive dog",
        isFavorite: true
    }
];

// display each pet as a card

function printToDom (stringToPrint, divID) {
    var thingToPrint = document.getElementById(divID);
    thingToPrint.innerHTML += stringToPrint;
 }

printToDom("CAT", "div2");

function domStringMaker (animalArray){
    for(var i = 0; i < animalArray.length; i++){
        var string = "";
        if (animalArray[i].isFavorite){
            string += "<div class='favorite'>";
        } else {
            string += "<div class='not-favorite'>";
        } 
        string += "<h1>" + animalArray[i].petName + "</h1>" + "<p>Owner: " + animalArray[i].instructorName + "</p>" + "<p>Type: " + animalArray[i].animalType + "</p>" + "</div>";
        
        printToDom(string, "petNames");
        }
    }

domStringMaker(instructorPets);

// var printableString = domStringMaker(instructorPets[1]);
// console.log(printableString);



// for(var i = 0; i < instructorPets.length; i++){
//     domStringMaker(instructorPets[i]);
// }