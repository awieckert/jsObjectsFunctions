console.log("YAY JS!");

var favAnimal = {
    name: "Adam",
    aniaml: "Cats"
}

console.log("FavAnimal: ", favAnimal.aniaml);

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

console.log("InstructorPets: ", instructorPets);

var printNames = document.getElementById('petNames');

for(var i = 0; i < instructorPets.length; i++){
    var currentInstructorsPetName = instructorPets[i].petName;
    printNames.innerHTML += "<h1>" + currentInstructorsPetName + "</h1>";
}


