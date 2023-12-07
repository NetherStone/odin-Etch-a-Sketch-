const gridContainer = document.getElementById("gridContainer");

for (let i = 0; i < 16; i++){ //16x16 grid in js
    for (let x = 0; x < 16; x++){
        let gridDiv = document.createElement("div");
        gridDiv.className = "gridDiv";

        gridDiv.addEventListener("mousedown", function(MouseEvent) {
            isMouseDown = true;
            MouseEvent.preventDefault();
        });
        
        gridDiv.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        gridDiv.addEventListener("mouseenter", () => {
            if (isMouseDown) {
                gridDiv.classList.add("hovered");
            };
        });
       /*gridDiv.addEventListener("mouseover", () => {
            gridDiv.classList.add("hovered");
        }); */

        gridContainer.appendChild(gridDiv);
    }
}
