const svg = document.getElementById("canvas");
let drawing = false;


let brushSize = 4;            // Change brush size
let brushColor = "#2E8B57";   // Bamboo Green

svg.addEventListener("mousedown", () => {
    drawing = true;
});

svg.addEventListener("mouseup", () => {
    drawing = false;
});

svg.addEventListener("mousemove", (e) => {
    if (drawing) draw(e);
});

function draw(e) {
    const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );

    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", brushSize);
    circle.setAttribute("fill", brushColor);

    svg.appendChild(circle);
}
