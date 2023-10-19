function createDrawingWindow () {
    const drawingbg = document.querySelector('.drawingbg')
    console.log(drawingbg)
    let width = (document.body.offsetWidth / 16);
    let height = (document.body.offsetHeight / 16);
    let area = width * height

    drawingbg.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    drawingbg.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    
    for (let i = 0; i < (area + 1); i++) {
        const pixel = document.createElement('div')
        console.log('oi')
        drawingbg.appendChild(pixel)
        pixel.classList.add('pixel')
        pixel.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "green";
        });
        pixel.addEventListener("dragstart", function(event) {
            event.preventDefault();
        });
    }


}

function draw(e) {
    e.style.backgroundColor = "purple"
}

createDrawingWindow()
