const gridContainer = document.getElementById("gridContainer");

for (let i = 0; i < 16; i++){ //16x16 grid in js
    for (let x = 0; x < 16; x++) {
        let gridDiv = document.createElement("div");
        gridContainer.appendChild(gridDiv);
    }
}
