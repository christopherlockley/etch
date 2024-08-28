const gridSide = 600; 
let squaresPerSide = 16; 

const sketchArea = document.querySelector("#sketchArea"); 

const sliderContainer = document.querySelector("#sliderContainer"); 
const slider = document.querySelector("#slider"); 
const sliderValue = document.querySelector("#sliderValue"); 

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`; 

sketchArea.style.width = sketchArea.style.height = `${gridSide}px`;

function setBackGroundColor(){
this.style.backgroundColor = "darkslategrey"; 
}; 
   


 
function createGridCells(squaresPerSide){
    const numOfSquares = (squaresPerSide * squaresPerSide); 
    const widthOrHeight = `${(gridSide / squaresPerSide) - 2}px`;
    for (let i = 0; i < numOfSquares; i++){
        const gridCell = document.createElement("div"); 

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell"); 

        sketchArea.appendChild(gridCell); 

        gridCell.addEventListener("mouseover", setBackGroundColor);
    }
}

const toggleGrid = document.querySelector("#toggleGrid"); 

toggleGrid.addEventListener("click", () => {
    const gridCells = document.getElementById("#gridCell");
    gridCells.style.border = 0; 
})
    

function removeGridCells(){
    while (sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild); 
    }
}

createGridCells(16);

slider.oninput = function () {
    let txt = `${this.value} x ${this.value} (Resolution)`;
    sliderValue.innerHTML = txt; 
    removeGridCells(); 
    createGridCells(this.value); 
}











   
            
          
           
    
    
         

               
               
            
     
 
            
                
                
        
     


    
    
        
    


 

