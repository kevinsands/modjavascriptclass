let x = ['coding','database','alphabet'];
function printHobbies(passedArray) {
    console.log(`like ${passedArray.length} things`);

    for (let i = 0; i < passedArray.length; i++) {
        let element = passedArray[i];
        console.log(`I like ` + element);
        
    }
}

printHobbies(x);