document.addEventListener("DOMContentLoaded",()=>{
    let n = 4;
    let container = document.querySelector(".container");
    //to create 16*16 grid
    let pixelSize = container.offsetWidth / n;
    
    for(let i = 0; i < n; i++){
        let row = document.createElement("div");
        row.className = "row";
        for(let j = 0; j < n; j++){
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.style.width = `${pixelSize}px`;
            pixel.style.height = `${pixelSize}px`;

            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
})