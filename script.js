const gridWidth = getComputedStyle(document.body).getPropertyValue("--grid-width"); 
const accentColour = getComputedStyle(document.body).getPropertyValue("--accent-colour"); 
const inactiveColour = getComputedStyle(document.body).getPropertyValue("--inactive-colour"); 


const sketchArea = document.querySelector("#sketchArea"); 


const slider = document.querySelector("#slider"); 
const sliderValue = document.querySelector("#sliderValue"); 

const gridToggle = document.querySelector("#gridToggle"); 
const eraserToggle = document.querySelector("#eraser");

let squaresPerSide = 16; 
let gridVisible = false; 

let isDrawing = false; 

let eraserOn = false; 

function toggleGrid(){
    gridVisible = gridVisible ? false : true; 
    gridToggle.style.color  = gridVisible ?  accentColour : inactiveColour; 

    removeGridSquares();
    createGridSquares();
}

gridToggle.addEventListener("click", toggleGrid); 

function toggleEraser(){
    eraserOn = eraserOn ? false:true; 
    eraserToggle.style.color = eraserOn ? accentColour : inactiveColour; 

   

}

eraserToggle.addEventListener("click", toggleEraser);

function eraseBackGroundColor(e){
    if (e.type === "click" && eraserOn === true){
        e.target.style.backgroundColor = "white";
     }

     else if (e.type === "mouseover" && eraserOn === true){
        e.target.style.backgroundColor = "white"; 
     }
    
}

const rainbowToggle = document.querySelector("#toggleRainbow"); 


let rainbowOn = false;

function toggleRainbow(){
    rainbowOn = rainbowOn ? false: true; 
    rainbowToggle.style.color = rainbowOn ? accentColour: inactiveColour;

    }

    rainbowToggle.addEventListener("click", toggleRainbow); 


    function getRandomColour(e){

        if (e.type === "click" && rainbowOn === true){
            

            for (let i = 0; i < 20; i++){
            const randomColours = ["#00FFF", "#8A2BE2", "#00FFFF"]; 
            let randomColour = `#` + Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = randomColour; 
        }
      

    }

    else if (e.type === "mouseover" && rainbowOn === true){
        

        for (let i = 0; i < 20; i++){
        const randomColours = ["#00FFF", "#8A2BE2", "#00FFFF"]; 
        let randomColour = `#` + Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = randomColour; 
    }
  }}






function setBackGroundColor(e){
 if (e.type === "mousedown"){
    isDrawing = true; 
    e.target.style.backgroundColor = "black"; 
 }

 else if (e.type === "mouseover" && isDrawing){
    e.target.style.backgroundColor = "black"; 
 }
 else isDrawing = false; 


}
   
sliderValue.textContent = "Resolution 16 x 16";


 
function createGridSquares(){
    const numOfSquares = (squaresPerSide * squaresPerSide); 
    
    
    for (let i = 0; i < numOfSquares; i++){
        const gridCell = document.createElement("div"); 
        let widthOrHeight = 0; 

        if (gridVisible ){
            widthOrHeight = `${(parseInt(gridWidth) / squaresPerSide) -2}px`;
            gridCell.style.border = "1px solid whitesmoke"; 
        }

        else if (!gridVisible){
            widthOrHeight = `${(parseInt(gridWidth) / squaresPerSide)}px`;
            gridCell.style.border = "none"; 
        }

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.addEventListener("mousedown", (e) => setBackGroundColor(e));
        gridCell.addEventListener("mouseover", (e) => setBackGroundColor(e));
        gridCell.addEventListener("mouseup", (e) => setBackGroundColor(e));
        gridCell.addEventListener("click", (e) => eraseBackGroundColor(e));
        gridCell.addEventListener("mouseover", (e) => eraseBackGroundColor(e));
        gridCell.addEventListener("click", (e) => getRandomColour(e));  
        gridCell.addEventListener("mouseover", (e) => getRandomColour(e)); 
      

        gridCell.addEventListener("dragstart", (e) => {e.preventDefault()}); 

        sketchArea.appendChild(gridCell); 

       
    }
}



    

function removeGridSquares(){
    while (sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild); 
    }
}

createGridSquares();

slider.oninput = function () {
    
    squaresPerSide = this.value; 
    sliderValue.textContent = `Resolution ${this.value} x ${this.value}`;
    removeGridSquares(); 
    createGridSquares(); 
}











   
            
          
           
    
    
         

               
               
            
     
 
            
                
                
        
     


    
    
        
    


 

