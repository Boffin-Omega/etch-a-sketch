let n = 16;
let mouse_down = false;

function draw_grid(n){
        let container = document.querySelector(".container"); //this line is needed, cant make it global
        let pixelSize = container.offsetWidth / n;

        //to create nxn grud
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
}

document.addEventListener("DOMContentLoaded",()=>{
    let container = document.querySelector(".container");
    draw_grid(n);

    document.querySelector(".nav").addEventListener("click",(e)=>{
        if(e.target.id == "change"){
            //to change n
            
            n = Number(prompt("Enter new grid size"));
            if(n <1 || n >100 || n===NaN || !Number.isInteger(n)) alert("Invalid grid size! Must be an integer between 1 and 100");
            else{
                container.innerHTML="";
                draw_grid(n);
            }
        }
        else{
            //sort of eraser, to reset all the 'drawing'
            container.innerHTML="";
            draw_grid(n);
        }
    })

    //to draw
    container.addEventListener("mouseover",(e)=>{
        
        console.log(e.target);
        if(e.target.className=="pixel" && mouse_down == true){
            e.target.style.backgroundColor = "black";
        } 
    })
    //almost always mouseover is triggered before mousedown
    container.addEventListener("mousedown",(e)=>{
        if(e.target.className=="pixel"){
            mouse_down = true;
        }
    })
    container.addEventListener("mouseup",(e)=>{
        if(e.target.className=="pixel") mouse_down=false;
    })

    container.addEventListener("click",(e)=>{
        if(e.target.className=="pixel") e.target.style.backgroundColor = "black";
    })
})