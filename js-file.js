const gridContainer = document.getElementById("gridContainer");

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
