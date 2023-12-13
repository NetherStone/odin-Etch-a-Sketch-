const gridContainer = document.getElementById("gridContainer");

const squaresButton = document.getElementById("squaresButton");

let userNumber = 16;

let isMouseDown = false;

function divCreator(userNumber) {
    let divSize = 500 / userNumber;
    divSize = divSize.toString();
    divSize = divSize + 'px';
    for (let i = 0; i < userNumber; i++){ //16x16 grid in js
        for (let x = 0; x < userNumber; x++){
            let gridDiv = document.createElement("div");
            gridDiv.className = "gridDiv";
            gridDiv.style.width = divSize;
            gridDiv.style.height = divSize;
    
             gridDiv.addEventListener("mousedown", (event) => { //checks if mouse is inside the box
                isMouseDown = true;
                event.preventDefault(); 
            });
    
            gridDiv.addEventListener("mouseup", () => {
                isMouseDown = false;
            });
    
            gridDiv.addEventListener("mouseenter", (event) => {
                if (isMouseDown && (event.buttons & 1)) {
                    gridDiv.classList.add("hovered");
                };
            });
    
            gridContainer.appendChild(gridDiv); //append
        }
    }
}

divCreator(userNumber); //Base box for user to work with

squaresButton.addEventListener("click", () =>{ //Ask user for number of squares in grid, number should range from 1 to 100.
     userNumber = prompt("Please enter the number of squares you want in the grid.");
     userNumber = Math.floor(userNumber);
     if (isNaN(userNumber)){
        userNumber = 16;
     }

     if (userNumber < 1){
        userNumber = 16;
     } else if (userNumber > 100){
        userNumber = 16;
     }

     gridContainer.innerHTML = '';

     divCreator(userNumber);
});
