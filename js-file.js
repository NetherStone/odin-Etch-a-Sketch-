const gridContainer = document.getElementById("gridContainer");

const squaresButton = document.getElementById("squaresButton");

let userNumber = 16

let isMouseDown = false;

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

     console.log(userNumber);
});

for (let i = 0; i < 16; i++){ //16x16 grid in js
    for (let x = 0; x < 16; x++){
        let gridDiv = document.createElement("div");
        gridDiv.className = "gridDiv";

         gridDiv.addEventListener("mousedown", (event) => {
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
