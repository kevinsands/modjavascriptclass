const hobbiesArray = [
    { name: "coding", yearLength: 27},
    { name: "database", yearLength: 35},
     { name: "other", yearLength: 15}
]

function printHobbyInfo(hobby) {
    console.log(` ${hobby.name}  for ${hobby.yearLength} years`);
}

for (let index=0; index < hobbiesArray.length; index++) {
 //  console.log(index);
    printHobbyInfo(hobbiesArray[index]);
  
        
    }



