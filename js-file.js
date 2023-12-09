const gridContainer = document.getElementById("gridContainer");

const squaresButton = document.getElementById("squaresButton");

let userNumber = 64

squaresButton.addEventListener("click", () =>{
     userNumber = prompt("Please enter the number of squares you want in the grid.");
     userNumber = Math.floor(userNumber);
});

let isMouseDown = false;

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
